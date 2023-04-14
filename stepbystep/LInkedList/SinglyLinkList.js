class Node {
    constructor(data) {
      this.value = data;
      this.next = null;
    }
  }
  
  class SinglyLinkList {
    constructor() {
      this.head = null;
    }
  
    insert(data) {
      if (this.head === null) {
        this.head = new Node(data);
        this.tail = this.head;
        this.size = 1;
      } else {
        const node = new Node(data);
        this.tail.next = node;
        this.tail = node;
        this.size++;
      }
    }
  
    printAll() {
      const all = [];
      let current = this.head;
      let count = 0;
      while (this.size > count) {
        all[count] = current.value;
        current = current?.next;
        count++;
      }
      console.log(all);
    }
  
    insertAt(data, index) {
      if (index > this.size - 1 || index < 0)
        throw new Error("Provide valid index");
      let current = this.head;
      let count = 0;
      while (current) {
        if (count === index) {
          current.value = data;
        }
        current = current?.next;
        count++;
      }
    }
    deleteAt(index) {
      if (index > this.size - 1 || index < 0)
        throw new Error("Provide valid index");
      let currentNum = 0;
      let currentNode = this.head;
      while (currentNum < this.size) {
        if (currentNum >= index) {
          console.log(currentNode?.value);
          currentNode.value = currentNode?.next?.value || [];
        }
  
        currentNode = currentNode.next;
        currentNum++;
      }
      this.size--;
    }
  
    updatedAt(data, index) {
      if (index > this.size - 1 || index < 0)
      throw new Error("Provide valid index");
      let count = 0;
      let current = this.head;
      while (this.size > count) {
        if (count === index) {
          console.log(current);
          current.value = data;
        }
        current = current.next;
        count++;
      }
    }
  }
  
  const singlyLinkList = new SinglyLinkList();
  
  singlyLinkList.insert(5);
  singlyLinkList.insert(40);
  singlyLinkList.insert(89);
  singlyLinkList.updatedAt(4, 0);
  
  singlyLinkList.printAll();
  
  console.log(singlyLinkList);
  