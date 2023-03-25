class Stack {
  constructor() {
    this.stack = [];
    this.currrentIndex = 0;
  }

  push(value) {
    this.stack[this.currrentIndex] = value;
    this.currrentIndex++;
  }
  print() {
    console.log(this.stack);
  }
  pop() {
    if (this.stack.length > 0) {
      const lastElement = this.stack[this.currrentIndex - 1];
      this.stack.length--;
      this.currrentIndex--;
      return lastElement;
    }
  }

  reverseString(value) {
   if(typeof value ==='string'){
    const valueToArray = value.split("");
    const newStringArray = [];

    for (let i = 0; i < valueToArray.length; i++) {
      this.push(valueToArray[i]);
    }

    for (let i = 0; i < valueToArray.length; i++) {
      newStringArray[i] = this.pop();
    }
    
    const newArrayToString = newStringArray.join("");
    console.log(newArrayToString);
/*     const newStringToArray = newArrayToString.split("");
    for (let i = newArrayToString.length-1; i>=0;  i--) {
        this.push(newStringToArray[i])
    } */
   }
  }
}

const stack = new Stack();
stack.push('hello')
stack.push('hello')
stack.push('hello')
stack.pop()
stack.reverseString('anik')

stack.print()


