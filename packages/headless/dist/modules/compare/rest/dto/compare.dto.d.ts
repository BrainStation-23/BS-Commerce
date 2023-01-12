import type { AddCompareItem, CompareData, CompareErrorResponse, CompareSuccessResponse, DescriptiveError, IProductInfo, IProductMeta, IProductDetails, ComparePublicSuccessResponse, ComparePublicErrorResponse } from '@bs-commerce/models';
import { AddProductToCompareErrorEnum, DeleteCompareErrorEnum, GetCompareErrorEnum } from '@bs-commerce/models';
export declare class AddToCompareDto implements AddCompareItem {
    productId: string;
}
export declare class ProductInfo implements IProductInfo {
    name: string;
    price: number;
    shortDescription: string;
    oldPrice: number;
    fullDescription: string;
}
export declare class ProductMeta implements IProductMeta {
    friendlyPageName?: string;
}
export declare class ProductDetails implements IProductDetails {
    info: ProductInfo;
    meta: ProductMeta;
    photos: string[];
}
export declare class CompareItemsDetails {
    productId: string;
    productDetails?: ProductDetails;
}
export declare class CompareDataDto implements CompareData {
    id: string;
    userId: string;
    items: CompareItemsDetails[];
}
export declare class CompareSuccessResponseDto implements CompareSuccessResponse {
    code: number;
    data: CompareDataDto;
}
export declare class ComparePublicSuccessResponseDto implements ComparePublicSuccessResponse {
    code: number;
    data: CompareItemsDetails[];
}
export declare class CompareErrorResponseDto implements CompareErrorResponse {
    code?: number;
    error: AddProductToCompareErrorEnum | GetCompareErrorEnum | DeleteCompareErrorEnum;
    errors: DescriptiveError;
}
export declare class ComparePublicErrorResponseDto implements ComparePublicErrorResponse {
    code?: number;
    error: AddProductToCompareErrorEnum;
    errors: DescriptiveError;
}
export declare type CompareResponse = CompareSuccessResponseDto | CompareErrorResponseDto;
export declare type ComparePublicResponse = ComparePublicSuccessResponseDto | ComparePublicErrorResponseDto;
