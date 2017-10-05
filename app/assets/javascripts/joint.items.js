joint.shapes.AllcruxLink = joint.dia.Link.extend({
    defaults: {
        type: 'AllcruxLink',
        z: -1,
        // smooth:true
    }
});

DefaultTheme = {};
DefaultTheme.instrumentHoldingFillColor = '#554499';
DefaultTheme.instrumentHoldingStrokeColor = 'black';
DefaultTheme.instrumentHoldingHighOpacity = 1;
DefaultTheme.instrumentHoldingLowOpacity = 0.1;
DefaultTheme.instrumentHoldingWidth = 1;
DefaultTheme.instrumentHoldingWidthDebt = 3;
DefaultTheme.instrumentHoldingWidthOwnership = 2;
DefaultTheme.instrumentHoldingWidthOtherInstrument = 2.5;

joint.shapes.EQUITY = joint.shapes.AllcruxLink.extend({
  defaults: {
    type: 'EQUITY',
    attrs: {
      '.marker-target': {
        fill: DefaultTheme.instrumentHoldingFillColor,
        d: 'M 10 0 L 0 5 L 10 10 z',
        display: 'block',
        'stroke-opacity': DefaultTheme.instrumentHoldingHighOpacity,
        'fill-opacity': DefaultTheme.instrumentHoldingHighOpacity
      },
      '.connection': {
        display: 'block',
        'stroke-opacity': DefaultTheme.instrumentHoldingHighOpacity,
        'fill-opacity': DefaultTheme.instrumentHoldingHighOpacity
      },
      '.marker-source': {
        display: 'block',
        'stroke-opacity': DefaultTheme.instrumentHoldingLowOpacity,
        'fill-opacity': DefaultTheme.instrumentHoldingLowOpacity
      },
      g: {
        display: 'block',
        'stroke-opacity': DefaultTheme.instrumentHoldingHighOpacity,
        'fill-opacity': DefaultTheme.instrumentHoldingHighOpacity
      }
    },
    toolMarkup: [
            '<g class="link-tool">',
            '<g class="tool-remove" event="tool:remove">',
            '<circle r="11" />',
            '<path transform="scale(.8) translate(-16, -16)" d="M24.778,21.419 19.276,15.917 24.777,10.415 21.949,7.585 16.447,13.087 10.945,7.585 8.117,10.415 13.618,15.917 8.116,21.419 10.946,24.248 16.447,18.746 21.948,24.248z"/>',
            '<title>Remove link.</title>',
            '</g>',
            '<g event="link:options">',
            '<circle r="11" transform="translate(25)"/>',
            '<path fill="white" transform="scale(.55) translate(29, -16)" d="M31.229,17.736c0.064-0.571,0.104-1.148,0.104-1.736s-0.04-1.166-0.104-1.737l-4.377-1.557c-0.218-0.716-0.504-1.401-0.851-2.05l1.993-4.192c-0.725-0.91-1.549-1.734-2.458-2.459l-4.193,1.994c-0.647-0.347-1.334-0.632-2.049-0.849l-1.558-4.378C17.165,0.708,16.588,0.667,16,0.667s-1.166,0.041-1.737,0.105L12.707,5.15c-0.716,0.217-1.401,0.502-2.05,0.849L6.464,4.005C5.554,4.73,4.73,5.554,4.005,6.464l1.994,4.192c-0.347,0.648-0.632,1.334-0.849,2.05l-4.378,1.557C0.708,14.834,0.667,15.412,0.667,16s0.041,1.165,0.105,1.736l4.378,1.558c0.217,0.715,0.502,1.401,0.849,2.049l-1.994,4.193c0.725,0.909,1.549,1.733,2.459,2.458l4.192-1.993c0.648,0.347,1.334,0.633,2.05,0.851l1.557,4.377c0.571,0.064,1.148,0.104,1.737,0.104c0.588,0,1.165-0.04,1.736-0.104l1.558-4.377c0.715-0.218,1.399-0.504,2.049-0.851l4.193,1.993c0.909-0.725,1.733-1.549,2.458-2.458l-1.993-4.193c0.347-0.647,0.633-1.334,0.851-2.049L31.229,17.736zM16,20.871c-2.69,0-4.872-2.182-4.872-4.871c0-2.69,2.182-4.872,4.872-4.872c2.689,0,4.871,2.182,4.871,4.872C20.871,18.689,18.689,20.871,16,20.871z"/>',
            '<title>Edit Instrument</title>',
            '</g>',
            '</g>'
        ].join('')
  }
});

joint.shapes.EQUITYINSTRUMENT = joint.shapes.AllcruxLink.extend({
  defaults: {
    type: 'EQUITYINSTRUMENT',
    attrs: {
      '.marker-target': {
        fill: DefaultTheme.instrumentHoldingFillColor,
        d: 'M 10 0 L 0 5 L 10 10 z',
        display: 'block',
        'stroke-opacity': DefaultTheme.instrumentHoldingHighOpacity,
        'fill-opacity': DefaultTheme.instrumentHoldingHighOpacity
      },
      '.connection': {
        display: 'block',
        'stroke-opacity': DefaultTheme.instrumentHoldingHighOpacity,
        'fill-opacity': DefaultTheme.instrumentHoldingHighOpacity
      },
      '.marker-source': {
        display: 'block',
        'stroke-opacity': DefaultTheme.instrumentHoldingLowOpacity,
        'fill-opacity': DefaultTheme.instrumentHoldingLowOpacity
      },
      g: {
        display: 'block',
        'stroke-opacity': DefaultTheme.instrumentHoldingHighOpacity,
        'fill-opacity': DefaultTheme.instrumentHoldingHighOpacity
      }
    },
    toolMarkup: [
            '<g class="link-tool">',
            '<g class="tool-remove" event="tool:remove">',
            '<circle r="11" />',
            '<path transform="scale(.8) translate(-16, -16)" d="M24.778,21.419 19.276,15.917 24.777,10.415 21.949,7.585 16.447,13.087 10.945,7.585 8.117,10.415 13.618,15.917 8.116,21.419 10.946,24.248 16.447,18.746 21.948,24.248z"/>',
            '<title>Remove link.</title>',
            '</g>',
            '<g class="tool-option" event="link:options">',
            '<circle r="11" transform="translate(25)"/>',
            '<path fill="white" transform="scale(.55) translate(29, -16)" d="M31.229,17.736c0.064-0.571,0.104-1.148,0.104-1.736s-0.04-1.166-0.104-1.737l-4.377-1.557c-0.218-0.716-0.504-1.401-0.851-2.05l1.993-4.192c-0.725-0.91-1.549-1.734-2.458-2.459l-4.193,1.994c-0.647-0.347-1.334-0.632-2.049-0.849l-1.558-4.378C17.165,0.708,16.588,0.667,16,0.667s-1.166,0.041-1.737,0.105L12.707,5.15c-0.716,0.217-1.401,0.502-2.05,0.849L6.464,4.005C5.554,4.73,4.73,5.554,4.005,6.464l1.994,4.192c-0.347,0.648-0.632,1.334-0.849,2.05l-4.378,1.557C0.708,14.834,0.667,15.412,0.667,16s0.041,1.165,0.105,1.736l4.378,1.558c0.217,0.715,0.502,1.401,0.849,2.049l-1.994,4.193c0.725,0.909,1.549,1.733,2.459,2.458l4.192-1.993c0.648,0.347,1.334,0.633,2.05,0.851l1.557,4.377c0.571,0.064,1.148,0.104,1.737,0.104c0.588,0,1.165-0.04,1.736-0.104l1.558-4.377c0.715-0.218,1.399-0.504,2.049-0.851l4.193,1.993c0.909-0.725,1.733-1.549,2.458-2.458l-1.993-4.193c0.347-0.647,0.633-1.334,0.851-2.049L31.229,17.736zM16,20.871c-2.69,0-4.872-2.182-4.872-4.871c0-2.69,2.182-4.872,4.872-4.872c2.689,0,4.871,2.182,4.871,4.872C20.871,18.689,18.689,20.871,16,20.871z"/>',
            '<title>Edit Instrument</title>',
            '</g>',
            '</g>'
        ].join('')
  }
});

