import { Wishlist, WishlistItem, WishlistProduct, WishlistProductInfo, WishlistProductPhoto, WishlistProductMeta } from '@bs-commerce/models';
export declare class WishlistProductInfoDto implements WishlistProductInfo {
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
export declare class WishlistProductPhotoDto implements WishlistProductPhoto {
    url?: string;
    title?: string;
    alt?: string;
}
export declare class WishlistProductMetaDto implements WishlistProductMeta {
    friendlyPageName: string;
}
export declare class WishlistProductDto implements WishlistProduct {
    id: string;
    info: WishlistProductInfoDto;
    meta: WishlistProductMetaDto;
    photos: WishlistProductPhotoDto[];
}
export declare class WishlistItemDto implements WishlistItem {
    product?: WishlistProductDto;
    productId: string;
    quantity: number;
}
export declare class WishlistDto implements Wishlist {
    id: string;
    userId: string;
    items?: WishlistItemDto[];
}
