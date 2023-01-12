import type { AddCompareItem, CompareData, ICompareItems } from '@bs-commerce/models';
import { IServiceResponse } from '../../../../utils/response/service.response.interface';
export declare class AddToCompareDto implements AddCompareItem {
    productId: string;
}
export declare class CompareItemsDto implements ICompareItems {
    productId: string;
}
export declare class CompareDataDto implements CompareData {
    id: string;
    userId: string;
    items: ICompareItems[];
}
export declare type CompareResponse<T> = IServiceResponse<T>;
