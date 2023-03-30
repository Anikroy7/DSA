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
  
  //using queue
  const breathFirstValues = (graph, source) => {
    const queue = [source];
  
    while (queue.length > 0) {
      const current = queue.shift();
      console.log(current);
      for( let dependencis of graph[current]){
              queue.push(dependencis)
          
      }
    }
  };
  
  breathFirstValues(graph, 'a')
  