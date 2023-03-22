// There are usually two types of linklist.
// Singly link list and Double Link List

class Node {
  //Every node have a data and pointer which have a referece of the next node;
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkListed {
  //Linked has a head and tail. intially every value would be null.if one value added in the link list then it added on head and tail always would be null.
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
  }

  printData(){
    let current = this.head;
    while(current){
        console.log(current.data);
        current= current.next
    }
  }
}

const ll = new LinkListed();
ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)
ll.printData()
console.log(ll);
