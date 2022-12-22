import {Stack} from "./Stack";

let stack = new Stack()
let newStack = [];
let n = 10;

for (let i = 1; i <= n; i++) {
    stack.push(i);
}

console.log(stack)

for (let i = 0; i < n; i++) {
    let item = stack.pop();
    newStack.push(item);
}


console.log(newStack);