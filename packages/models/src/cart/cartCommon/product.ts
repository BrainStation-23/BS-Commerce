export interface CartProduct {
    id?: string;
    info: CartProductInfo;
    meta: CartProductMeta;
    photos?: CartProductPhoto[];
}

export interface CartProductInfo {
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

export interface CartProductPhoto {
    url?: string;
    title?: string;
    alt?: string;
    displayOrder?: number;
}

export interface CartProductMeta {
    friendlyPageName: string
}