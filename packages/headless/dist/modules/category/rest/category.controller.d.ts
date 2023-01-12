import { CategoryService } from '../services';
import { Response } from 'express';
import { getCategoryRequestDto } from './dto/getCategory.dto';
import { getCategoryBySlugRequestDto } from './dto/getCategoryBySlug.dto';
import { createCategoryRequestDto } from './dto/createCategory.dto';
export declare class CategoryController {
    private categoryService;
    constructor(categoryService: CategoryService);
    createCategory(category: createCategoryRequestDto, res: Response): Promise<{
        data: import("@bs-commerce/models").Category;
    } | {
        error: import("@bs-commerce/models").createCategoryErrorMessage;
        errors: DescriptiveError;
    }>;
    getCategory(data: getCategoryRequestDto, res: Response): Promise<{
        data: import("@bs-commerce/models").Category;
    } | {
        error: import("@bs-commerce/models").getCategoryErrorMessage;
        errors: DescriptiveError;
    }>;
    getCategoryList(res: Response): Promise<{
        data: import("@bs-commerce/models").getCategoryList;
    } | {
        error: import("@bs-commerce/models").getCategoryListErrorMessage;
        errors: DescriptiveError;
    }>;
    getCategoryBySlug(data: getCategoryBySlugRequestDto, res: Response): Promise<{
        data: import("@bs-commerce/models").Category;
    } | {
        error: import("@bs-commerce/models").getCategoryBySlugErrorMessage;
        errors: DescriptiveError;
    }>;
}
