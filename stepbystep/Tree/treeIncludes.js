//using while loop
class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.right = c;
a.left = b;
b.right = e;
b.left = d;
c.right = f;


/* const treeIncludes = (root, value) => {
    if (root === null) return false;
    const queue = [root];
  
    while (queue.length > 0) {
      const current = queue.shift();
      if (current.value === value) {
        return true;
      }
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return false
  }; */
/*
 */

//using recursion

const treeIncludes = (root, value) => {
  if (root === null) return false;
  if (root.value === value) return true;
  return treeIncludes(root.left, value) || treeIncludes(root.right, value);
};

const result = treeIncludes(a, "d");
console.log(result);
