import { BrandInfo } from '@bs-commerce/models';
export declare class InfoDto implements BrandInfo {
    name: string;
    description?: string;
    allowToSelectPageSize?: boolean;
    published?: boolean;
    displayOrder?: number;
    pageSizeOptions?: number[];
}
