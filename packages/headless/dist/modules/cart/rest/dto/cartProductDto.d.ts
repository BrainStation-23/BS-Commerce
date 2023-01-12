import { CartProduct, CartProductInfo, CartProductPhoto, CartProductMeta } from '@bs-commerce/models';
export declare class CartProductInfoDto implements CartProductInfo {
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
export declare class CartProductPhotoDto implements CartProductPhoto {
    url?: string;
    title?: string;
    alt?: string;
    displayOrder?: number;
}
export declare class CartProductMetaDto implements CartProductMeta {
    friendlyPageName: string;
}
export declare class CartProductDto implements CartProduct {
    id: string;
    info: CartProductInfoDto;
    meta: CartProductMetaDto;
    photos: CartProductPhotoDto[];
}
