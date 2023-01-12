export declare class Manufacturer {
    id?: string;
    name: string;
    description?: string;
    picture?: string;
    isPublished?: boolean;
    displayOrder?: number;
    seo?: SEO;
}
export declare class SEO {
    metaKeyword?: string;
    metaDescription?: string;
    metaTitle?: string;
    SEFN?: string;
}
export declare class ManufacturersQuery {
    skip?: number;
    limit?: number;
}
