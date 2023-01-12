import { Category, RequestCategory, responseCategory } from '../../../entity/category';
import { ICategoryDatabase } from './category.database.interface';
export declare class CategoryRepository {
    private readonly db;
    constructor(db: ICategoryDatabase);
    getCategory(query: Record<string, any>): Promise<Category | null>;
    getCategoryList(): Promise<responseCategory[] | null>;
    createCategory(category: RequestCategory): Promise<Category | null>;
}
