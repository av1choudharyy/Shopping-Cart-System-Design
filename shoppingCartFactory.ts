import cart from "./cart";

export default class ShoppingCartFactory {
    private static instance: ShoppingCartFactory;
    private userCartMap: Map<string, cart>;
    private constructor() {
        this.userCartMap = new Map();
    }

    public static createInstance() {
        if (!ShoppingCartFactory.instance) {
            return new ShoppingCartFactory();
        }
        return ShoppingCartFactory.instance;
    }

    public createUserCart({ userID }: { userID: string }) {
        if (this.userCartMap.has(userID)) return this.userCartMap.get(userID);
        else {
            const userCart = new cart();
            this.userCartMap.set(userID, userCart);
            return userCart;
        }
    }
}
