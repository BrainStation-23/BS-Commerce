import { ManufacturerSeoDto } from './manufacturerSeo.dto';
import type { Manufacturer } from '@bs-commerce/models';
export declare class ManufacturerDto implements Manufacturer {
    id?: string;
    name: string;
    description?: string;
    picture?: string;
    isPublished?: boolean;
    displayOrder?: number;
    seo?: ManufacturerSeoDto;
}
