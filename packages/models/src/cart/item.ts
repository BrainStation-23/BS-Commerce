import { CartProduct } from "./product";

export interface Item {
    productId: string;
    quantity: number;
}
export interface ResItem {
        product?: CartProduct;
        productId: string;
        quantity: number;
}