joint.shapes.DEBTINSTRUMENT = joint.shapes.AllcruxLink.extend({
  defaults: {
    type: 'DEBTINSTRUMENT',
    attrs: {
        ".marker-target": {
          "fill": DefaultTheme.instrumentHoldingFillColor,
          "d": "M 10 0 L 0 5 L 10 10 z",
          "display": "block",
          "stroke-opacity": DefaultTheme.instrumentHoldingLowOpacity,
          "fill-opacity": DefaultTheme.instrumentHoldingLowOpacity
        },
        ".connection": {
          "stroke": "red",
          "stroke-width": DefaultTheme.instrumentHoldingWidthDebt,
          "stroke-dasharray": "5 2",
          "display": "block",
          "stroke-opacity": DefaultTheme.instrumentHoldingLowOpacity,
          "fill-opacity": DefaultTheme.instrumentHoldingLowOpacity
        },
        ".marker-source": {
          "display": "block",
          "stroke-opacity": DefaultTheme.instrumentHoldingLowOpacity,
          "fill-opacity": DefaultTheme.instrumentHoldingLowOpacity
        },
        "g": {
          "display": "block",
          "stroke-opacity": DefaultTheme.instrumentHoldingHighOpacity,
          "fill-opacity": DefaultTheme.instrumentHoldingHighOpacity

        }
    },
    toolMarkup: [
            '<g class="link-tool">',
            '<g class="tool-remove" event="tool:remove">',
            '<circle r="11" />',
            '<path transform="scale(.8) translate(-16, -16)" d="M24.778,21.419 19.276,15.917 24.777,10.415 21.949,7.585 16.447,13.087 10.945,7.585 8.117,10.415 13.618,15.917 8.116,21.419 10.946,24.248 16.447,18.746 21.948,24.248z"/>',
            '<title>Remove link.</title>',
            '</g>',
            '<g event="link:options">',
            '<circle r="11" transform="translate(25)"/>',
            '<path fill="white" transform="scale(.55) translate(29, -16)" d="M31.229,17.736c0.064-0.571,0.104-1.148,0.104-1.736s-0.04-1.166-0.104-1.737l-4.377-1.557c-0.218-0.716-0.504-1.401-0.851-2.05l1.993-4.192c-0.725-0.91-1.549-1.734-2.458-2.459l-4.193,1.994c-0.647-0.347-1.334-0.632-2.049-0.849l-1.558-4.378C17.165,0.708,16.588,0.667,16,0.667s-1.166,0.041-1.737,0.105L12.707,5.15c-0.716,0.217-1.401,0.502-2.05,0.849L6.464,4.005C5.554,4.73,4.73,5.554,4.005,6.464l1.994,4.192c-0.347,0.648-0.632,1.334-0.849,2.05l-4.378,1.557C0.708,14.834,0.667,15.412,0.667,16s0.041,1.165,0.105,1.736l4.378,1.558c0.217,0.715,0.502,1.401,0.849,2.049l-1.994,4.193c0.725,0.909,1.549,1.733,2.459,2.458l4.192-1.993c0.648,0.347,1.334,0.633,2.05,0.851l1.557,4.377c0.571,0.064,1.148,0.104,1.737,0.104c0.588,0,1.165-0.04,1.736-0.104l1.558-4.377c0.715-0.218,1.399-0.504,2.049-0.851l4.193,1.993c0.909-0.725,1.733-1.549,2.458-2.458l-1.993-4.193c0.347-0.647,0.633-1.334,0.851-2.049L31.229,17.736zM16,20.871c-2.69,0-4.872-2.182-4.872-4.871c0-2.69,2.182-4.872,4.872-4.872c2.689,0,4.871,2.182,4.871,4.872C20.871,18.689,18.689,20.871,16,20.871z"/>',
            '<title>Edit Instrument</title>',
            '</g>',
            '</g>'
        ].join('')
  }
});

joint.shapes.OTHERINSTRUMENT = joint.shapes.AllcruxLink.extend({
  defaults: {
    type: 'OTHERINSTRUMENT',
    attrs: {
      '.marker-target': {
        fill: DefaultTheme.instrumentHoldingFillColor,
        d: 'M 10 0 L 0 5 L 10 10 z',
        display: 'block',
        'stroke-opacity': DefaultTheme.instrumentHoldingHighOpacity,
        'fill-opacity': DefaultTheme.instrumentHoldingHighOpacity
      },
      '.connection': {
        display: 'block',
        "stroke-width": DefaultTheme.instrumentHoldingWidthOtherInstrument,
        'stroke-opacity': DefaultTheme.instrumentHoldingHighOpacity,
        'fill-opacity': DefaultTheme.instrumentHoldingHighOpacity
      },
      '.marker-source': {
        display: 'block',
        'stroke-opacity': DefaultTheme.instrumentHoldingLowOpacity,
        'fill-opacity': DefaultTheme.instrumentHoldingLowOpacity
      },
      g: {
        display: 'block',
        'stroke-opacity': DefaultTheme.instrumentHoldingHighOpacity,
        'fill-opacity': DefaultTheme.instrumentHoldingHighOpacity
      }
    },
    toolMarkup: [
            '<g class="link-tool">',
            '<g class="tool-remove" event="tool:remove">',
            '<circle r="11" />',
            '<path transform="scale(.8) translate(-16, -16)" d="M24.778,21.419 19.276,15.917 24.777,10.415 21.949,7.585 16.447,13.087 10.945,7.585 8.117,10.415 13.618,15.917 8.116,21.419 10.946,24.248 16.447,18.746 21.948,24.248z"/>',
            '<title>Remove link.</title>',
            '</g>',
            '<g event="link:options">',
            '<circle r="11" transform="translate(25)"/>',
            '<path fill="white" transform="scale(.55) translate(29, -16)" d="M31.229,17.736c0.064-0.571,0.104-1.148,0.104-1.736s-0.04-1.166-0.104-1.737l-4.377-1.557c-0.218-0.716-0.504-1.401-0.851-2.05l1.993-4.192c-0.725-0.91-1.549-1.734-2.458-2.459l-4.193,1.994c-0.647-0.347-1.334-0.632-2.049-0.849l-1.558-4.378C17.165,0.708,16.588,0.667,16,0.667s-1.166,0.041-1.737,0.105L12.707,5.15c-0.716,0.217-1.401,0.502-2.05,0.849L6.464,4.005C5.554,4.73,4.73,5.554,4.005,6.464l1.994,4.192c-0.347,0.648-0.632,1.334-0.849,2.05l-4.378,1.557C0.708,14.834,0.667,15.412,0.667,16s0.041,1.165,0.105,1.736l4.378,1.558c0.217,0.715,0.502,1.401,0.849,2.049l-1.994,4.193c0.725,0.909,1.549,1.733,2.459,2.458l4.192-1.993c0.648,0.347,1.334,0.633,2.05,0.851l1.557,4.377c0.571,0.064,1.148,0.104,1.737,0.104c0.588,0,1.165-0.04,1.736-0.104l1.558-4.377c0.715-0.218,1.399-0.504,2.049-0.851l4.193,1.993c0.909-0.725,1.733-1.549,2.458-2.458l-1.993-4.193c0.347-0.647,0.633-1.334,0.851-2.049L31.229,17.736zM16,20.871c-2.69,0-4.872-2.182-4.872-4.871c0-2.69,2.182-4.872,4.872-4.872c2.689,0,4.871,2.182,4.871,4.872C20.871,18.689,18.689,20.871,16,20.871z"/>',
            '<title>Edit Instrument</title>',
            '</g>',
            '</g>'
        ].join('')
  }
});


joint.shapes.DEBT = joint.shapes.AllcruxLink.extend({
  defaults: {
    type: 'DEBT',
    attrs: {
        ".marker-target": {
          "fill": DefaultTheme.instrumentHoldingFillColor,
          "d": "M 10 0 L 0 5 L 10 10 z",
          "display": "block",
          "stroke-opacity": DefaultTheme.instrumentHoldingLowOpacity,
          "fill-opacity": DefaultTheme.instrumentHoldingLowOpacity
        },
        ".connection": {
          "stroke": "red",
          "stroke-width": DefaultTheme.instrumentHoldingWidthDebt,
          "stroke-dasharray": "5 2",
          "display": "block",
          "stroke-opacity": DefaultTheme.instrumentHoldingLowOpacity,
          "fill-opacity": DefaultTheme.instrumentHoldingLowOpacity
        },
        ".marker-source": {
          "display": "block",
          "stroke-opacity": DefaultTheme.instrumentHoldingLowOpacity,
          "fill-opacity": DefaultTheme.instrumentHoldingLowOpacity
        },
        "g": {
          "display": "block",
          "stroke-opacity": DefaultTheme.instrumentHoldingLowOpacity,
          "fill-opacity": DefaultTheme.instrumentHoldingLowOpacity

        }
    },
    toolMarkup: [
            '<g class="link-tool">',
            '<g class="tool-remove" event="tool:remove">',
            '<circle r="11" />',
            '<path transform="scale(.8) translate(-16, -16)" d="M24.778,21.419 19.276,15.917 24.777,10.415 21.949,7.585 16.447,13.087 10.945,7.585 8.117,10.415 13.618,15.917 8.116,21.419 10.946,24.248 16.447,18.746 21.948,24.248z"/>',
            '<title>Remove link.</title>',
            '</g>',
            '<g event="link:options">',
            '<circle r="11" transform="translate(25)"/>',
            '<path fill="white" transform="scale(.55) translate(29, -16)" d="M31.229,17.736c0.064-0.571,0.104-1.148,0.104-1.736s-0.04-1.166-0.104-1.737l-4.377-1.557c-0.218-0.716-0.504-1.401-0.851-2.05l1.993-4.192c-0.725-0.91-1.549-1.734-2.458-2.459l-4.193,1.994c-0.647-0.347-1.334-0.632-2.049-0.849l-1.558-4.378C17.165,0.708,16.588,0.667,16,0.667s-1.166,0.041-1.737,0.105L12.707,5.15c-0.716,0.217-1.401,0.502-2.05,0.849L6.464,4.005C5.554,4.73,4.73,5.554,4.005,6.464l1.994,4.192c-0.347,0.648-0.632,1.334-0.849,2.05l-4.378,1.557C0.708,14.834,0.667,15.412,0.667,16s0.041,1.165,0.105,1.736l4.378,1.558c0.217,0.715,0.502,1.401,0.849,2.049l-1.994,4.193c0.725,0.909,1.549,1.733,2.459,2.458l4.192-1.993c0.648,0.347,1.334,0.633,2.05,0.851l1.557,4.377c0.571,0.064,1.148,0.104,1.737,0.104c0.588,0,1.165-0.04,1.736-0.104l1.558-4.377c0.715-0.218,1.399-0.504,2.049-0.851l4.193,1.993c0.909-0.725,1.733-1.549,2.458-2.458l-1.993-4.193c0.347-0.647,0.633-1.334,0.851-2.049L31.229,17.736zM16,20.871c-2.69,0-4.872-2.182-4.872-4.871c0-2.69,2.182-4.872,4.872-4.872c2.689,0,4.871,2.182,4.871,4.872C20.871,18.689,18.689,20.871,16,20.871z"/>',
            '<title>Edit Instrument</title>',
            '</g>',
            '</g>'
        ].join('')
  }
});

