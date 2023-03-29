// recursion way
class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}
const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);

a.right = c;
a.left = b;
b.right = e;
b.left = d;
c.right = f;

/* const treeSum = (root) => {
  if (root === null) return 0;
  return root.value + treeSum(root.left) + treeSum(root.right);
}; */

//while way

const treeSum = (root) => {
  if (root === null) return 0;
  let totalSum = 0;
  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift()
    totalSum+= current.value;

    if(current.left) queue.push(current.left)
    if(current.right) queue.push(current.right)
  }
  return totalSum
};

console.log(treeSum(a)); 
