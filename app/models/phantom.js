var fs = require('fs');
var stdin = fs.open('/dev/stdin', 'r')
var structureJSON = stdin.readLine();
var structure = JSON.parse(structureJSON);

var page = require('webpage').create();
page.content = '<html><body><div id="structure"></div></body></html>';
page.injectJs('../../node_modules/jquery/dist/jquery.js');
page.injectJs('../../node_modules/lodash/index.js');
page.injectJs('../../node_modules/backbone/backbone.js');
page.injectJs('../../node_modules/graphlib/dist/graphlib.core.min.js');
page.injectJs('../../node_modules/dagre/dist/dagre.core.js');
page.injectJs('../../app/assets/javascripts/rappid/rappid.js');
page.injectJs('../../app/assets/javascripts/joint.items.js');
page.injectJs('../../app/assets/javascripts/joint.layout.treeLayout.js');
page.injectJs('../../app/assets/javascripts/structure.js');

page.evaluate(function(s) {
  renderStructure(s);
}, structure);

fs.write('/dev/stdout', page.renderBase64('PNG'), 'w');
phantom.exit();
