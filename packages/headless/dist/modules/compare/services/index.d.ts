import { ComparePublicResponse, CompareResponse } from '@bs-commerce/models';
import { Helper } from '../../../helper/helper.interface';
import { CompareRepository } from '../repositories';
export declare class CompareService {
    private compareRepository;
    private helper;
    constructor(compareRepository: CompareRepository, helper: Helper);
    addItemToCompare(userId: string, productId: string): Promise<CompareResponse>;
    getProductDetails(productId: string): Promise<ComparePublicResponse>;
    getCompareByUserId(userId: string): Promise<CompareResponse>;
    getCompareById(userId: string, compareId: string): Promise<CompareResponse>;
    deleteCompareById(userId: string, compareId: string): Promise<CompareResponse>;
    deleteItemByProductId(userId: string, productId: string): Promise<CompareResponse>;
    deleteAllItemByUserId(userId: string): Promise<CompareResponse>;
}
