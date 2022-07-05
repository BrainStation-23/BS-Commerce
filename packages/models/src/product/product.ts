export interface ProductInfo {
    name: string,
    shortDescription?: string,
    fullDescription?: string,
    sku: string,
    price: number,
    oldPrice: number,
    cost: number,
    showOnHomePage?: boolean,
    includeInTopMenu?: boolean,
    allowToSelectPageSize?: boolean,
    published?: boolean,
    displayOrder?: number,
    isFeatured?: boolean,
    publishDate?: Date
}

export interface ProductMeta {
    keywords?: string[],
    title?: string,
    description?: string,
    friendlyPageName: string
}

export interface ProductPhoto {
    url?: string,
    id?: string,
    title?: string,
    alt?: string,
    displayOrder?: number
}

export interface ProductCategory {
    id: string,
    isFeatured?: boolean,
    displayOrder?: number
}

export interface Product {
    id?: string,
    info: ProductInfo;
    meta: ProductMeta;
    tags?: string[];
    photos?: ProductPhoto[];
    brands?: string[],
    categories: ProductCategory[];
}