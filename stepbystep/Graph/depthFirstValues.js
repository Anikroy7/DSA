/* 
    a  ->  c
    ↓      ↓
    b      e 
    ↓
    d  ->  f
*/

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

//using stack
const depthFirstValues = (graph, source) => {
    const stack = [source];

    while (stack.length>0){
        const current = stack.pop();
        console.log(current);
        for (let dependencis of graph[current]){
            stack.push(dependencis);
        }
    }
 
};

depthFirstValues(graph, 'a')
