/*! Rappid v2.1.0 - HTML5 Diagramming Framework

Copyright (c) 2015 client IO

 2017-03-31 


This Source Code Form is subject to the terms of the Rappid License
, v. 2.0. If a copy of the Rappid License was not distributed with this
file, You can obtain one at http://jointjs.com/license/rappid_v2.txt
 or from the Rappid archive as was distributed by client IO. See the LICENSE file.*/


// Navigator
// =========

// 'Navigator' creates a new paper (usually smaller) that helps select what part
// of the diagram is shown (especially for a larger diagram) and provides
// a different way how to zoom.

// Example usage:
//
// var nav = new joint.ui.Navigator({
//     paperScroller: paperScroller,
//     width: 200,
//     height: 200,
// });
//
// nav.$el.appendTo('#navigator');
// nav.render();
joint.ui.Navigator = joint.mvc.View.extend({

    className: 'navigator',

    events: {
        'mousedown': 'startAction',
        'touchstart': 'startAction'
    },

    options: {
        paperConstructor: joint.dia.Paper,
        paperOptions: {},
        /**
         * @deprecated use zoom instead
         */
        zoomOptions: null,
        zoom: { min: 0.5, max: 2 },
        width: 300,
        height: 200,
        padding: 10
    },

    init: function() {

        if (this.options.zoomOptions) {
            // backward compatibility
            this.options.zoom = _.extend({}, this.options.zoom, this.options.zoomOptions);
        } else if (this.options.zoom) {
            this.options.zoom = _.defaults({}, this.options.zoom, this.constructor.prototype.options.zoom);
        }

        _.bindAll(this, 'updateCurrentView', 'doAction', 'stopAction', 'scrollTo');

        // The updateCurrentView is called everytime paperScroller's scrollbars change
        // or the paper is resized. Resize of the paper is normally also acompanied
        // by a scrollbar change (but doesn't have to be). An event is triggered for
        // the vertical and horizontal scrollbar change. That leads to the updateCurrentView
        // to be called upto 4 times per one paperScroller action. Debouncing the method solves
        // this issue but there is definitely room for improvement.
        // + it solves an issue with wrong target paper position while zooming out a paper with
        // negative x-origin
        this.updateCurrentView = _.debounce(this.updateCurrentView, 0);

        var paperScroller = this.options.paperScroller;
        paperScroller.$el.on('scroll.navigator', this.updateCurrentView);

        var sourcePaper = this.sourcePaper = paperScroller.options.paper;
        this.listenTo(sourcePaper, 'resize', this.updatePaper);

        var targetPaper = this.targetPaper = new this.options.paperConstructor(_.merge({
            model: sourcePaper.model,
            interactive: false
        }, this.options.paperOptions));

        targetPaper.$el.on({
            'mousedown.navigator': this.scrollTo,
            'touchstart.navigator': this.scrollTo
        });

        $(document.body).on({
            'mousemove.navigator touchmove.navigator': this.doAction,
            'mouseup.navigator touchend.navigator': this.stopAction
        });
    },

    render: function() {

        this.targetPaper.$el.appendTo(this.el);

        // Adding cell views requires the paper element to be appended to the DOM.
        // Make sure the elements are rendered before links.
        var sourceGraph = this.sourcePaper.model;
        var sourceCells = sourceGraph.getElements().concat(sourceGraph.getLinks());
        _.each(sourceCells, _.bind(this.targetPaper.renderView, this.targetPaper));

        this.$currentView = $('<div>').addClass('current-view');

        if (this.options.zoom) {
            var $currentViewControl = $('<div>').addClass('current-view-control');
            this.$currentView.append($currentViewControl);
        }

        this.$el.append(this.$currentView).css({
            width: this.options.width,
            height: this.options.height,
            padding: this.options.padding
        });

        // setting right target paper dimension for the first time.
        this.updatePaper(this.sourcePaper.options.width, this.sourcePaper.options.height);

        return this;
    },

    // Updates the navigator's paper size and transformations
    updatePaper: function(width, height) {

        var sourceOrigin = this.sourcePaper.options.origin;
        var sourceScale = this.sourcePaper.scale();
        var navigatorWidth = this.options.width - 2 * this.options.padding;
        var navigatorHeight = this.options.height - 2 * this.options.padding;

        width /= sourceScale.sx;
        height /= sourceScale.sy;

        var ratio = this.ratio = Math.min(navigatorWidth / width, navigatorHeight / height);
        var ox = sourceOrigin.x * ratio / sourceScale.sx;
        var oy = sourceOrigin.y * ratio / sourceScale.sy;

        width *= ratio;
        height *= ratio;

        this.targetPaper.setDimensions(width, height);
        this.targetPaper.setOrigin(ox, oy);
        this.targetPaper.scale(ratio, ratio);

        this.updateCurrentView();
    },

    // Updates the position and size of the navigator's current view rectangle.
    updateCurrentView: function() {

        var ratio = this.ratio;
        var sourceScale = this.sourcePaper.scale();
        var paperScroller = this.options.paperScroller;
        var topLeftCoordinates = paperScroller.clientToLocalPoint(0, 0);
        var paperPosition = this.targetPaper.$el.position();
        var paperOrigin = this.targetPaper.translate();

        // IE returns translate.ty = NaN when ty = 0. It sets transform attribute to 'translate(tx)'.
        // TODO: handle this in the vectorizer
        paperOrigin.ty = paperOrigin.ty || 0;

        this.currentViewGeometry = {
            top: paperPosition.top + topLeftCoordinates.y * ratio + paperOrigin.ty,
            left: paperPosition.left + topLeftCoordinates.x * ratio + paperOrigin.tx,
            width: paperScroller.$el.innerWidth() * ratio / sourceScale.sx,
            height: paperScroller.$el.innerHeight() * ratio / sourceScale.sy
        };

        this.$currentView.css(this.currentViewGeometry);
    },

    startAction: function(evt) {

        evt = joint.util.normalizeEvent(evt);

        // click on current-view control starts zooming
        // otherwise paper panning is initated.
        this._action = $(evt.target).hasClass('current-view-control')
            ? 'zooming'
            : 'panning';

        this._clientX = evt.clientX;
        this._clientY = evt.clientY;
    },

    doAction: function(evt) {

        if (!this._action) return;

        evt = joint.util.normalizeEvent(evt);

        var sourceScale = this.sourcePaper.scale();
        var dx = (evt.clientX - this._clientX) * sourceScale.sx;
        var dy = (evt.clientY - this._clientY) * sourceScale.sy;

        switch (this._action) {

            case 'panning':
                this.options.paperScroller.el.scrollLeft += dx / this.ratio;
                this.options.paperScroller.el.scrollTop += dy / this.ratio;
                break;

            case 'zooming':

                // dx/width is the ratio of the original width and the requested width
                var levelDiff =  - dx / this.currentViewGeometry.width;
                this.options.paperScroller.zoom(levelDiff, this.options.zoom);
                break;
        }

        this._clientX = evt.clientX;
        this._clientY = evt.clientY;
    },

    stopAction: function() {

        this._action = null;
    },

    // Scrolls the view to the position determined by the event.
    scrollTo: function(evt) {

        evt = joint.util.normalizeEvent(evt);

        var paperOrigin = this.targetPaper.translate();
        // TODO: see updateCurrentView method
        paperOrigin.ty = paperOrigin.ty || 0;

        var offsetX, offsetY;
        // There is no offsetX/offsetY property in the Firefox event
        if (_.isUndefined(evt.offsetX)) {
            var targetPaperOffset = this.targetPaper.$el.offset();
            offsetX = evt.pageX - targetPaperOffset.left;
            offsetY = evt.pageY - targetPaperOffset.top;
        } else {
            offsetX = evt.offsetX;
            offsetY = evt.offsetY;
        }

        var cx = (offsetX - paperOrigin.tx) / this.ratio;
        var cy = (offsetY - paperOrigin.ty) / this.ratio;

        this.options.paperScroller.center(cx, cy);
    },

    onRemove: function() {

        this.targetPaper.$el.off('.navigator');
        this.targetPaper.remove();
        this.options.paperScroller.$el.off('.navigator');
        $(document.body).off('.navigator');
    }

});
