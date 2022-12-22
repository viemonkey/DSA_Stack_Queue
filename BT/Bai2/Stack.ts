export class Stack<T> {
    container: T[] = [];

    constructor() {
    }

    push(item): void {
        this.container.push(item)
    }

    pop(): T {
        return this.container.pop()
    }

}