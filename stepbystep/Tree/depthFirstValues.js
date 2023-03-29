

//using while loop
/* 
const depthFirstValues = (root) => {
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();

    console.log(current.value);
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
}; */

/* 
         a
       /  \
     b     c
    / \     \
   d   e     f
*/

//Using recursion function
const depthFirstValues = (root) => {
  if (root === null) return [];

  const rightValue = depthFirstValues(root.right);
  const leftValue = depthFirstValues(root.left);

  return [root.value, ...rightValue, ...leftValue];
};



console.log(depthFirstValues(a));

// console.log(a);
