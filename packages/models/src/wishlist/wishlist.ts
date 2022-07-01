export interface WishlistProductInfo {
    name: string;
    shortDescription: string;
    fullDescription: string;
    sku: string;
    price: number;
    oldPrice: number;
    cost: number;
}

export interface WishlistProductPhoto {
    url?: string;
    title?: string;
    alt?: string;
}

export interface WishlistProduct {
    id: string;
    info: WishlistProductInfo;
    photos?: WishlistProductPhoto[];
}

export interface WishlistItem {
    product?: WishlistProduct;
    productId: string;
    quantity: number;
}

export interface Wishlist {
    id: string;
    userId: string;
    items?: WishlistItem[];
}