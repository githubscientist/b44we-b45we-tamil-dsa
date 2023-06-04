// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

// function findAdjacentIndex(words) {
//     for (let i = 0; i < words.length; i++){
//         if (words[i] == words[i + 1]) {
//             return i;
//         }
//     }
//     return -1;
// }

// // Time Complexity: O(N^2)
// inp.on("close", () => {
//     // sentence to array of words
//     let words = userInput[0].split(' ');

//     let index = -1;
    
//     // check iteratively if the array of words have two adjacent words equal
//     do {
//         index = findAdjacentIndex(words);

//         // if the index != -1
//         // remove the words
//         if (index != -1) words.splice(index, 2);
//     } while (index != -1);

//     if (words.length > 0) {
//         // print the words
//         console.log(words.join(' '));
//     } else {
//         console.log(-1);
//     }
// });

// function findAdjacentIndex(words) {
//     for (let i = 0; i < words.length; i++){
//         if (words[i] == words[i + 1]) {
//             return i;
//         }
//     }
//     return -1;
// }

// stack definition
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

// Time Complexity: O(N) using Stack
inp.on("close", () => {
    // sentence to array of words
    let words = userInput[0].split(' ');
    
    // create a new stack
    let stack = new Stack();

    for (let index = 0; index < words.length; index++){
        if (stack.isEmpty()) {
            // stack is empty
            // so, push the current word to the stack
            stack.push(words[index]);
        } else {
            // stack is not empty
            // compare the current word with the top of the stack
            if (words[index] == stack.peek()) {
                // delete the top of the stack
                stack.pop();
            } else {
                // push the current word to the stack
                stack.push(words[index]);
            }
        }
    }

    if (!stack.isEmpty()) {
        console.log(stack.items.join(' '));
    } else {
        console.log(-1);
    }
});