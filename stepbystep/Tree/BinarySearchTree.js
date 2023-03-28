class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isRootEmpty() {
    return this.root === null;
  }

  makeTree(value) {
    const newNode = new Node(value);
    if (this.isRootEmpty()) {
      this.root = newNode;
    } else {
      this.insertTree(this.root, newNode);
    }
  }
  insertTree(root, node) {
    if (node.value === root.value) {
      console.warn("Value should be different! :)");
      return;
    }
    if (node.value > root.value) {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertTree(root.right, node);
      }
    } else {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertTree(root.left, node);
      }
    }
  }

  search(root, value) {
    console.log('root', root);
    if (root === null) {
      return false;
    }
    if (root.value === value) {
      return true;
    } else if (value > root.value) {
      return this.search(root.right, value);
    } else {
      return this.search(root.left, value);
    }
  }
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree.makeTree(30);
binarySearchTree.makeTree(20);
binarySearchTree.makeTree(25);
binarySearchTree.makeTree(100);
// binarySearchTree.makeTree(30);
binarySearchTree.makeTree(40);
binarySearchTree.makeTree(50);
binarySearchTree.makeTree(60);
binarySearchTree.makeTree(70);

console.log(binarySearchTree.search(binarySearchTree.root, 63));

console.log(binarySearchTree);
