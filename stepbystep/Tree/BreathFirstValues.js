

const breathFirstValues = (root) => {
  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current.value);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
};



// breathFirstValues(a);