joint.shapes.DERIV = joint.shapes.AllcruxLink.extend({
  defaults: {
    type: 'DERIV',
    "attrs": {
      ".marker-target": {
        "fill": DefaultTheme.instrumentHoldingFillColor,
        "d": "M 10 0 L 0 5 L 10 10 z",
        "display": "block",
        "stroke-opacity": DefaultTheme.instrumentHoldingLowOpacity,
        "fill-opacity": DefaultTheme.instrumentHoldingLowOpacity
      },
      ".connection": {
        "display": "block",
        "stroke-opacity": DefaultTheme.instrumentHoldingLowOpacity,
        "fill-opacity": DefaultTheme.instrumentHoldingLowOpacity
      },
      ".marker-source": {
        "display": "block",
        "stroke-opacity": DefaultTheme.instrumentHoldingLowOpacity,
        "fill-opacity": DefaultTheme.instrumentHoldingLowOpacity
      },
      "g": {
        "display": "block",
        "stroke-opacity": DefaultTheme.instrumentHoldingLowOpacity,
        "fill-opacity": DefaultTheme.instrumentHoldingLowOpacity
      }
    },
    toolMarkup: [
            '<g class="link-tool">',
            '<g class="tool-remove" event="tool:remove">',
            '<circle r="11" />',
            '<path transform="scale(.8) translate(-16, -16)" d="M24.778,21.419 19.276,15.917 24.777,10.415 21.949,7.585 16.447,13.087 10.945,7.585 8.117,10.415 13.618,15.917 8.116,21.419 10.946,24.248 16.447,18.746 21.948,24.248z"/>',
            '<title>Remove link.</title>',
            '</g>',
            '<g event="link:options">',
            '<circle r="11" transform="translate(25)"/>',
            '<path fill="white" transform="scale(.55) translate(29, -16)" d="M31.229,17.736c0.064-0.571,0.104-1.148,0.104-1.736s-0.04-1.166-0.104-1.737l-4.377-1.557c-0.218-0.716-0.504-1.401-0.851-2.05l1.993-4.192c-0.725-0.91-1.549-1.734-2.458-2.459l-4.193,1.994c-0.647-0.347-1.334-0.632-2.049-0.849l-1.558-4.378C17.165,0.708,16.588,0.667,16,0.667s-1.166,0.041-1.737,0.105L12.707,5.15c-0.716,0.217-1.401,0.502-2.05,0.849L6.464,4.005C5.554,4.73,4.73,5.554,4.005,6.464l1.994,4.192c-0.347,0.648-0.632,1.334-0.849,2.05l-4.378,1.557C0.708,14.834,0.667,15.412,0.667,16s0.041,1.165,0.105,1.736l4.378,1.558c0.217,0.715,0.502,1.401,0.849,2.049l-1.994,4.193c0.725,0.909,1.549,1.733,2.459,2.458l4.192-1.993c0.648,0.347,1.334,0.633,2.05,0.851l1.557,4.377c0.571,0.064,1.148,0.104,1.737,0.104c0.588,0,1.165-0.04,1.736-0.104l1.558-4.377c0.715-0.218,1.399-0.504,2.049-0.851l4.193,1.993c0.909-0.725,1.733-1.549,2.458-2.458l-1.993-4.193c0.347-0.647,0.633-1.334,0.851-2.049L31.229,17.736zM16,20.871c-2.69,0-4.872-2.182-4.872-4.871c0-2.69,2.182-4.872,4.872-4.872c2.689,0,4.871,2.182,4.871,4.872C20.871,18.689,18.689,20.871,16,20.871z"/>',
            '<title>Edit Instrument</title>',
            '</g>',
            '</g>'
        ].join('')
  }
});

joint.shapes.STAKE = joint.shapes.AllcruxLink.extend({
  defaults: {
    type: 'STAKE',
    "attrs": {
      ".marker-target": {
        "fill": DefaultTheme.instrumentHoldingFillColor,
        "d": "M 10 0 L 0 5 L 10 10 z"
       }
    },
    toolMarkup: [
            '<g class="link-tool">',
            '<g class="tool-remove" event="tool:remove">',
            '<circle r="11" />',
            '<path transform="scale(.8) translate(-16, -16)" d="M24.778,21.419 19.276,15.917 24.777,10.415 21.949,7.585 16.447,13.087 10.945,7.585 8.117,10.415 13.618,15.917 8.116,21.419 10.946,24.248 16.447,18.746 21.948,24.248z"/>',
            '<title>Remove link.</title>',
            '</g>',
            '<g event="link:options">',
            '<circle r="11" transform="translate(25)"/>',
            '<path fill="white" transform="scale(.55) translate(29, -16)" d="M31.229,17.736c0.064-0.571,0.104-1.148,0.104-1.736s-0.04-1.166-0.104-1.737l-4.377-1.557c-0.218-0.716-0.504-1.401-0.851-2.05l1.993-4.192c-0.725-0.91-1.549-1.734-2.458-2.459l-4.193,1.994c-0.647-0.347-1.334-0.632-2.049-0.849l-1.558-4.378C17.165,0.708,16.588,0.667,16,0.667s-1.166,0.041-1.737,0.105L12.707,5.15c-0.716,0.217-1.401,0.502-2.05,0.849L6.464,4.005C5.554,4.73,4.73,5.554,4.005,6.464l1.994,4.192c-0.347,0.648-0.632,1.334-0.849,2.05l-4.378,1.557C0.708,14.834,0.667,15.412,0.667,16s0.041,1.165,0.105,1.736l4.378,1.558c0.217,0.715,0.502,1.401,0.849,2.049l-1.994,4.193c0.725,0.909,1.549,1.733,2.459,2.458l4.192-1.993c0.648,0.347,1.334,0.633,2.05,0.851l1.557,4.377c0.571,0.064,1.148,0.104,1.737,0.104c0.588,0,1.165-0.04,1.736-0.104l1.558-4.377c0.715-0.218,1.399-0.504,2.049-0.851l4.193,1.993c0.909-0.725,1.733-1.549,2.458-2.458l-1.993-4.193c0.347-0.647,0.633-1.334,0.851-2.049L31.229,17.736zM16,20.871c-2.69,0-4.872-2.182-4.872-4.871c0-2.69,2.182-4.872,4.872-4.872c2.689,0,4.871,2.182,4.871,4.872C20.871,18.689,18.689,20.871,16,20.871z"/>',
            '<title>Edit Instrument</title>',
            '</g>',
            '</g>'
        ].join('')
  }
});

joint.shapes.OWNERSHIP = joint.shapes.AllcruxLink.extend({
  defaults: {
    type: 'OWNERSHIP',
    "attrs": {
        ".marker-target": {
          "fill": DefaultTheme.instrumentHoldingFillColor,
          "d": "M 10 0 L 0 5 L 10 10 z"
        },
        ".connection": {
          "stroke": "darkgreen",
          "stroke-width": DefaultTheme.instrumentHoldingWidthOwnership,
          "stroke-dasharray": "10 2 1 2 "
        },

    },
   toolMarkup: [
            '<g class="link-tool">',
            '<g class="tool-remove" event="tool:remove">',
            '<circle r="11" />',
            '<path transform="scale(.8) translate(-16, -16)" d="M24.778,21.419 19.276,15.917 24.777,10.415 21.949,7.585 16.447,13.087 10.945,7.585 8.117,10.415 13.618,15.917 8.116,21.419 10.946,24.248 16.447,18.746 21.948,24.248z"/>',
            '<title>Remove link.</title>',
            '</g>',
            '<g event="link:options">',
            '<circle r="11" transform="translate(25)"/>',
            '<path fill="white" transform="scale(.55) translate(29, -16)" d="M31.229,17.736c0.064-0.571,0.104-1.148,0.104-1.736s-0.04-1.166-0.104-1.737l-4.377-1.557c-0.218-0.716-0.504-1.401-0.851-2.05l1.993-4.192c-0.725-0.91-1.549-1.734-2.458-2.459l-4.193,1.994c-0.647-0.347-1.334-0.632-2.049-0.849l-1.558-4.378C17.165,0.708,16.588,0.667,16,0.667s-1.166,0.041-1.737,0.105L12.707,5.15c-0.716,0.217-1.401,0.502-2.05,0.849L6.464,4.005C5.554,4.73,4.73,5.554,4.005,6.464l1.994,4.192c-0.347,0.648-0.632,1.334-0.849,2.05l-4.378,1.557C0.708,14.834,0.667,15.412,0.667,16s0.041,1.165,0.105,1.736l4.378,1.558c0.217,0.715,0.502,1.401,0.849,2.049l-1.994,4.193c0.725,0.909,1.549,1.733,2.459,2.458l4.192-1.993c0.648,0.347,1.334,0.633,2.05,0.851l1.557,4.377c0.571,0.064,1.148,0.104,1.737,0.104c0.588,0,1.165-0.04,1.736-0.104l1.558-4.377c0.715-0.218,1.399-0.504,2.049-0.851l4.193,1.993c0.909-0.725,1.733-1.549,2.458-2.458l-1.993-4.193c0.347-0.647,0.633-1.334,0.851-2.049L31.229,17.736zM16,20.871c-2.69,0-4.872-2.182-4.872-4.871c0-2.69,2.182-4.872,4.872-4.872c2.689,0,4.871,2.182,4.871,4.872C20.871,18.689,18.689,20.871,16,20.871z"/>',
            '<title>Edit Instrument</title>',
            '</g>',
            '</g>'
        ].join('')
  }
});

