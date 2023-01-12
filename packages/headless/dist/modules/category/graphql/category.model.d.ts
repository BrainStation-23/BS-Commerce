import { Ancestor, Category, CategoryMeta, createCategoryRequest, getCategoryBySlugRequest, getCategoryRequest, NestedCategoryList, Photo } from '@bs-commerce/models';
export declare class PhotoRequestSchema implements Photo {
    url: string;
    alt: string;
}
export declare class PhotoSchema implements Photo {
    url: string;
    alt: string;
}
export declare class AncestorSchema implements Ancestor {
    name: string;
    slug: string;
    level: number;
}
export declare class CategoryMetaSchema implements CategoryMeta {
    keywords: string[];
    description: string;
    title: string;
    SEFN: string;
}
export declare class CategoryMetaRequestSchema implements CategoryMeta {
    keywords?: string[];
    description?: string;
    title?: string;
    SEFN?: string;
}
export declare class CategorySchema implements Category {
    id: string;
    name: string;
    slug: string;
    description: string;
    photo: PhotoSchema;
    showOnHomePage: boolean;
    includeInTopMenu: boolean;
    allowToSelectPageSize: boolean;
    published: boolean;
    displayOrder: number;
    rootPath: string;
    ancestors: AncestorSchema[];
    meta: CategoryMetaSchema;
}
export declare class createCategoryRequestSchema implements createCategoryRequest {
    name: string;
    parentSlug?: string;
    photo?: PhotoRequestSchema;
    description?: string;
    showOnHomePage?: boolean;
    includeInTopMenu?: boolean;
    allowToSelectPageSize?: boolean;
    published?: boolean;
    displayOrder?: number;
    meta?: CategoryMetaRequestSchema;
}
export declare class getCategoryRequestSchema implements getCategoryRequest {
    categoryId: string;
}
export declare class getCategoryBySlugRequestSchema implements getCategoryBySlugRequest {
    slug: string;
}
export declare class CategoryResponse {
    code: number;
    data: CategorySchema;
}
export declare class subCategoryListSchema {
    id: string;
    name: string;
    photo: PhotoSchema;
    published: boolean;
    displayOrder: number;
    slug: string;
    ancestors: AncestorSchema[];
    subCategories?: any[];
}
export declare class NestedCategoryListSchema implements NestedCategoryList {
    id: string;
    name: string;
    photo: PhotoSchema;
    published: boolean;
    displayOrder: number;
    slug: string;
    ancestors: AncestorSchema[];
    subCategories?: subCategoryListSchema[];
}
export declare class CategoryListSchema {
    categories: NestedCategoryListSchema[];
}
export declare class CategoryListResponse {
    code: number;
    data: CategoryListSchema;
}
