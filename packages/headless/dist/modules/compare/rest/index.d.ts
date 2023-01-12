import { Response } from 'express';
import { User } from '../../../entity/user';
import { AddToCompareDto } from './dto/compare.dto';
import { CompareService } from '../services';
export declare class CompareController {
    private compareService;
    constructor(compareService: CompareService);
    addItemToComapre(user: User, body: AddToCompareDto, res: Response): Promise<{
        data: import("@bs-commerce/models").CompareData;
    } | {
        error: import("@bs-commerce/models").AddProductToCompareErrorEnum | import("@bs-commerce/models").DeleteCompareErrorEnum | import("@bs-commerce/models").GetCompareErrorEnum;
        errors: DescriptiveError;
    }>;
    getCompareByUserId(user: User, res: Response): Promise<{
        data: import("@bs-commerce/models").CompareData;
    } | {
        error: import("@bs-commerce/models").AddProductToCompareErrorEnum | import("@bs-commerce/models").DeleteCompareErrorEnum | import("@bs-commerce/models").GetCompareErrorEnum;
        errors: DescriptiveError;
    }>;
    getCompareById(user: User, compareId: string, res: Response): Promise<{
        data: import("@bs-commerce/models").CompareData;
    } | {
        error: import("@bs-commerce/models").AddProductToCompareErrorEnum | import("@bs-commerce/models").DeleteCompareErrorEnum | import("@bs-commerce/models").GetCompareErrorEnum;
        errors: DescriptiveError;
    }>;
    deleteCompareById(user: User, compareId: string, res: Response): Promise<{
        data: import("@bs-commerce/models").CompareData;
    } | {
        error: import("@bs-commerce/models").AddProductToCompareErrorEnum | import("@bs-commerce/models").DeleteCompareErrorEnum | import("@bs-commerce/models").GetCompareErrorEnum;
        errors: DescriptiveError;
    }>;
    deleteItemByProductId(user: User, query: AddToCompareDto, res: Response): Promise<{
        data: import("@bs-commerce/models").CompareData;
    } | {
        error: import("@bs-commerce/models").AddProductToCompareErrorEnum | import("@bs-commerce/models").DeleteCompareErrorEnum | import("@bs-commerce/models").GetCompareErrorEnum;
        errors: DescriptiveError;
    }>;
    deleteAllItemByUserId(user: User, res: Response): Promise<{
        data: import("@bs-commerce/models").CompareData;
    } | {
        error: import("@bs-commerce/models").AddProductToCompareErrorEnum | import("@bs-commerce/models").DeleteCompareErrorEnum | import("@bs-commerce/models").GetCompareErrorEnum;
        errors: DescriptiveError;
    }>;
    getProduct(body: AddToCompareDto, res: Response): Promise<{
        data: import("@bs-commerce/models").ICompareItems[];
    } | {
        error: AddProductToCompareErrorEnum;
        errors: DescriptiveError;
    }>;
}
