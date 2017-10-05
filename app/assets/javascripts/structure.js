function renderStructure(json) {
  var graph = new joint.dia.Graph();

  var paper = new joint.dia.Paper({
    el: $('#structure'),
    model: graph
  });
  paper.setOrigin(10, 25);

  graph.fromJSON(json);

  var layoutConfig = {
    // setLinkVertices: true,
    nodeSep: 40,
    rankSep: 120,
    edgeSep: 40,
    rankDir: 'TB',
    align: '',
    setVertices: function(link, points) {
      first = points.shift();
      last = points.pop();
      link.set('vertices', points);
    }
  }
  joint.layout.DirectedGraph.layout(graph, layoutConfig);
}