joint.shapes.OTHER = joint.shapes.AllcruxLink.extend({
  defaults: {
    type: 'OTHER',
    "attrs": {
      ".marker-target": {
        "fill": "red",
        "d": "M 10 0 L 0 5 L 10 10 z",
        "display": "block",
        "stroke-opacity": 0.1,
        "fill-opacity": 0.1
      },
      ".connection": {
        "display": "block",
        "stroke-opacity": 0.1,
        "fill-opacity": 0.1
      },
      ".marker-source": {
        "display": "block",
        "stroke-opacity": 0.1,
        "fill-opacity": 0.1
      },
      "g": {
        "display": "block",
        "stroke-opacity": 0.1,
        "fill-opacity": 0.1
      }
    },
    toolMarkup: [
            '<g class="link-tool">',
            '<g class="tool-remove" event="tool:remove">',
            '<circle r="11" />',
            '<path transform="scale(.8) translate(-16, -16)" d="M24.778,21.419 19.276,15.917 24.777,10.415 21.949,7.585 16.447,13.087 10.945,7.585 8.117,10.415 13.618,15.917 8.116,21.419 10.946,24.248 16.447,18.746 21.948,24.248z"/>',
            '<title>Remove link.</title>',
            '</g>',
            '<g event="link:options">',
            '<circle r="11" transform="translate(25)"/>',
            '<path fill="white" transform="scale(.55) translate(29, -16)" d="M31.229,17.736c0.064-0.571,0.104-1.148,0.104-1.736s-0.04-1.166-0.104-1.737l-4.377-1.557c-0.218-0.716-0.504-1.401-0.851-2.05l1.993-4.192c-0.725-0.91-1.549-1.734-2.458-2.459l-4.193,1.994c-0.647-0.347-1.334-0.632-2.049-0.849l-1.558-4.378C17.165,0.708,16.588,0.667,16,0.667s-1.166,0.041-1.737,0.105L12.707,5.15c-0.716,0.217-1.401,0.502-2.05,0.849L6.464,4.005C5.554,4.73,4.73,5.554,4.005,6.464l1.994,4.192c-0.347,0.648-0.632,1.334-0.849,2.05l-4.378,1.557C0.708,14.834,0.667,15.412,0.667,16s0.041,1.165,0.105,1.736l4.378,1.558c0.217,0.715,0.502,1.401,0.849,2.049l-1.994,4.193c0.725,0.909,1.549,1.733,2.459,2.458l4.192-1.993c0.648,0.347,1.334,0.633,2.05,0.851l1.557,4.377c0.571,0.064,1.148,0.104,1.737,0.104c0.588,0,1.165-0.04,1.736-0.104l1.558-4.377c0.715-0.218,1.399-0.504,2.049-0.851l4.193,1.993c0.909-0.725,1.733-1.549,2.458-2.458l-1.993-4.193c0.347-0.647,0.633-1.334,0.851-2.049L31.229,17.736zM16,20.871c-2.69,0-4.872-2.182-4.872-4.871c0-2.69,2.182-4.872,4.872-4.872c2.689,0,4.871,2.182,4.871,4.872C20.871,18.689,18.689,20.871,16,20.871z"/>',
            '<title>Edit Instrument</title>',
            '</g>',
            '</g>'
        ].join('')
  }
});

/////////////////////



joint.shapes.CORP = joint.shapes.basic.Generic.extend({

  markup: '<g class="entity" > \
              <g class="space"><rect width="180" height="80" x="-10" y="-10"/></g> \
              <g class="note" transform="translate(5,60)" display="none"> \
                <rect fill="#FFFFE0" stroke="#888" stroke-width="1px" width="150" height="24" /> \
                <text x="80" y="15" text-anchor="middle" font-size="10" fill="grey" font-family="Arial, Helvetica, Sans-Serif"/> \
              </g> \
              <g class="node">\
                <rect width="160" height="60" stroke="#444"/>\
              </g> \
              <g class="source_node" display="none"> <rect  transform="translate(-2,-2)" fill="transparent" width="164" height="64" stroke="#008cba" stroke-width="4px"/></g> \
              <g class="upward" display="none" ><polygon points="0,-6 160,-6" fill="#FFFFE0" stroke="#888" stroke-width="2px"/></g> \
              <g class="downward" display="none" ><polygon points="0,66 160,66" fill="#FFFFE0" stroke="#888" stroke-width="2px"/></g> \
              <g class="checkable" display="none"> \
                <rect x="150" y="-10" width="20" height="20" style="fill:white;stroke:black;stroke-width:1;fill-opacity:1;stroke-opacity:1" /> \
                <text/> \
              </g> \
              <g font-family="Arial, Helvetica, Sans-Serif" fill="black">\
                <text class="name" x="80" y="20" text-anchor="middle" font-size="16" fill="#a21" />\
                <text class="company_type" x="80" y="40" text-anchor="middle" font-size="12"/> \
                <text class="country" x="10" y="50" text-anchor="left" font-size="10"/> \
                <text class="currency" x="150" y="50" text-anchor="right" font-size="10"/> \
              </g>\
           </g>',

  defaults: joint.util.deepSupplement({
    type: 'CORP',
    attrs: {
    }
  }, joint.shapes.basic.Generic.prototype.defaults)
});


joint.shapes.PORTFOLIO = joint.shapes.basic.Generic.extend({

  markup: '<g class="entity" > \
              <g class="note" transform="translate(5,60)" display="none"> \
                <rect fill="#FFFFE0" stroke="#888" stroke-width="1px" width="150" height="24" /> \
                <text x="80" y="15" text-anchor="middle" font-size="10" fill="grey" font-family="Arial, Helvetica, Sans-Serif"/> \
              </g> \
              <g class="space"><rect fill="transparent" width="180" height="80" x="-10" y="-10" /></g> \
              <g class="source_node" display="none"> <rect  transform="translate(-2,-2)" fill="transparent" width="164" height="64" stroke="#008cba" stroke-width="4px"/></g> \
              <g class="node">\
                <rect stroke="#444" width="160" height="60"/>\
              </g> \
              <g class="upward" display="none" ><polygon points="0,-6 160,-6" fill="#FFFFE0" stroke="#888" stroke-width="2px"/></g> \
              <g class="downward" display="none" ><polygon points="0,66 160,66" fill="#FFFFE0" stroke="#888" stroke-width="2px"/></g> \
              <g class="checkable" display="none"> \
                <rect x="150" y="-10" width="20" height="20" style="fill:white;stroke:black;stroke-width:1;fill-opacity:1;stroke-opacity:1" /> \
                <text/> \
              </g> \
              <g><polygon points="20,38 140,38" fill="#EEEEEE" stroke="#888" stroke-width="2px"/></g> \
              <g><polygon points="20,44 140,44" fill="#EEEEEE" stroke="#888" stroke-width="2px"/></g> \
              <g><polygon points="20,50 140,50" fill="#EEEEEE" stroke="#888" stroke-width="2px"/></g> \
              <g><polygon points="20,32 140,32" fill="#EEEEEE" stroke="#888" stroke-width="2px"/></g> \
              <text class="name" x="80" y="20"  text-anchor="middle" font-size="16" fill="#a21" font-family="Arial, Helvetica, Sans-Serif" />\
           </g>',

  defaults: joint.util.deepSupplement({
    type: 'PORTFOLIO',
    attrs: {
    }
  }, joint.shapes.basic.Generic.prototype.defaults)
});

joint.shapes.PERMEST = joint.shapes.basic.Generic.extend({

  markup: '<g class="entity" > \
            <g class="note" transform="translate(5,55)" display="none"> \
              <rect fill="#FFFFE0" stroke="#888" stroke-width="1px" width="150" height="24" /> \
              <text x="80" y="15" text-anchor="middle" font-size="10" fill="grey" font-family="Arial, Helvetica, Sans-Serif"/> \
            </g> \
            <g class="space"><rect fill="transparent" width="180" height="80" x="-10" y="-10" /></g> \
            <g class="source_node" fill="transparent" display="none" stroke="#008cba" stroke-width="4px">\
              <ellipse cx="80" cy="30" rx="62" ry="32"/></g> \
            <g class="upward" display="none" >\
              <ellipse fill="transparent" stroke="#888" stroke-width="2px" cx="80" cy="24" rx="60" ry="30"  /> <rect x="0" y="0" width="160" height="60" /></g>\
            <g class="downward" display="none" >\
              <ellipse fill="transparent" stroke="#888" stroke-width="2px" cx="80" cy="36" rx="60" ry="30"  /> <rect x="0" y="0" width="160" height="60" /></g>\
            <g class="node">\
              <ellipse fill="#EEEEEE" stroke="#444" cx="80" cy="30" rx="60" ry="30"/>\
            </g> \
            <g font-family="Arial, Helvetica, Sans-Serif" fill="black">\
              <text class="name" x="80" y="30" text-anchor="middle" font-size="16" fill="#a21" />\
              <text class="company_type" x="80" y="40" text-anchor="middle" font-size="12"/> \
              <text class="country" x="50" y="45" font-size="10"/> \
              <text class="currency" x="100" y="45" text-anchor="right" font-size="10"/> \
            </g>\
           </g>',

  defaults: joint.util.deepSupplement({
    type: 'PERMEST',
    attrs: {
    }
  }, joint.shapes.basic.Generic.prototype.defaults)
});



