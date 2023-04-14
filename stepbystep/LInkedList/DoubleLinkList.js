class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insert(value) {
    const node = new Node(value);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size++;
  }

  printAll() {
    let all = [];
    let current = this.head;
    let count = 0;
    while (count < this.size) {
      all[count] = current.value;
      current = current.next;
      count++
    }
    console.log(all);
  }
  reversePrint(){
    let all = [];
    let current = this.tail;
    let count = 0;
    while (count < this.size) {
      all[count] = current.value;
      current = current.prev;
      count++
    }
    console.log(all);
  }
}
const doublyLinkList = new DoublyLinkList();
doublyLinkList.insert(45);
doublyLinkList.insert(59);
doublyLinkList.insert(98);
doublyLinkList.printAll()
doublyLinkList.reversePrint()
console.log(doublyLinkList);
