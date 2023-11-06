"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { IProduct } from "./product";
class Queue {
    constructor() {
        this.items = new Map();
        this.frontIndex = 0;
        this.backIndex = 0;
    }
    enqueue(item) {
        this.items.set(this.backIndex, item);
        this.backIndex++;
        return item + " inserted";
    }
    dequeue() {
        const item = this.items.get(this.frontIndex);
        this.items.delete(this.frontIndex);
        this.frontIndex++;
        return item;
    }
    peek() {
        return this.items.get(this.frontIndex);
    }
    get printQueue() {
        return this.items;
    }
}
exports.default = Queue;
