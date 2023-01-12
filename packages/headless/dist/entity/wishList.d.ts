import { Product } from './product';
export declare class WishList {
    id?: string;
    userId: string;
    items: WishlistItem[];
}
export declare class WishlistItem {
    productId: string;
    quantity: number;
    product?: Product;
}
