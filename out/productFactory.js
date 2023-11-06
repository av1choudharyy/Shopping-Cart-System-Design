"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("./product"));
class ProductFactory {
    constructor() {
        this.productMap = new Map();
    }
    static createInstance() {
        if (!ProductFactory.instance) {
            return new ProductFactory();
        }
        return ProductFactory.instance;
    }
    createProduct({ productID }) {
        if (this.productMap.has(productID)) {
            return this.productMap.get(productID);
        }
        const product = new product_1.default({ productID });
        this.productMap.set(productID, product);
        return product;
    }
}
exports.default = ProductFactory;
