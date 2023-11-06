import { ICoupoun } from "./coupoun";
import { IProduct } from "./product";
// import { IProduct } from "./product";
export default class Queue {
    private items: Map<number, ICoupoun | IProduct>;
    private frontIndex: number;
    private backIndex: number;
    constructor() {
        this.items = new Map();
        this.frontIndex = 0;
        this.backIndex = 0;
    }
    enqueue(item: ICoupoun | IProduct) {
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
