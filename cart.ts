import { CoupounAll, CoupounNext, CoupounNextType, ICoupoun } from "./coupoun";
import { Coupouns } from "./enums";
import LineItem from "./lineItem";
import { IProduct } from "./product";
import Queue from "./queue";

export default class cart {
    // private products: Array<IProduct>;
    private coupouns: Queue;
    private ProductMap: Map<
        string,
        IProduct & { quantity: number; coupoun?: ICoupoun }
    > = new Map();

    constructor() {
        this.coupouns = new Queue();
    }

    addProduct({ product }: { product: IProduct }) {
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
            const quantity = this.ProductMap.get(product.id)?.quantity!;
            this.ProductMap.set(product.id, {
                ...product,
                quantity: quantity + 1,
            });
        } else this.ProductMap.set(product.id, { ...product, quantity: 1 });
    }

    removeProduct({ product }: { product: IProduct }) {
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
            const quantity = this.ProductMap.get(product.id)?.quantity!;
            if (quantity > 1) {
                this.ProductMap.set(product.id, {
                    ...product,
                    quantity: quantity - 1,
                });
            } else this.ProductMap.delete(product.id);
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

    applyCoupoun({ coupounID }: { coupounID: number }) {
        if (coupounID === Coupouns.all) {
            this.coupouns.enqueue(CoupounAll.createInstance());
        }
        if (coupounID === Coupouns.next) {
            this.coupouns.enqueue(CoupounNext.createInstance());
        }
        if (coupounID === Coupouns.nextType) {
            this.coupouns.enqueue(CoupounNextType.createInstance());
        }
    }
}
