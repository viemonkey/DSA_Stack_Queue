"use strict";
exports.__esModule = true;
var Queue_1 = require("./Queue");
var queue = new Queue_1.Queue();
queue.addqueue(1);
queue.addqueue(2);
queue.addqueue(3);
queue.addqueue(4);
console.log(queue.dequeue());
console.log(queue);
