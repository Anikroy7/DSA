class Stack {
    constructor() {
        this.stack = [];
        this.top = 0;
        this.index = this.top - 1

    }
    push(element) {
        this.stack[this.top] = element;
        this.top++
        this.index++
        return this.stack
    }
    pop() {
        this.top--
        this.index--
        return this.stack
    }

}

const stack = new Stack();
console.log(stack.push('leem'))
console.log(stack.push('geem'))
console.log(stack.pop())
