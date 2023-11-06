"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
class Product {
    constructor({ productID }) {
        this.name = "";
        this.price = 0;
        this.category = "";
        this.id = productID;
        if (productID === enums_1.ProductIDs.buisnessCard) {
            this.name = "Buisness Card";
            this.price = 10;
            this.category = "cards";
        }
        else if (productID === enums_1.ProductIDs.giftCard) {
            this.name = "Gift Card";
            this.price = 100;
            this.category = "cards";
        }
        else if (productID == enums_1.ProductIDs.shoppingVoucher) {
            this.name = "Shopping Voucher";
            this.price = 500;
            this.category = "vocuher";
        }
    }
}
exports.default = Product;
