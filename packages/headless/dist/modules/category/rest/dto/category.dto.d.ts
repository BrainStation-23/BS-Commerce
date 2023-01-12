import { Ancestor, Category, CategoryMeta, Photo } from '@bs-commerce/models';
export declare class AncestorDto implements Ancestor {
    name: string;
    slug: string;
    level: number;
}
export declare class CategoryMetaDto implements CategoryMeta {
    keywords?: string[];
    description?: string;
    title?: string;
    SEFN?: string;
}
export declare class PhotoDto implements Photo {
    url: string;
    alt: string;
}
export declare class CategoryDto implements Category {
    id: string;
    name: string;
    slug: string;
    description: string;
    photo: PhotoDto;
    showOnHomePage: boolean;
    includeInTopMenu: boolean;
    allowToSelectPageSize: boolean;
    published: boolean;
    displayOrder: number;
    rootPath: string;
    ancestors: AncestorDto[];
    meta: CategoryMetaDto;
}
