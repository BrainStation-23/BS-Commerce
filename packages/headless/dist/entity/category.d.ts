export declare class Photo {
    url: string;
    alt: string;
}
export declare class Category {
    id: string;
    name: string;
    slug: string;
    description: string;
    photo: Photo;
    showOnHomePage: boolean;
    includeInTopMenu: boolean;
    allowToSelectPageSize: boolean;
    published: boolean;
    displayOrder: number;
    rootPath: string;
    ancestors: Ancestor[];
    meta: CategoryMeta;
}
export declare class Ancestor {
    name: string;
    slug: string;
    level: number;
}
export declare class CategoryMeta {
    keywords?: string[];
    description?: string;
    title?: string;
    SEFN?: string;
}
export declare class RequestCategory {
    name: string;
    parentSlug?: string;
    description?: string;
    showOnHomePage?: boolean;
    includeInTopMenu?: boolean;
    allowToSelectPageSize?: boolean;
    published?: boolean;
    displayOrder?: number;
    meta?: CategoryMeta;
}
export declare class responseCategory {
    slug: string;
    ancestors: Ancestor[];
}
