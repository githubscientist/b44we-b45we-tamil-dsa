/*
    Stack

    - Data Structure
    - Abstract Data Type
    - Stack follows First In Last Out (FILO) or Last In First Out (LIFO)
    - Operations
        1. push() - pushes the element into the top of the stack
        2. pop() - removes the element from the top of the stack
        3. peek() - returns the topmost element of the stack
        4. isEmpty() - returns true if the stack is empty and false otherwise

        5. isFull()

        6. stackoverflow: occurs when we try to push an element into the already full stack
        7. stackunderflow: occurs when we try to pop an element from the already empty stack
    - Implementation
        * Array 
        * Object

*/

// Array Implementation

class Stack{
    constructor() {
        this.items = [];
        this.top = -1;
    }

    push(data) {
        this.items.push(data);
        this.top++;
    }

    pop() {
        this.items.pop();
        this.top--;
    }

    peek() {
        return this.items[this.top];
    }

    isEmpty() {
        return this.top == -1;
    }
}

let stack = new Stack();

stack.push(3);
stack.push(5);
stack.push(7);
stack.pop();
stack.push(10);
stack.pop();
stack.pop();
stack.pop();

console.log(stack.peek());
console.log(`stack is empty: ${stack.isEmpty()}`);