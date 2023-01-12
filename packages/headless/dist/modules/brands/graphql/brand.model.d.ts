import { Brand, BrandInfo, BrandMeta, CreateBrandRequest } from '@bs-commerce/models';
export declare class BrandInfoModel implements BrandInfo {
    name: string;
    description?: string;
    allowToSelectPageSize?: boolean;
    published?: boolean;
    displayOrder?: number;
    pageSizeOptions?: number[];
}
export declare class BrandMetaModel implements BrandMeta {
    keywords?: string;
    description?: string;
    title?: string;
    SEFN?: string;
}
export declare class BrandInfoInput implements BrandInfo {
    name: string;
    description?: string;
    allowToSelectPageSize?: boolean;
    published?: boolean;
    displayOrder?: number;
    pageSizeOptions?: number[];
}
export declare class BrandMetaInput implements BrandMeta {
    keywords?: string;
    description?: string;
    title?: string;
    SEFN?: string;
}
export declare class BrandModel implements Brand {
    id: string;
    info: BrandInfoModel;
    meta: BrandMetaModel;
}
export declare class BrandInput implements CreateBrandRequest {
    info: BrandInfoInput;
    meta?: BrandMetaInput;
}
export declare class SingleBrandResponse {
    error?: string;
    code: number;
    data: Brand;
}
export declare class BrandResponse {
    error?: string;
    code: number;
    data: Brand[];
}
