class Queue {
  constructor() {
    this.queue = [];
    this.currenSize = this.queue.length;
  }
  enqueue(value) {
    this.queue[this.currenSize] = value;
    this.currenSize++;
  }

  dequeue() {
    if (this.queue.length > 0) {
      const firstElement = this.queue[0];
      for (let i = 0; i < this.queue.length; i++) {
        this.queue[i] = this.queue[i + 1];
      }
      this.queue.length--;

      return firstElement;
    } else {
      console.warn("Queue is empty");
    }
  }

  print() {
    console.log(this.queue);
  }
}

const queue = new Queue();

queue.enqueue("artcell");
queue.enqueue("warfaze");
queue.enqueue("fara");
queue.enqueue("nemesis");

console.log(queue.dequeue());
console.log(queue.dequeue());
/* queue.dequeue()
queue.dequeue()
queue.dequeue() */

/* queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()
 */

queue.print();
