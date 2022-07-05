export interface CustomerProductInfo {
    name: string,
    price: number,
    oldPrice: number,
    cost: number,
}

export interface CustomerProductMeta {
    keywords?: string[],
    title?: string,
    description?: string,
    friendlyPageName: string
}

export interface CustomerProductPhoto {
    url?: string,
    alt?: string,
    displayOrder?: number
}

export interface CustomerProductCategory {
    id: string,
    displayOrder?: number
}

export interface CustomerProduct {
    id?: string,
    info: CustomerProductInfo;
    meta: CustomerProductMeta;
    tags?: string[];
    photos?: CustomerProductPhoto[];
    brands?: string[],
    categories: CustomerProductCategory[];
}

export interface CustomerSingleProductInfo {
    name: string,
    shortDescription?: string,
    fullDescription?: string,
    sku: string,
    price: number,
    oldPrice: number,
    cost: number,
    publishDate?: Date
}

export interface CustomerSingleProductMeta {
    keywords?: string[],
    title?: string,
    description?: string,
    friendlyPageName: string
}

export interface CustomerSingleProductPhoto {
    url?: string,
    id?: string,
    title?: string,
    alt?: string,
    displayOrder?: number
}

export interface CustomerSingleProductCategory {
    id: string,
    displayOrder?: number
}

export interface CustomerSingleProduct {
    id: string,
    info: CustomerSingleProductInfo;
    meta: CustomerSingleProductMeta;
    tags?: string[];
    photos?: CustomerSingleProductPhoto[];
    brands?: string[],
    categories: CustomerSingleProductCategory[];
}