import { ManufacturerSeo } from "./manufacturerSeo";

export interface Manufacturer {
    name: string;
    description?: string;
    picture?: string;
    isPublished?: boolean;
    displayOrder?: number;
    seo?: ManufacturerSeo
}