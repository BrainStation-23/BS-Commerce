// Brand Types

export interface Brand {
  id: string;
  info: {
    name: string;
    description: string;
    allowToSelectPageSize: boolean;
    published: boolean;
    displayOrder: number;
    pageSizeOptions: number[];
  };
  meta: {
    keywords: string;
    description: string;
    title: string;
    SEFN: string;
  };
}

export interface BrandListResponse {
  code: number;
  data: {
    brands: Brand[];
    total?: number;
    page?: number;
    limit?: number;
  };
}

export interface BrandListParams {
  limit?: number;
}

export interface CreateBrandPayload {
  info: {
    name: string;
    description: string;
    allowToSelectPageSize: boolean;
    published: boolean;
    displayOrder: number;
    pageSizeOptions: number[];
  };
  meta: {
    keywords: string;
    description: string;
    title: string;
    SEFN: string;
  };
}

export type UpdateBrandPayload = CreateBrandPayload;
