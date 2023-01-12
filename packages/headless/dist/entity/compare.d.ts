export declare class IProductInfo {
    name: string;
    price: number;
    oldPrice: number;
    shortDescription: string;
    fullDescription: string;
}
export declare class IProductMeta {
    friendlyPageName?: string;
}
export declare class IProductDetails {
    info: IProductInfo;
    meta: IProductMeta;
    photos: string[];
}
export declare class CompareItems {
    productId: string;
    productDetails?: IProductDetails;
}
export declare class Compare {
    id: string;
    userId: string;
    items: CompareItems[];
}
