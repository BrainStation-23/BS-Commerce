import { Compare, CompareItems } from '../../../entity/compare';
import { ICompareDatabase } from './compare.db.interface';
export declare class CompareRepository {
    private db;
    constructor(db: ICompareDatabase);
    getCompareByUserId(userId: string): Promise<Compare | null>;
    getCompareById(userId: string, compareId: string): Promise<Compare | null>;
    deleteCompareById(userId: string, compareId: string): Promise<Compare | null>;
    getProduct(productId: string): Promise<boolean>;
    deleteItemByProductId(userId: string, productId: string): Promise<Compare | null>;
    deleteAllItemByUserId(userId: string): Promise<Compare | null>;
    addItemToCompare(userId: string, productId: CompareItems): Promise<Compare | null>;
    getProductDetails(productId: string): Promise<CompareItems[] | null>;
    createCompare(userId: string, productId: CompareItems): Promise<Compare | null>;
}
