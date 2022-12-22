import {Queue} from "./Queue";
import {Stack} from "./Stack";

let arr = [1, 2, 3, 4, 3, 2, 3];

let queue = new Queue<number>();
let stack = new Stack<number>()

for (let i = 0; i < arr.length; i++) {
    queue.enqueue(arr[i])
    stack.push(arr[i])
}

let count = 0;

for (let i = 1; i <= arr.length; i++) {
    if (queue.dequeue() === stack.pop()) {
        count++;
    } else {
        break;
    }
}

if (count === arr.length) {
    console.log("---------Đối xứng---------");
} else {
    console.log("---------Không đối xứng---------");
}