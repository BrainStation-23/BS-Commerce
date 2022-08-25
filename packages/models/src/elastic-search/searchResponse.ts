export interface IProductSearchSchema {
    infoProductId: string;
    infoName: string;
    infoShortDescription: string;
    infoFullDescription: string;
    infoSku: string;
    infoPrice: number;
    metaKeywords: any;
    metaTitle: string;
    metaDescription: string;
    tags: string[];
    photos: string[];
    brands: any;
    manufacturer: any;
    categories: any;
  }

export interface IProductSearchResponse{
    resultsCount: number
    values: IProductSearchSchema[]
}