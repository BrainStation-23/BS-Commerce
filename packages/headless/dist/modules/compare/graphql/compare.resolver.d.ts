import { CompareItems } from '../../../entity/compare';
import { User } from '../../../entity/user';
import { CompareService } from '../services';
export declare class GqlCompareResolver {
    private compareService;
    constructor(compareService: CompareService);
    getCompareByUserId(user: User): Promise<import("@bs-commerce/models").CompareResponse>;
    getCompareById(compareId: string, user: User): Promise<import("@bs-commerce/models").CompareResponse>;
    addItemToCompare(user: User, body: CompareItems): Promise<import("@bs-commerce/models").CompareResponse>;
    deleteCompareById(user: User, compareId: string): Promise<import("@bs-commerce/models").CompareResponse>;
    deleteItemByProductId(user: User, productId: string): Promise<import("@bs-commerce/models").CompareResponse>;
    deleteAllItemByUserId(user: User): Promise<import("@bs-commerce/models").CompareResponse>;
}
