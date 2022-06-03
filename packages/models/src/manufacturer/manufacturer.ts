import { manufacturerSeo } from "./manufacturerSeo";

export interface Manufacturer {
    name: string;
    description?: string;
    picture?: string;
    isPublished?: boolean;
    displayOrder?: number;
    seo?: manufacturerSeo
}