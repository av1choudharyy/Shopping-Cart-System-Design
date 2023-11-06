import { ProductIDs } from "./enums";

export interface IProduct {
    id: string;
    name: string;
    price: number;
    category: string;
}

export default class Product implements IProduct {
    id: string;
    name: string = "";
    price: number = 0;
    category: string = "";
    constructor({ productID }: { productID: string }) {
        this.id = productID;
        if (productID === ProductIDs.buisnessCard) {
            this.name = "Buisness Card";
            this.price = 10;
            this.category = "cards";
        } else if (productID === ProductIDs.giftCard) {
            this.name = "Gift Card";
            this.price = 100;
            this.category = "cards";
        } else if (productID == ProductIDs.shoppingVoucher) {
            this.name = "Shopping Voucher";
            this.price = 500;
            this.category = "vocuher";
        }
    }
}
