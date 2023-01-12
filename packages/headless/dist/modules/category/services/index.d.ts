import { createCategoryResponse, getCategoryBySlugResponse, getCategoryListResponse, getCategoryResponse } from '@bs-commerce/models';
import { RequestCategory } from '../../../entity/category';
import { Helper } from '../../../helper/helper.interface';
import { CategoryRepository } from '../repositories';
export declare class CategoryService {
    private categoryRepo;
    private helper;
    constructor(categoryRepo: CategoryRepository, helper: Helper);
    createCategory(category: RequestCategory): Promise<createCategoryResponse>;
    getCategory(categoryId: string): Promise<getCategoryResponse>;
    getCategoryList(): Promise<getCategoryListResponse>;
    getCategoryBySlug(slug: string): Promise<getCategoryBySlugResponse>;
}