joint.shapes.GROUP = joint.shapes.basic.Generic.extend({

  markup: '<g class="entity" > \
            <g class="note" transform="translate(5,55)" display="none"> \
              <rect fill="#FFFFE0" stroke="#888" stroke-width="1px" width="150" height="24" /> \
              <text x="80" y="15" text-anchor="middle" font-size="10" fill="grey" font-family="Arial, Helvetica, Sans-Serif"/> \
            </g> \
            <g class="space"><rect fill="transparent" stroke="transparent" width="180" height="80" x="-10" y="-10" /></g> \
            <g class="source_node" display="none" fill="transparent" stroke="#008cba" stroke-width="4px">\
              <ellipse cx="80" cy="30" rx="62" ry="32"/></g> \
            <g class="node"><ellipse fill="transparent" stroke="transparent" cx="80" cy="30" rx="60" ry="30"/></g> \
            <g class="upward" display="none" ><polygon  points="0,-6 160,-6" fill="#FFFFE0" stroke="#888" stroke-width="2px"/></g> \
            <g class="downward" display="none" ><polygon  points="0,66 160,66" fill="#FFFFE0" stroke="#888" stroke-width="2px"/></g> \
            <text class="name" x="80" y="35" text-anchor="middle" font-size="16" fill="#a21" font-family="Arial, Helvetica, Sans-Serif" />\
           </g>',

  defaults: joint.util.deepSupplement({
    type: 'GROUP',
    attrs: {
    }
  }, joint.shapes.basic.Generic.prototype.defaults)
});

joint.shapes.PERSON = joint.shapes.basic.Generic.extend({

    markup: '<g class="entity" > \
              <g class="space"><rect width="180" height="80" x="-10" y="-10"/></g> \
              <g class="note" transform="translate(5,60)" display="none"> \
                <rect fill="#FFFFE0" stroke="#888" stroke-width="1px" width="150" height="24" /> \
                <text x="80" y="15" text-anchor="middle" font-size="10" fill="grey" font-family="Arial, Helvetica, Sans-Serif"/> \
              </g> \
              <g class="node">\
                <rect width="160" height="60" stroke="#444"/>\
              </g> \
              <g class="source_node" display="none"> <rect  transform="translate(-2,-2)" fill="transparent" width="164" height="64" stroke="#008cba" stroke-width="4px"/></g> \
              <g class="upward" display="none" ><polygon points="0,-6 160,-6" fill="#FFFFE0" stroke="#888" stroke-width="2px"/></g> \
              <g class="downward" display="none" ><polygon points="0,66 160,66" fill="#FFFFE0" stroke="#888" stroke-width="2px"/></g> \
              <circle cx="30" cy="30" r="20" fill="white" stroke="#AAA" width="10" height="50"/> \
              <g font-family="Arial, Helvetica, Sans-Serif" fill="black">\
                <text class="name" x="80" y="35" text-anchor="middle" font-size="16" fill="#a21" />\
                <text class="country" x="140" y="50" text-anchor="right" font-size="10"/> \
              </g>\
            </g>',
    defaults: joint.util.deepSupplement({
      type: 'PERSON',
      attrs: {
      }
    }, joint.shapes.basic.Generic.prototype.defaults)
});


joint.shapes.FUND = joint.shapes.basic.Generic.extend({

  markup: '<g class="entity" > \
              <g class="note" transform="translate(5,60)" display="none"> \
                <rect fill="#FFFFE0" stroke="#888" stroke-width="1px" width="150" height="24" /> \
                <text x="80" y="15" text-anchor="middle" font-size="10" fill="grey" font-family="Arial, Helvetica, Sans-Serif" /> \
              </g> \
              <g class="space"><rect fill="transparent" width="180" height="80" x="-10" y="-10"/></g> \
              <g class="upward" display="none" fill="#FFFFE0" stroke="#888" stroke-width="2px" ><polygon  points="80,-26 150,19"/> <polygon  points="10,19 80,-26"/></g> \
              <g class="downward" display="none" ><polygon points="0,66 160,66" fill="#FFFFE0" stroke="#888" stroke-width="2px"/></g> \
              <g class="source_node" display="none"><polygon stroke="#008cba" stroke-width="4px" points="80,-22 9,24 -2,61.5 162,61.5 151,24" fill="transparent"/></g> \
              <g class="node"><polygon class="fund" fill="grey" stroke="#444" points="80,-20 10,25 0,60 160,60 150,25"/></g> \
              <g font-family="Arial, Helvetica, Sans-Serif" fill="black">\
                <text class="name" x="80" y="20" text-anchor="middle" font-size="16" fill="#a21" />\
                <text class="company_type" x="80" y="40" text-anchor="middle" font-size="12"/> \
                <text class="country" x="10" y="50" text-anchor="left" font-size="10"/> \
                <text class="currency" x="150" y="50" text-anchor="right" font-size="10"/> \
              </g>\
           </g>',

  defaults: joint.util.deepSupplement({
    type: 'FUND',
    attrs: {
    }
  }, joint.shapes.basic.Generic.prototype.defaults)
});



joint.shapes.MARKET = joint.shapes.basic.Generic.extend({

    markup: '<g class="entity" >\
              <g class="space"><rect width="180" height="80" x="-10" y="-10"/></g> \
              <g class="note" transform="translate(5,60)" display="none"> \
                <rect fill="#FFFFE0" stroke="#888" stroke-width="1px" width="150" height="24" /> \
                <text x="80" y="15" text-anchor="middle" font-size="10" fill="grey" font-family="Arial, Helvetica, Sans-Serif"/> \
              </g> \
              <g class="node">\
                <rect width="160" height="60" stroke="#444"/>\
              </g> \
              <g class="source_node" display="none"> <rect  transform="translate(-2,-2)" fill="transparent" width="164" height="64" stroke="#008cba" stroke-width="4px"/></g> \
              <g class="upward" display="none" ><polygon points="0,-6 160,-6" fill="#FFFFE0" stroke="#888" stroke-width="2px"/></g> \
              <g class="downward" display="none" ><polygon points="0,66 160,66" fill="#FFFFE0" stroke="#888" stroke-width="2px"/></g> \
              <rect x="05" y="05" fill="white" stroke="grey" width="10" height="50"/> \
              <rect x="15" y="30" fill="white" stroke="grey" width="10" height="25"/> \
              <rect x="25" y="45" fill="white" stroke="grey" width="10" height="10"/> \
              <g font-family="Arial, Helvetica, Sans-Serif" fill="black">\
                <text class="name" x="80" y="35" text-anchor="middle" font-size="16" fill="#a21" />\
                <text class="country" x="140" y="50" text-anchor="right" font-size="10"/> \
              </g>\
            </g>',
    defaults: joint.util.deepSupplement({
      type: 'MARKET',
      attrs: {
      }
    }, joint.shapes.basic.Generic.prototype.defaults)
});



joint.shapes.RE_ASSET = joint.shapes.basic.Generic.extend({

  markup: '<g class="entity horizontal"> \
            <g class="space"><rect width="180" height="80" x="-10" y="-10"/></g> \
            <g class="note" transform="translate(5,70)" display="none"> \
              <rect fill="#FFFFE0" stroke="#888" stroke-width="1px" width="150" height="24" /> \
              <text x="80" y="15" text-anchor="middle" font-size="10" fill="grey" font-family="Arial, Helvetica, Sans-Serif"/> \
            </g> \
            <g class="node">\
              <polygon  fill="grey" stroke="#444" points="80,0 0,30 160,30"/>\
              <rect x="0" y="30" width="160" height="40" fill="grey" stroke="black"/>\
            </g> \
            <g class="source_node" display="none"  fill="transparent" stroke="#008cba" stroke-width="4px">\
              <polygon points="80,-2 -2,29 -2,72 162,72 162,29"/>\
            </g> \
            <g class="upward" display="none" fill="#FFFFE0" stroke="#888" stroke-width="2px"><polygon  points="80,-6 160,26"/> <polygon  points="0,25 80,-6"/></g> \
            <g class="downward" display="none" fill="#FFFFE0" stroke="#888" stroke-width="2px"><polygon  points="0,76 160,76"/></g> \
            <text class="name" x="80" y="50" text-anchor="middle" font-size="16" fill="#a21" font-family="Arial, Helvetica, Sans-Serif" />\
          </g>',

  defaults: joint.util.deepSupplement({
    type: 'RE_ASSET',
    attrs: {
    }
  }, joint.shapes.basic.Generic.prototype.defaults)
});


joint.shapes.ECE_VERTICAL = joint.shapes.basic.Generic.extend({

  markup: '<g class="entity vertical" > \
              <g class="space"><rect fill="transparent" width="80" height="160" x="-10" y="-10"/></g> \
              <g class="node">\
                <rect fill="grey" stroke="#444" width="60" height="140"/>\
              </g> \
              <g font-family="Arial, Helvetica, Sans-Serif" fill="black">\
                <text class="name" transform="rotate(90)" x="5" y="75" text-anchor="middle" font-size="16" fill="#a21" />\
                <text class="company_type" transform="rotate(0)" x="45" y="15" text-anchor="middle" font-size="12"/> \
                <text class="country" transform="rotate(0)" x="35" y="125" text-anchor="left" font-size="10"/> \
                <text class="currency" transform="rotate(0)" x="45" y="70" text-anchor="right" font-size="10"/> \
              </g>\
           </g>',

  defaults: joint.util.deepSupplement({
    type: 'ECE_VERTICAL',
    attrs: {
    }

  }, joint.shapes.basic.Generic.prototype.defaults)
});

