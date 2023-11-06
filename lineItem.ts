import { ICoupoun } from "./coupoun";
import { IProduct } from "./product";

export default class LineItem {
    private product: IProduct;
    private coupoun: ICoupoun | undefined;
    constructor({
        product,
        coupoun,
    }: {
        product: IProduct;
        coupoun: ICoupoun | undefined;
    }) {
        this.coupoun = coupoun;
        this.product = product;
    }

    get hasCoupounAttached() {
        if (this.coupoun !== undefined) return true;
        else return false;
    }

    getCoupoun() {
        if (this.hasCoupounAttached) return this.coupoun;
    }
}
