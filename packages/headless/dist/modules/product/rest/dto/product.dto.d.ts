import { ProductInfo, ProductMeta, ProductPhoto, ProductCategory, ProductManufacturer, Product } from '@bs-commerce/models';
export declare class ProductInfoDto implements ProductInfo {
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
}
export declare class ProductMetaDto implements ProductMeta {
    keywords?: string[];
    title?: string;
    description?: string;
}
export declare class ProductPhotoDto implements ProductPhoto {
    url?: string;
    id?: string;
    title?: string;
    alt?: string;
    displayOrder?: number;
}
export declare class ProductManufacturerDto implements ProductManufacturer {
    id: string;
    name: string;
}
export declare class ProductCategoryDto implements ProductCategory {
    name: string;
    id: string;
}
export declare class ProductDto implements Product {
    id: string;
    info: ProductInfoDto;
    meta: ProductMetaDto;
    tags?: string[];
    photos?: ProductPhotoDto[];
    brands?: string[];
    manufacturer?: ProductManufacturerDto;
    categories: ProductCategoryDto[];
}
