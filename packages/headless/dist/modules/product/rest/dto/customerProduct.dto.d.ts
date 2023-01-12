import { CustomerProductInfo, CustomerProductMeta, CustomerProductPhoto, CustomerProductCategory, CustomerProduct, CustomerProductManufacturer } from '@bs-commerce/models';
export declare class CustomerProductInfoDto implements CustomerProductInfo {
    name: string;
    shortDescription?: string;
    fullDescription?: string;
    sku: string;
    price: number;
    oldPrice: number;
    cost: number;
    publishDate?: Date;
}
export declare class CustomerProductMetaDto implements CustomerProductMeta {
    keywords?: string[];
    title?: string;
    description?: string;
    friendlyPageName: string;
}
export declare class CustomerProductPhotoDto implements CustomerProductPhoto {
    url?: string;
    id?: string;
    title?: string;
    alt?: string;
    displayOrder?: number;
}
export declare class CustomerProductManufacturerDto implements CustomerProductManufacturer {
    name: string;
    id: string;
}
export declare class CustomerProductCategoryDto implements CustomerProductCategory {
    id: string;
    name: string;
    displayOrder?: number;
}
export declare class CustomerProductDto implements CustomerProduct {
    id: string;
    info: CustomerProductInfoDto;
    meta: CustomerProductMetaDto;
    tags?: string[];
    photos?: CustomerProductPhotoDto[];
    brands?: string[];
    manufacturer: CustomerProductManufacturerDto;
    categories: CustomerProductCategoryDto[];
}
