"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cart_1 = __importDefault(require("./cart"));
class ShoppingCartFactory {
    constructor() {
        this.userCartMap = new Map();
    }
    static createInstance() {
        if (!ShoppingCartFactory.instance) {
            return new ShoppingCartFactory();
        }
        return ShoppingCartFactory.instance;
    }
    createUserCart({ userID }) {
        if (this.userCartMap.has(userID))
            return this.userCartMap.get(userID);
        else {
            const userCart = new cart_1.default();
            this.userCartMap.set(userID, userCart);
            return userCart;
        }
    }
}
exports.default = ShoppingCartFactory;
