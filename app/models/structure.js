phantom.libraryPath = '<%= Rails.root %>';

var page = require('webpage').create();
page.viewportSize = { width: 400, height: 400 };
page.content = '<html><body><div id="structure"></div></body></html>';

page.injectJs('node_modules/jquery/dist/jquery.js');
page.injectJs('node_modules/lodash/index.js');
page.injectJs('node_modules/backbone/backbone.js');
page.injectJs('node_modules/graphlib/dist/graphlib.core.min.js');
page.injectJs('node_modules/dagre/dist/dagre.core.js');
page.injectJs('app/assets/javascripts/rappid/rappid.js');
page.injectJs('app/assets/javascripts/joint.items.js');
page.injectJs('app/assets/javascripts/joint.layout.treeLayout.js');
if (page.injectJs('app/assets/javascripts/structure.js')) {
  page.evaluate(function() {
    var structureJSON = JSON.parse('<%= @structure.to_json %>')
    renderStructure(structureJSON);
  });
}

require('fs').write('/dev/stdout', page.renderBase64('PNG'), 'w');
phantom.exit();
