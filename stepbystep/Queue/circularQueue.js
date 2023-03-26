class CircularQueue {
  constructor(size) {
    this.array = new Array(size);
    this.max = this.array.length;
    this.currentSize = 0;
    this.front = -1;
    this.rare = -1;
  }

  enqueue(value) {
    if (this.currentSize !== this.max) {
      if (this.rare === this.max) {
        this.rare = 0;
      } else {
        this.rare++;
      }
      this.array[this.rare] = value;
      this.currentSize++;
      if (this.front === -1) {
        this.front = this.rare;
      }
    } else {
      console.warn("Queue is full!!");
    }
  }

  dequeue() {
    if (this.currentSize !== 0) {
      this.array[this.front] = null;
      if (this.front === this.max - 1) {
        this.front = 0;
      } else {
        this.front++;
      }
      this.currentSize--;
    } else {
      this.rare = -1;
      this.front = -1;
      console.warn("Queue is empty!!");
    }
  }
}

const circularQueue = new CircularQueue(3);

circularQueue.enqueue(2);
circularQueue.enqueue(3);
circularQueue.enqueue(5);
circularQueue.dequeue();
circularQueue.dequeue();
circularQueue.dequeue();
// circularQueue.enqueue(60)

console.log(circularQueue);