joint.shapes.ECE_HORIZONTAL = joint.shapes.basic.Generic.extend({

  markup: '<g class="entity" > \
              <g class="note" transform="translate(5,60)" display="none"> \
                <rect fill="#FFFFE0" stroke="#888" stroke-width="1px" width="150" height="24" /> \
                <text x="80" y="15" text-anchor="middle" font-size="10" fill="grey" font-family="Arial, Helvetica, Sans-Serif"/> \
              </g> \
              <g class="space"><rect fill="transparent" width="180" height="80" x="-10" y="-10"/></g> \
              <g class="node">\
                <rect fill="grey" stroke="#444" width="160" height="60"/>\
              </g> \
              <g class="checkable" display="none"> \
                <rect x="150" y="-10" width="20" height="20" style="fill:white;stroke:black;stroke-width:1;fill-opacity:1;stroke-opacity:1" /> \
                <text/> \
              </g> \
              <text class="name" x="80" y="25" text-anchor="middle" font-size="16" fill="#a21" font-family="Arial, Helvetica, Sans-Serif" />\
           </g>',

  defaults: joint.util.deepSupplement({
    type: 'ECE_HORIZONTAL',
    attrs: {
    }

  }, joint.shapes.basic.Generic.prototype.defaults)
});


// joint.shapes.CORP = joint.shapes.basic.Generic.extend({

//   markup: '<g class="entity" > \
//               <g class="note" transform="translate(5,60)" display="none"> \
//                 <rect/> \
//                 <text/> \
//               </g> \
//               <g class="space"><rect/></g> \
//               <g class="source_node" display="none" transform="translate(-2,-2)"><rect/></g> \
//               <g class="node"><rect/></g> \
//               <g class="upward" display="none" ><polygon points="0,-6 160,-6"/></g> \
//               <g class="downward" display="none" ><polygon points="0,66 160,66"/></g> \
//               <g class="checkable" display="none"> \
//                 <rect x="150" y="-10" width="20" height="20" style="fill:white;stroke:black;stroke-width:1;fill-opacity:1;stroke-opacity:1" /> \
//                 <text/> \
//               </g> \
//               <text class="company_type"/> \
//               <text class="country"/> \
//               <text class="currency"/> \
//               <text class="name"/> \
//            </g>',

//   defaults: joint.util.deepSupplement({
//     type: 'CORP',
//     attrs: {
//         // '.vertical': { width: 160, height: 60 },
//         '.space rect': { fill: 'transparent', stroke: 'transparent', width: 180, height: 80, x: -10, y: -10 },
//         '.node rect': { fill: 'transparent', stroke: '#444', width: 160, height: 60 },
//         '.source_node rect': { fill: 'transparent', width: 164, height: 64, stroke: "#008cba", 'stroke-width': '4px' },
//         '.note rect': { fill: '#FFFFE0', stroke: '#888', 'stroke-width': '1px', width: 150, height: 24 },
//         '.downward polygon': { fill: '#FFFFE0', stroke: '#888', 'stroke-width': '2px'},
//         '.upward polygon': { fill: '#FFFFE0', stroke: '#888', 'stroke-width': '2px'},
//         '.note text': { 'font-size': 10, 'ref-x': .47, 'ref-y': 13, ref: '.node', 'y-alignment': 'middle', 'x-alignment': 'middle', fill: 'grey', 'font-family': 'Arial, helvetica, sans-serif' },
//         '.name': { 'font-size': 16, text: '', 'ref-x': .5, 'ref-y': 0.4, ref: '', 'y-alignment': 'middle', 'x-alignment': 'middle', fill: '#a21', 'font-family': 'Arial, helvetica, sans-serif' },
//         '.company_type': { 'font-size': 12, text: '', 'ref-x': .5, 'ref-y': .7, ref: '.node rect', 'y-alignment': 'middle', 'x-alignment': 'middle', fill: 'black', 'font-family': 'Arial, helvetica, sans-serif' },
//         '.country': { 'font-size': 10, text: '', 'ref-x': 0.05, 'ref-y': 0.85, ref: '.node rect', 'y-alignment': 'middle', 'x-alignment': 'left', 'text-anchor':'start', fill: 'black', 'font-family': 'Arial, helvetica, sans-serif' },
//         '.currency': { 'font-size': 10, text: '', 'ref-x': 0.95, 'ref-y': 0.85, ref: '.node rect', 'y-alignment': 'middle', 'x-alignment': 'right', 'text-anchor':'end', fill: 'black', 'font-family': 'Arial, helvetica, sans-serif' },
//     }

//   }, joint.shapes.basic.Generic.prototype.defaults)
// });

// joint.shapes.PORTFOLIO = joint.shapes.basic.Generic.extend({

//   markup: '<g class="entity" > \
//               <g class="note" transform="translate(5,60)" display="none"> \
//                 <rect/> \
//                 <text/> \
//               </g> \
//               <g class="space"><rect/></g> \
//               <g class="source_node" display="none" transform="translate(-2,-2)"><rect/></g> \
//               <g class="node"><rect/></g> \
//               <g class="upward" display="none" ><polygon points="0,-6 160,-6"/></g> \
//               <g class="downward" display="none" ><polygon points="0,66 160,66"/></g> \
//               <g class="checkable" display="none"> \
//                 <rect x="150" y="-10" width="20" height="20" style="fill:white;stroke:black;stroke-width:1;fill-opacity:1;stroke-opacity:1" /> \
//                 <text/> \
//               </g> \
//               <g><polygon points="20,38 140,38"/></g> \
//               <g><polygon points="20,44 140,44"/></g> \
//               <g><polygon points="20,50 140,50"/></g> \
//               <g><polygon points="20,32 140,32"/></g> \
//               <text class="name"/> \
//            </g>',

//   defaults: joint.util.deepSupplement({
//     type: 'PORTFOLIO',
//     attrs: {
//         // '.vertical': { width: 160, height: 60 },
//         '.space rect': { fill: 'transparent', stroke: 'transparent', width: 180, height: 80, x: -10, y: -10 },
//         '.node rect': { fill: 'transparent', stroke: '#444', width: 160, height: 60 },
//         '.source_node rect': { fill: 'transparent', width: 164, height: 64, stroke: "#008cba", 'stroke-width': '4px' },
//         '.note rect': { fill: '#FFFFE0', stroke: '#888', 'stroke-width': '1px', width: 150, height: 24 },
//         '.downward polygon': { fill: '#FFFFE0', stroke: '#888', 'stroke-width': '2px'},
//         ' polygon': { fill: '#EEEEEE', stroke: '#888', 'stroke-width': '2px'},
//         '.note text': { 'font-size': 10, 'ref-x': .47, 'ref-y': 13, ref: '.node', 'y-alignment': 'middle', 'x-alignment': 'middle', fill: 'grey', 'font-family': 'Arial, helvetica, sans-serif' },
//         '.name': { 'font-size': 16, text: '', 'ref-x': .5, 'ref-y': 0.3, ref: '', 'y-alignment': 'middle', 'x-alignment': 'middle', fill: '#a21', 'font-family': 'Arial, helvetica, sans-serif' },
//         '.company_type': { 'font-size': 12, text: '', 'ref-x': .5, 'ref-y': .7, ref: '.node rect', 'y-alignment': 'middle', 'x-alignment': 'middle', fill: 'black', 'font-family': 'Arial, helvetica, sans-serif' },
//         '.country': { 'font-size': 10, text: '', 'ref-x': 0.05, 'ref-y': 0.85, ref: '.node rect', 'y-alignment': 'middle', 'x-alignment': 'left', 'text-anchor':'start', fill: 'black', 'font-family': 'Arial, helvetica, sans-serif' },
//         '.currency': { 'font-size': 10, text: '', 'ref-x': 0.95, 'ref-y': 0.85, ref: '.node rect', 'y-alignment': 'middle', 'x-alignment': 'right', 'text-anchor':'end', fill: 'black', 'font-family': 'Arial, helvetica, sans-serif' },
//     }

//   }, joint.shapes.basic.Generic.prototype.defaults)
// });

// joint.shapes.PERMEST = joint.shapes.basic.Generic.extend({

//   markup: '<g class="entity" > \
//             <g class="note" transform="translate(5,55)" display="none"> \
//               <rect/> \
//               <text/> \
//             </g> \
//             <g class="upward" display="none" >\
//             <ellipse  cx="80" cy="24" rx="60" ry="30"  /> <rect x="0" y="0" width="160" height="60" /></g>\
//             <g class="downward" display="none" >\
//             <ellipse  cx="80" cy="36" rx="60" ry="30"  /> <rect x="0" y="0" width="160" height="60" /></g>\
//             <g class="space"><rect/></g> \
//             <g class="source_node" display="none" ><ellipse cx="80" cy="30" rx="62" ry="32"/></g> \
//             <g class="node"><ellipse cx="80" cy="30" rx="60" ry="30"/></g> \
//             <text class="name"/> \
//             <text class="company_type"/> \
//             <text class="country"/> \
//             <text class="currency"/> \
//            </g>',

