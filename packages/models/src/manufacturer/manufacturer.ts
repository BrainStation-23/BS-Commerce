import { ManufacturerSeo } from './manufacturerSeo';

export interface Manufacturer {
  id?: string;
  name: string;
  description?: string;
  picture?: string;
  isPublished?: boolean;
  displayOrder?: number;
  seo?: ManufacturerSeo;
}
