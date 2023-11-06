import ShoppingCartFactory from "./shoppingCartFactory";

export default class User {
    private id: string;
    private firstName: string;
    private lastName: string;
    private mobile: number;
    private email: string;

    constructor({
        id,
        firstName,
        lastName,
        mobile,
        email,
    }: {
        id: string;
        firstName: string;
        lastName: string;
        mobile: number;
        email: string;
    }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.mobile = mobile;
    }

    getUserId() {
        return this.id;
    }

    getUserDetails() {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            mobile: this.mobile,
        };
    }

    createUserCart() {
        return ShoppingCartFactory.createInstance().createUserCart({
            userID: this.id,
        });
    }
}