//   defaults: joint.util.deepSupplement({
//     type: 'PERMEST',
//     attrs: {
//         '.vertical': { width: 160, height: 60 },
//         '.space rect': { fill: 'transparent', stroke: 'transparent', width: 180, height: 80, x: -10, y: -10 },
//         'ellipse': { fill: '#EEEEEE', stroke: '#444' },
//         '.source_node ellipse': { fill: 'transparent',stroke: "#008cba", 'stroke-width': '4px' },
//         '.name': { 'font-size': 16, text: '', 'ref-x': .5, 'ref-y': 0.5, ref: 'ellipse', 'y-alignment': 'middle', 'x-alignment': 'middle', fill: '#a21', 'font-family': 'Arial, helvetica, sans-serif' },
//         '.upward ellipse': { fill: 'transparent', stroke: '#888', 'stroke-width': '2px'},
//         '.downward ellipse': { fill: 'transparent', stroke: '#888', 'stroke-width': '2px'},
//         '.company_type': { 'font-size': 12, text: '', 'ref-x': .5, 'ref-y': .7, ref: 'ellipse', 'y-alignment': 'middle', 'x-alignment': 'middle', fill: 'black', 'font-family': 'Arial, helvetica, sans-serif' },
//         '.country': { 'font-size': 10, text: '', 'ref-x': .3, 'ref-y': 0.8, ref: 'ellipse', 'y-alignment': 'middle', 'x-alignment': 'middle', fill: 'black', 'font-family': 'Arial, helvetica, sans-serif' },
//         '.currency': { 'font-size': 10, text: '', 'ref-x': .7, 'ref-y': 0.8, ref: 'ellipse', 'y-alignment': 'middle', 'x-alignment': 'middle', fill: 'black', 'font-family': 'Arial, helvetica, sans-serif' },
//         '.note rect': { fill: '#FFFFE0', stroke: '#888', 'stroke-width': '1px', width: 150, height: 24 },
//         '.note text': { 'font-size': 10, 'ref-x': .47, 'ref-y': 13, ref: '.node', 'y-alignment': 'middle', 'x-alignment': 'middle', fill: 'grey', 'font-family': 'Arial, helvetica, sans-serif' }
//         // TODO find out why 'x' is not simply working in the above
//         // and whath the relation is with text-anchor (start, middle, end)
//     }
//   }, joint.shapes.basic.Generic.prototype.defaults)
// });

// joint.shapes.GROUP = joint.shapes.basic.Generic.extend({

//   markup: '<g class="entity" > \
//             <g class="note" transform="translate(5,55)" display="none"> \
//               <rect/> \
//               <text/> \
//             </g> \
//             <g class="space"><rect/></g> \
//             <g class="source_node" display="none" ><ellipse cx="80" cy="30" rx="62" ry="32"/></g> \
//             <g class="node"><ellipse cx="80" cy="30" rx="60" ry="30"/></g> \
//             <g class="upward" display="none" ><polygon  points="0,-6 160,-6"/></g> \
//             <g class="downward" display="none" ><polygon  points="0,66 160,66"/></g> \
//             <text class="name"/> \
//            </g>',

//   defaults: joint.util.deepSupplement({
//     type: 'GROUP',
//     attrs: {
//         '.vertical': { width: 160, height: 60 },
//         '.space rect': { fill: 'transparent', stroke: 'transparent', width: 180, height: 80, x: -10, y: -10 },
//         'ellipse': {fill: 'transparent', stroke: 'transparent' },
//         '.source_node ellipse': { fill: 'transparent',stroke: "#008cba", 'stroke-width': '4px' },
//         '.name': { 'font-size': 16, text: '', 'ref-x': .5, 'ref-y': 0.5, ref: 'ellipse', 'y-alignment': 'middle', 'x-alignment': 'middle', fill: '#a21', 'font-family': 'Arial, helvetica, sans-serif' },
//         '.downward polygon': { fill: '#FFFFE0', stroke: '#888', 'stroke-width': '2px'},
//         '.upward polygon': { fill: '#FFFFE0', stroke: '#888', 'stroke-width': '2px'},
//         '.company_type': { 'font-size': 12, text: '', 'ref-x': .5, 'ref-y': .7, ref: 'ellipse', 'y-alignment': 'middle', 'x-alignment': 'middle', fill: 'black', 'font-family': 'Arial, helvetica, sans-serif' },
//         '.country': { 'font-size': 10, text: '', 'ref-x': .3, 'ref-y': 0.8, ref: 'ellipse', 'y-alignment': 'middle', 'x-alignment': 'middle', fill: 'black', 'font-family': 'Arial, helvetica, sans-serif' },
//         '.currency': { 'font-size': 10, text: '', 'ref-x': .7, 'ref-y': 0.8, ref: 'ellipse', 'y-alignment': 'middle', 'x-alignment': 'middle', fill: 'black', 'font-family': 'Arial, helvetica, sans-serif' },
//         '.note rect': { fill: '#FFFFE0', stroke: '#888', 'stroke-width': '1px', width: 150, height: 24 },
//         '.note text': { 'font-size': 10, 'ref-x': .47, 'ref-y': 13, ref: '.node', 'y-alignment': 'middle', 'x-alignment': 'middle', fill: 'grey', 'font-family': 'Arial, helvetica, sans-serif' }
//         // TODO find out why 'x' is not simply working in the above
//         // and whath the relation is with text-anchor (start, middle, end)
//     }
//   }, joint.shapes.basic.Generic.prototype.defaults)
// });

// joint.shapes.PERSON = joint.shapes.basic.Generic.extend({

//     markup: '<g class="entity" > \
//               <g class="note" transform="translate(5,60)" display="none"> \
//                 <rect/> \
//                 <text/> \
//               </g> \
//               <g class="space"><rect/></g> \
//               <g class="source_node" display="none" transform="translate(-2,-2)"><rect/></g> \
//               <g class="node"><rect width="160" height="60"/></g> \
//               <g class="upward" display="none" ><polygon  points="0,-6 160,-6"/></g> \
//               <g class="downward" display="none" ><polygon  points="0,66 160,66"/></g> \
//               <circle cx="30" cy="30" r="20" fill="white" stroke="#AAA" width="10" height="50"/> \
//               <text class="name"/> \
//               <text class="country"/> \
//              </g>',

//              // <path stroke="red" width="10" d="M 05 05 h 10 v 50 h -10 Z"/>

//     defaults: joint.util.deepSupplement({
//       type: 'PERSON',
//       attrs: {
//           '.vertical': { width: 160, height: 60 },
//           '.space rect': { fill: 'transparent', stroke: 'transparent', width: 180, height: 80, x: -10, y: -10 },
//           '.node': { fill: 'grey', stroke: '#444', width: 160, height: 60 },
//           '.source_node rect': { fill: 'transparent', width: 164, height: 64, stroke: "#008cba", 'stroke-width': '4px' },
//           '.downward polygon': { fill: '#FFFFE0', stroke: '#888', 'stroke-width': '2px'},
//           '.upward polygon': { fill: '#FFFFE0', stroke: '#888', 'stroke-width': '2px'},
//           '.name': { 'font-size': 16, text: '', 'ref-x': .5, 'ref-y': 0.5, ref: '.node rect', 'y-alignment': 'middle', 'x-alignment': 'middle', fill: '#a21', 'font-family': 'Arial, helvetica, sans-serif' },
//           '.country': { 'font-size': 10, text: '', 'text-anchor': 'end', 'ref-x': 0.90, 'ref-y': 0.2, ref: '.node rect', 'y-alignment': 'middle', 'x-alignment': 'middle', fill: 'black', 'font-family': 'Arial, helvetica, sans-serif' },
//           '.note rect': { fill: '#FFFFE0', stroke: '#888', 'stroke-width': '1px', width: 150, height: 24 },
//           '.note text': { 'font-size': 10, 'ref-x': .47, 'ref-y': 13, ref: '.node', 'y-alignment': 'middle', 'x-alignment': 'middle', fill: 'grey', 'font-family': 'Arial, helvetica, sans-serif' }

//       }
//     }, joint.shapes.basic.Generic.prototype.defaults)
// });



// joint.shapes.FUND = joint.shapes.basic.Generic.extend({

//   markup: '<g class="entity" > \
//             <g class="note" transform="translate(5,60)" display="none"> \
//               <rect/> \
//               <text/> \
//             </g> \
//             <g class="space"><rect/></g> \
//             <g class="source_node" display="none" ><polygon points="80,-22 9,24 -2,61.5 162,61.5 151,24"/></g> \
//             <g class="node"><polygon class="fund" points="80,-20 10,25 0,60 160,60 150,25"/></g> \
//             <g class="upward" display="none" ><polygon  points="80,-26 150,19"/> <polygon  points="10,19 80,-26"/></g> \
//             <g class="downward" display="none" ><polygon  points="0,66 160,66"/></g> \
//             <text class="name"/> \
//             <text class="country"/> \
//             <text class="currency"/> \
//            </g>',

//   defaults: joint.util.deepSupplement({
//     type: 'FUND',
//     attrs: {
//         '.vertical': { width: 160, height: 60 },
//         '.space rect': { fill: 'transparent', stroke: 'transparent', width: 180, height: 80, x: -10, y: -10 },
//         'polygon': { fill: 'grey', stroke: '#444' },
//         '.source_node polygon': { fill: 'transparent', stroke: "#008cba", 'stroke-width': '4px' },
//         '.note text': { 'font-size': 10, 'ref-x': .47, 'ref-y': 33, ref: '.node', 'y-alignment': 'middle', 'x-alignment': 'middle', fill: 'grey', 'font-family': 'Arial, helvetica, sans-serif' },
//         '.name': { 'font-size': 16, text: '', 'ref-x': .5, 'ref-y': 0.65, ref: '.node polygon', 'y-alignment': 'middle', 'x-alignment': 'middle', fill: '#a21', 'font-family': 'Arial, helvetica, sans-serif' },
//         '.upward polygon': { fill: '#FFFFE0', stroke: '#888', 'stroke-width': '2px'},
//         '.downward polygon': { fill: '#FFFFE0', stroke: '#888', 'stroke-width': '2px'},
//         '.country': { 'font-size': 10, text: '', 'ref-x': 0.05, 'ref-y': 0.85, ref: '.node polygon', 'y-alignment': 'middle', 'x-alignment': 'left', 'text-anchor':'start', fill: 'black', 'font-family': 'Arial, helvetica, sans-serif' },
//         '.currency': { 'font-size': 10, text: '', 'ref-x': 0.95, 'ref-y': 0.85, ref: '.node polygon', 'y-alignment': 'middle', 'x-alignment': 'right', 'text-anchor':'end', fill: 'black', 'font-family': 'Arial, helvetica, sans-serif' },
//         '.note rect': { fill: '#FFFFE0', stroke: '#888', 'stroke-width': '1px', width: 150, height: 24 },
//     }
//   }, joint.shapes.basic.Generic.prototype.defaults)
// });


