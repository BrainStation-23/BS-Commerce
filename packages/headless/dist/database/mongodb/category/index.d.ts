import { Category, RequestCategory, responseCategory } from '../../../entity/category';
import { ICategoryDatabase } from '../../../modules/category/repositories/category.database.interface';
export declare class CategoryDatabase implements ICategoryDatabase {
    getSlug(name: string): string;
    createCategory(requestCategory: RequestCategory): Promise<Category | null>;
    generateCategoryTree(listItems: any): Promise<{
        categories: any[];
    }>;
    getCategoryList(): Promise<responseCategory[] | null>;
    getCategory(query: Record<string, any>): Promise<Category | null>;
}
