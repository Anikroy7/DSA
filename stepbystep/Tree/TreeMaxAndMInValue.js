class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}
const a = new Node(1);
const b = new Node(2);
const c = new Node(9);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);

a.right = c;
a.left = b;
b.right = e;
b.left = d;
c.right = f;

/* //   while way
const treeMax = (root) => {
  if (!root) throw new Error("Tree is empty");
  let max = -Infinity;
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();
    if (current.value > max) {
      max = current.value;
    }
    if(current.left) stack.push(current.left)
    if(current.right) stack.push(current.right)
  }
  return max;
};

console.log(treeMax(a));

const treeMin = (root) => {
  if (!root) throw new Error("Tree is empty");
  let min = Infinity;
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();
    if (current.value < min) {
      min = current.value;
    }
    if(current.left) stack.push(current.left)
    if(current.right) stack.push(current.right)
  }
  return min;
};

console.log(treeMin(a)); */

//recursive way

const treeMax = (root) => {
  if (root === null) return -Infinity;
  const leftValue = treeMax(root.left);
  const rightValue = treeMax(root.right);
  return Math.max(root.value, leftValue,rightValue);
};


const treeMin = (root)=>{
    if (root ===null) return Infinity;
    const leftValue = treeMin(root.left)
    const rightValue = treeMin(root.right)
    return Math.min(root.value, leftValue, rightValue)
}


console.log(treeMin(a));