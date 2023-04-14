const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

const undirectPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  return graph
};

const buildGraph = (edges) => {
  const graph = {};
  for (let v of edges) {
    let [a, b] = v;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

undirectPath(edges, "a", "m");
