export class Manufacturer {
    id?: string;
    name: string;
    description?: string;
    picture?: string;
    isPublished?: boolean;
    displayOrder?: number;
    seo?: SEO
}

export class SEO {
    metaKeyword?: string;
    metaDescription?: string;
    metaTitle?: string;
    SEFN?: string;
}