class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.size = 1;
  }

  push(value) {
    const newNode = new Node(value);
    this.tail = newNode;
    this.tail.next= newNode
    this.tail.prev= this.head
    this.size++;
  }
}

const doubleLinkList = new DoubleLinkList(5);
// doubleLinkList.push(20);
// doubleLinkList.push(10);

console.log(doubleLinkList);
