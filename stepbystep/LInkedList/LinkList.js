class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linklist {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.size = 1;
  }
  push(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }

  showAll() {
    const allNode = [];
    let currentNode = this.head;
    const length = this.size;
    let counter = 0;
    while (counter < length) {
      allNode[counter] = currentNode.value;
      currentNode = currentNode.next;
      counter++;
    }
    return allNode;
  }

  updateAt(index, value) {
    if (index > this.size - 1) {
      throw new Error('"Please provide a valid index"');
    }
    let counter = 0;
    let currentNode = this.head;
    const size = this.size;
    while (counter < size) {
      currentNode = currentNode.next;
      if (counter === index - 1) {
        currentNode.value = value;
      }

      counter++;
    }
  }
}

const linklist = new Linklist(200);

linklist.push(300);
linklist.push(400);
linklist.push(500);
linklist.updateAt(1, 20);
linklist.updateAt(60, 30);
console.log(linklist.showAll());

console.log(linklist);
