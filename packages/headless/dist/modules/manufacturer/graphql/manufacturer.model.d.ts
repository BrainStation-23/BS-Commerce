import { Manufacturer } from '@bs-commerce/models';
declare class ManufacturerSEO {
    metaKeyword: string;
    metaDescription: string;
    metaTitle: string;
    SEFN: string;
}
export declare class ManufacturerSchemaGql implements Manufacturer {
    id: string;
    name: string;
    description: string;
    picture: string;
    isPublished: boolean;
    displayOrder: number;
    seo: ManufacturerSEO;
}
export declare class ManufacturersQuery {
    skip?: number;
    limit?: number;
}
declare class ManufacturerSEOInput {
    metaKeyword?: string;
    metaDescription?: string;
    metaTitle?: string;
    SEFN?: string;
}
export declare class ManufacturerInput {
    name: string;
    description?: string;
    picture?: string;
    isPublished?: boolean;
    displayOrder?: number;
    seo?: ManufacturerSEOInput;
}
declare class ManufacturerWithMessage {
    manufacturer: ManufacturerSchemaGql;
    message: string;
}
export declare class ManufacturerResponse {
    error?: string;
    code: number;
    data?: ManufacturerWithMessage;
}
declare class ManufacturerArrayResponse {
    manufacturers: [ManufacturerSchemaGql];
    total: number;
    message: string;
}
export declare class AllManufacturersResponse {
    error?: string;
    code: number;
    data?: ManufacturerArrayResponse;
}
export {};
