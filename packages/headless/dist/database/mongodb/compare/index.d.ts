import { Compare, CompareItems } from '../../../entity/compare';
import { ICompareDatabase } from '../../../modules/compare/repositories/compare.db.interface';
export declare class CompareDatabase implements ICompareDatabase {
    getCompareListByUserId(userId: string): Promise<Compare | null>;
    getCompareListById(userId: string, compareId: string): Promise<Compare | null>;
    addItemToCompare(userId: string, productId: CompareItems): Promise<Compare | null>;
    getProductDetails(productId: string): Promise<CompareItems[] | null>;
    createCompare(userId: string, productId: CompareItems): Promise<Compare | null>;
    deleteCompareById(userId: string, compareId: string): Promise<Compare>;
    getProduct(productId: string): Promise<boolean>;
    deleteItemByProductId(userId: string, productId: string): Promise<Compare | null>;
    deleteAllItemByUserId(userId: string): Promise<Compare>;
    private mappedProductDetails;
}
