const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

/* 
    a  ->  c
    ↓      ↓
    b      e 
    ↓
    d  ->  f
*/
//recursive way
/* const hasPath = (graph, src, dst) => {
  if (src === dst) return true;
  for(let v of graph[src]){
    if(hasPath(graph, v, dst)===true){
        return true;
    }
  }
  return false;
};

console.log(hasPath(graph, "a", "g")); */

//breath-first way
const hasPath = (graph, src, dst) => {
  if (src === dst) return true;
  const queue = [src];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current === dst) return true;
    for (let v of graph[current]) {
      queue.push(v);
    }
  }
  return false;
};

console.log(hasPath(graph, 'e', 'f'));
