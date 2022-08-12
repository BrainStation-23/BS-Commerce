export interface OrderProductInfo {
    name: string,
    shortDescription?: string,
    fullDescription?: string,
    sku: string,
    oldPrice: number,
    price: number,
    quantity: number,
    cost: number,
    showOnHomePage?: boolean,
    includeInTopMenu?: boolean,
    allowToSelectPageSize?: boolean,
    published?: boolean,
    displayOrder?: number,
    isFeatured?: boolean,
    publishDate?: Date
}
export interface OrderProductPhoto {
    url?: string,
    title?: string,
    alt?: string,
    displayOrder?: number
}
export interface OrderProductData {
    id: string,
    info: OrderProductInfo,
    photos?: OrderProductPhoto[]
}