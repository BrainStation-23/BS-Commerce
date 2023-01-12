import { Category, RequestCategory, responseCategory } from '../../../entity/category';
export declare abstract class ICategoryDatabase {
    abstract getCategory: (query: Record<string, any>) => Promise<Category | null>;
    abstract getCategoryList: () => Promise<responseCategory[] | null>;
    abstract createCategory: (category: RequestCategory) => Promise<Category | null>;
}
