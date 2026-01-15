// Manufacturer Types

export interface ManufacturerSEO {
  metaKeyword: string;
  metaDescription: string;
  metaTitle: string;
  SEFN: string;
}

export interface Manufacturer {
  id: string;
  name: string;
  description: string;
  picture: string;
  isPublished: boolean;
  displayOrder: number;
  seo: ManufacturerSEO;
  createdAt?: string;
  updatedAt?: string;
}

export interface ManufacturerListResponse {
  data: {
    manufacturers: Manufacturer[];
    total?: number;
    message?: string;
  };
}

export interface ManufacturerListParams {
  limit?: number;
}

export interface CreateManufacturerPayload {
  name: string;
  description?: string;
  picture?: string;
  isPublished?: boolean;
  displayOrder?: number;
  seo?: {
    metaKeyword?: string;
    metaDescription?: string;
    metaTitle?: string;
    SEFN?: string;
  };
}

export type UpdateManufacturerPayload = CreateManufacturerPayload;
