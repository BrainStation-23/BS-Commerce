import { WishlistItem, WishlistProduct, WishlistProductInfo, WishlistProductPhoto, addToWishlistRequest, WishlistProductMeta } from '@bs-commerce/models';
export declare class WishlistProductPhotoType implements WishlistProductPhoto {
    url?: string;
    title?: string;
    alt?: string;
}
export declare class WishlistProductInfoType implements WishlistProductInfo {
    name: string;
    shortDescription: string;
    fullDescription: string;
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
export declare class WishlistProductMetaType implements WishlistProductMeta {
    friendlyPageName: string;
}
export declare class WishlistProductType implements WishlistProduct {
    id: string;
    info: WishlistProductInfoType;
    meta: WishlistProductMetaType;
    photos?: WishlistProductPhotoType[];
}
export declare class WishlistItemType implements WishlistItem {
    productId: string;
    product?: WishlistProductType;
    quantity: number;
}
export declare class WishlistItemInput implements addToWishlistRequest {
    productId: string;
    quantity: number;
}
export declare class WishList {
    id: string;
    userId: string;
    items?: WishlistItemType[];
}
export declare class WishListResponse {
    code: number;
    data: WishList;
}
export declare class WishListResponseMessage {
    message: string;
}
export declare class WishListResponseWithMessage {
    code: number;
    data: WishListResponseMessage;
}
