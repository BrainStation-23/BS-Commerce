export declare class Cart {
    id?: string;
    userId: string;
    items: Item[];
}
export declare class Item {
    product?: CartProduct;
    productId: string;
    quantity: number;
}
export declare class UpdateItem {
    productId?: string;
    quantity?: number;
}
declare class CartProduct {
    id: string;
    info: Info;
    photos: Photo[];
}
declare class Info {
    name: string;
    shortDescription?: string;
    fullDescription?: string;
    sku: string;
    price: number;
    oldPrice: number;
    cost: number;
    showOnHomePage?: boolean;
    includeInTopMenu?: boolean;
    allowToSelectPageSize?: boolean;
    published?: boolean;
    displayOrder?: number;
    isFeatured?: boolean;
    publishDate?: Date;
}
declare class Photo {
    url?: string;
    title?: string;
    alt?: string;
    displayOrder?: number;
}
export {};