// joint.shapes.MARKET = joint.shapes.basic.Generic.extend({

//     markup: '<g class="entity" > \
//               <g class="note" transform="translate(5,60)" display="none"> \
//                 <rect/> \
//                 <text/> \
//               </g> \
//               <g class="space"><rect/></g> \
//               <g class="source_node" display="none" transform="translate(-2,-2)"><rect/></g> \
//               <g class="node"><rect width="160" height="60"/></g> \
//               <g class="upward" display="none" ><polygon  points="0,-6 160,-6"/></g> \
//               <g class="downward" display="none" ><polygon  points="0,66 160,66"/></g> \
//               <rect x="05" y="05" fill="white" stroke="grey" width="10" height="50"/> \
//               <rect x="15" y="30" fill="white" stroke="grey" width="10" height="25"/> \
//               <rect x="25" y="45" fill="white" stroke="grey" width="10" height="10"/> \
//               <text class="name"/> \
//               <text class="country"/> \
//              </g>',

//              // <path stroke="red" width="10" d="M 05 05 h 10 v 50 h -10 Z"/>

//     defaults: joint.util.deepSupplement({
//       type: 'MARKET',
//       attrs: {
//           '.vertical': { width: 160, height: 60 },
//           '.space rect': { fill: 'transparent', stroke: 'transparent', width: 180, height: 80, x: -10, y: -10 },
//           '.node': { fill: 'grey', stroke: '#444', width: 160, height: 60 },
//           '.source_node rect': { fill: 'transparent', width: 164, height: 64, stroke: "#008cba", 'stroke-width': '4px' },
//           '.downward polygon': { fill: '#FFFFE0', stroke: '#888', 'stroke-width': '2px'},
//           '.upward polygon': { fill: '#FFFFE0', stroke: '#888', 'stroke-width': '2px'},
//           '.name': { 'font-size': 16, text: '', 'ref-x': .5, 'ref-y': 0.5, ref: '.node rect', 'y-alignment': 'middle', 'x-alignment': 'middle', fill: '#a21', 'font-family': 'Arial, helvetica, sans-serif' },
//           '.country': { 'font-size': 10, text: '', 'text-anchor': 'end', 'ref-x': 0.99, 'ref-y': 0.2, ref: '.node rect', 'y-alignment': 'middle', 'x-alignment': 'middle', fill: 'black', 'font-family': 'Arial, helvetica, sans-serif' },
//           '.note rect': { fill: '#FFFFE0', stroke: '#888', 'stroke-width': '1px', width: 150, height: 24 },
//           '.note text': { 'font-size': 10, 'ref-x': .47, 'ref-y': 13, ref: '.node', 'y-alignment': 'middle', 'x-alignment': 'middle', fill: 'grey', 'font-family': 'Arial, helvetica, sans-serif' }
//       }
//     }, joint.shapes.basic.Generic.prototype.defaults)
// });

// joint.shapes.RE_ASSET = joint.shapes.basic.Generic.extend({

//   markup: '<g class="entity horizontal"> \
//             <g class="note" transform="translate(5,70)" display="none"> \
//               <rect/> \
//               <text/> \
//             </g> \
//             <g class="space"><rect/></g> \
//             <g class="source_node" display="none" ><polygon points="80,-2 -2,29 -2,72 162,72 162,29"/></g> \
//             <g class="node"><polygon points="80,0 0,30 160,30"/><rect/></g> \
//             <g class="upward" display="none" ><polygon  points="80,-6 160,26"/> <polygon  points="0,25 80,-6"/></g> \
//             <g class="downward" display="none" ><polygon  points="0,76 160,76"/></g> \
//             <text class="name"/> \
//            </g>',

//   defaults: joint.util.deepSupplement({
//     type: 'RE_ASSET',
//     attrs: {
//         '.vertical': { width: 160, height: 60 },
//         '.space rect': { fill: 'transparent', stroke: 'transparent', width: 180, height: 80, x: -10, y: -10 },
//         '.source_node polygon': { fill: 'transparent', stroke: "#008cba", 'stroke-width': '4px' },
//         '.node polygon': { fill: 'grey', stroke: '#444'},
//         '.upward polygon': { fill: '#FFFFE0', stroke: '#888', 'stroke-width': '2px'},
//         '.downward polygon': { fill: '#FFFFE0', stroke: '#888', 'stroke-width': '2px'},
//         '.node rect': { fill: 'grey', stroke: 'black', width: 160, height: 40, 'ref-y': 0.5, 'ref-x': 0 },
//         '.name': { 'font-size': 16, text: '', 'ref-x': .5, 'ref-y': 0.4, ref: '.node rect', 'y-alignment': 'middle', 'x-alignment': 'middle', fill: '#a21', 'font-family': 'Arial, helvetica, sans-serif' },
//         '.note rect': { fill: '#FFFFE0', stroke: '#888', 'stroke-width': '1px', width: 150, height: 24 },
//         '.note text': { 'font-size': 10, 'ref-x': .47, 'ref-y': 13, ref: '.node', 'y-alignment': 'middle', 'x-alignment': 'middle', fill: 'grey', 'font-family': 'Arial, helvetica, sans-serif' }
//     }
//   }, joint.shapes.basic.Generic.prototype.defaults)
// });
//////////////////////////////////////

// joint.shapes.ECE_VERTICAL = joint.shapes.basic.Generic.extend({

//   markup: '<g class="entity vertical" > \
//               <g class="space"><rect/></g> \
//               <g class="node"><rect/></g> \
//               <text class="name" transform="rotate(90)"/> \
//               <text class="company_type" transform="rotate(0)"/> \
//               <text class="country" transform="rotate(0)"/> \
//               <text class="currency" transform="rotate(0)"/> \
//            </g>',

//   defaults: joint.util.deepSupplement({
//     type: 'ECE_VERTICAL',
//     attrs: {
//         '.vertical': { width: 60, height: 140 },
//         '.space rect': { fill: 'transparent', stroke: 'transparent', width: 80, height: 160, x: -10, y: -10 },
//         '.node rect': { fill: 'grey', stroke: '#444', width: 60, height: 140 },
//         '.name': { text: 'ko', 'font-size': 16, text: '', 'ref-x': 0.5, 'ref-y': 0.5, ref: '.node rect', 'y-alignment': 'middle', 'x-alignment': 'right', fill: '#a21', 'font-family': 'Arial, helvetica, sans-serif' },
//         '.company_type': { 'font-size': 12, text: '', 'ref-x': .90, 'ref-y': .10, ref: '.node rect', 'y-alignment': 'middle', 'x-alignment': 'right', 'text-anchor':'end', fill: 'black', 'font-family': 'Arial, helvetica, sans-serif' },
//         '.country': { 'font-size': 10, text: '', 'ref-x': 0.90, 'ref-y': 0.90, ref: '.node rect', 'y-alignment': 'middle', 'x-alignment': 'right', 'text-anchor':'end', fill: 'black', 'font-family': 'Arial, helvetica, sans-serif' },
//         '.currency': { 'font-size': 10, text: '', 'ref-x': 0.90, 'ref-y': 0.5, ref: '.node rect', 'y-alignment': 'middle', 'x-alignment': 'right', 'text-anchor':'end', fill: 'black', 'font-family': 'Arial, helvetica, sans-serif' },
//     }

//   }, joint.shapes.basic.Generic.prototype.defaults)
// });

// joint.shapes.ECE_HORIZONTAL = joint.shapes.basic.Generic.extend({

//   markup: '<g class="entity" > \
//               <g class="note" transform="translate(5,60)" display="none"> \
//                 <rect/> \
//                 <text/> \
//               </g> \
//               <g class="space"><rect/></g> \
//               <g class="node"><rect/></g> \
//               <g class="checkable" display="none"> \
//                 <rect x="150" y="-10" width="20" height="20" style="fill:white;stroke:black;stroke-width:1;fill-opacity:1;stroke-opacity:1" /> \
//                 <text/> \
//               </g> \
//               <text class="name"/> \
//            </g>',

//   defaults: joint.util.deepSupplement({
//     type: 'ECE_HORIZONTAL',
//     attrs: {
//         '.vertical': { width: 160, height: 60 },
//         '.space rect': { fill: 'transparent', stroke: 'transparent', width: 180, height: 80, x: -10, y: -10 },
//         '.node rect': { fill: 'grey', stroke: '#444', width: 160, height: 60 },
//         '.note rect': { fill: '#FFFFE0', stroke: '#888', 'stroke-width': '1px', width: 150, height: 24 },
//         '.note text': { 'font-size': 10, 'ref-x': .47, 'ref-y': 13, ref: '.node', 'y-alignment': 'middle', 'x-alignment': 'middle', fill: 'grey', 'font-family': 'Arial, helvetica, sans-serif' },
//         '.name': { text: 'ko', 'font-size': 16, text: '', 'ref-x': .5, 'ref-y': 0.3, ref: '.node rect', 'y-alignment': 'middle', 'x-alignment': 'middle', fill: '#a21', 'font-family': 'Arial, helvetica, sans-serif' },
//     }

//   }, joint.shapes.basic.Generic.prototype.defaults)
// });
