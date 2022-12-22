"use strict";
exports.__esModule = true;
var Queue_1 = require("./Queue");
var Stack_1 = require("./Stack");
var arr = [1, 2, 3, 4, 3, 2, 3];
var queue = new Queue_1.Queue();
var stack = new Stack_1.Stack();
for (var i = 0; i < arr.length; i++) {
    queue.enqueue(arr[i]);
    stack.push(arr[i]);
}
var count = 0;
for (var i = 1; i <= arr.length; i++) {
    if (queue.dequeue() === stack.pop()) {
        count++;
    }
    else {
        break;
    }
}
if (count === arr.length) {
    console.log("---------Đối xứng---------");
}
else {
    console.log("---------Không đối xứng---------");
}
