"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const coupoun_1 = require("./coupoun");
const enums_1 = require("./enums");
const queue_1 = __importDefault(require("./queue"));
class cart {
    constructor() {
        this.uniqueItems = new Set();
        this.itemQuantityMap = new Map();
        this.ProductMap = new Map();
        this.coupouns = new queue_1.default();
    }
    addProduct({ product }) {
        var _a;
        // this.products.push(product);
        // const item = new LineItem({ product, coupoun: undefined });
        // console.log(item);
        // console.log(item.getCoupoun());
        // console.log(item.hasCoupounAttached);
        // this.uniqueItems.add(product);
        // if (this.itemQuantityMap.has(product.id)) {
        //     this.itemQuantityMap.set(
        //         product.id,
        //         this.itemQuantityMap.get(product.id)! + 1
        //     );
        // } else this.itemQuantityMap.set(product.id, 1);
        if (this.ProductMap.has(product.id)) {
            const quantity = (_a = this.ProductMap.get(product.id)) === null || _a === void 0 ? void 0 : _a.quantity;
            this.ProductMap.set(product.id, Object.assign(Object.assign({}, product), { quantity: quantity + 1 }));
        }
        else
            this.ProductMap.set(product.id, Object.assign(Object.assign({}, product), { quantity: 1 }));
    }
    removeProduct({ product }) {
        var _a;
        // if (this.itemQuantityMap.get(product.id)! > 1) {
        //     this.itemQuantityMap.set(
        //         product.id,
        //         this.itemQuantityMap.get(product.id)! - 1
        //     );
        // } else {
        //     this.itemQuantityMap.delete(product.id);
        //     this.uniqueItems.delete(product);
        // }
        if (this.ProductMap.has(product.id)) {
            const quantity = (_a = this.ProductMap.get(product.id)) === null || _a === void 0 ? void 0 : _a.quantity;
            if (quantity > 1) {
                this.ProductMap.set(product.id, Object.assign(Object.assign({}, product), { quantity: quantity - 1 }));
            }
            else
                this.ProductMap.delete(product.id);
        }
    }
    get getItems() {
        // console.log(this.coupouns.printQueue);
        // return [...this.uniqueItems].map((item) => {
        //     return {
        //         name: item.name,
        //         price: item.price,
        //         quantity: this.itemQuantityMap.get(item.id),
        //         amount: item.price * this.itemQuantityMap.get(item.id)!,
        //     };
        // });
        return this.ProductMap;
    }
    get calculateCartValue() {
        return 0;
    }
    applyCoupoun({ coupounID }) {
        if (coupounID === enums_1.Coupouns.all) {
            this.coupouns.enqueue(coupoun_1.CoupounAll.createInstance());
        }
        if (coupounID === enums_1.Coupouns.next) {
            this.coupouns.enqueue(coupoun_1.CoupounNext.createInstance());
        }
        if (coupounID === enums_1.Coupouns.nextType) {
            this.coupouns.enqueue(coupoun_1.CoupounNextType.createInstance());
        }
    }
}
exports.default = cart;
