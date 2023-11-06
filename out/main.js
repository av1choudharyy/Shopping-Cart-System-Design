"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const productFactory_1 = __importDefault(require("./productFactory"));
const user_1 = __importDefault(require("./user"));
function main() {
    const user = new user_1.default({
        id: "av1choudhary",
        firstName: "Abhishek",
        lastName: "Choudhary",
        mobile: 8294817554,
        email: "abc@gmail.com",
    });
    const cart = user.createUserCart();
    const productFactory = productFactory_1.default.createInstance();
    const buisnessCard = productFactory.createProduct({
        productID: enums_1.ProductIDs.buisnessCard,
    });
    const giftCard = productFactory.createProduct({
        productID: enums_1.ProductIDs.giftCard,
    });
    const shopppingVoucher = productFactory.createProduct({
        productID: enums_1.ProductIDs.shoppingVoucher,
    });
    cart.addProduct({ product: buisnessCard });
    // cart.applyCoupoun({ coupounID: Coupouns.next });
    cart.addProduct({ product: buisnessCard });
    cart.addProduct({ product: giftCard });
    // cart.applyCoupoun({ coupounID: Coupouns.nextType });
    cart.addProduct({ product: shopppingVoucher });
    cart.removeProduct({ product: buisnessCard });
    // cart.applyCoupoun({ coupounID: Coupouns.next });
    cart.addProduct({ product: shopppingVoucher });
    cart.addProduct({ product: giftCard });
    // cart.applyCoupoun({ coupounID: Coupouns.all });
    console.log(cart.getItems);
}
main();
