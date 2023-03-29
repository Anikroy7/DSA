class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

const depthFirstValues = (root) => {
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();

    console.log(current.value);
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
};

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

depthFirstValues(a)

/* 
         a
       /  \
     b     c
    / \     \
   d   e     f
*/

// console.log(a);
