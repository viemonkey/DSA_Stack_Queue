"use strict";
exports.__esModule = true;
var Stack_1 = require("./Stack");
var stack = new Stack_1.Stack();
var newStack = [];
var n = 10000;
for (var i = 1; i <= n; i++) {
    stack.push(i);
}
console.log(stack);
for (var i = 0; i < n; i++) {
    var item = stack.pop();
    newStack.push(item);
}
console.log(newStack);
