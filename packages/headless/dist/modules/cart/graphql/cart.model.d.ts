import { addToCartRequest, CartProduct, CartProductInfo, CartProductPhoto, deleteCartItemRequest, deleteCartRequest, deleteCartSuccessResponse, DeleteMessage, Message, ResponseItem, updateCartItemRequest, CartProductMeta } from '@bs-commerce/models';
export declare class CartProductInfoSchema implements CartProductInfo {
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
export declare class CartProductPhotoSchema implements CartProductPhoto {
    url?: string;
    title?: string;
    alt?: string;
    displayOrder?: number;
}
export declare class CartProductMetaType implements CartProductMeta {
    friendlyPageName: string;
}
export declare class CartProductSchema implements CartProduct {
    id?: string;
    info: CartProductInfoSchema;
    meta: CartProductMetaType;
    photos?: CartProductPhotoSchema[];
}
export declare class CartItem implements ResponseItem {
    product?: CartProductSchema;
    productId: string;
    quantity: number;
}
export declare class ItemInput implements addToCartRequest {
    productId: string;
    quantity: number;
}
export declare class deleteCartRequestSchema implements deleteCartRequest {
    cartId: string;
}
export declare class updateCartItemRequestSchema implements updateCartItemRequest {
    productId?: string;
    quantity?: number;
}
export declare class deleteCartItemRequestSchema implements deleteCartItemRequest {
    productId: string;
}
export declare class Cart {
    id?: string;
    userId?: string;
    items?: CartItem[];
}
export declare class CartResponse {
    code: number;
    data?: Cart;
}
export declare class DeleteMessageSchema implements DeleteMessage {
    message: Message;
}
export declare class DeleteCartResponse implements deleteCartSuccessResponse {
    code: number;
    data: DeleteMessageSchema;
}
