"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LineItem {
    constructor({ product, coupoun, }) {
        this.coupoun = coupoun;
        this.product = product;
    }
    get hasCoupounAttached() {
        if (this.coupoun !== undefined)
            return true;
        else
            return false;
    }
    getCoupoun() {
        if (this.hasCoupounAttached)
            return this.coupoun;
    }
}
exports.default = LineItem;
