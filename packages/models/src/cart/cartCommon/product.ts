export interface CartProduct {
    id: string;
    info: Info;
    photos: Photo[];
}

interface Info {
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

interface Photo {
    url?: string;
    title?: string;
    alt?: string;
    displayOrder?: number;
}