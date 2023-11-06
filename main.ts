import { Coupouns, ProductIDs } from "./enums";
import ProductFactory from "./productFactory";
import User from "./user";

function main() {
    const user = new User({
        id: "av1choudhary",
        firstName: "Abhishek",
        lastName: "Choudhary",
        mobile: 8294817554,
        email: "abc@gmail.com",
    });
    const cart = user.createUserCart()!;
    const productFactory = ProductFactory.createInstance();
    const buisnessCard = productFactory.createProduct({
        productID: ProductIDs.buisnessCard,
    })!;
    const giftCard = productFactory.createProduct({
        productID: ProductIDs.giftCard,
    })!;
    const shopppingVoucher = productFactory.createProduct({
        productID: ProductIDs.shoppingVoucher,
    })!;
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
