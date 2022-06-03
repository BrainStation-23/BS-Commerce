import { CartProduct } from "./product";

export interface Item {
    product?: CartProduct;
    productId: string;
    quantity: number;
}