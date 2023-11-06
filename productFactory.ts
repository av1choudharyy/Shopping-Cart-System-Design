import Product, { IProduct } from "./product";

export default class ProductFactory {
    private static instance: ProductFactory;
    private productMap: Map<string, IProduct>;
    private constructor() {
        this.productMap = new Map();
    }
    public static createInstance() {
        if (!ProductFactory.instance) {
            return new ProductFactory();
        }
        return ProductFactory.instance;
    }
    public createProduct({ productID }: { productID: string }) {
        if (this.productMap.has(productID)) {
            return this.productMap.get(productID);
        }
        const product = new Product({ productID });
        this.productMap.set(productID, product);
        return product;
    }
}
