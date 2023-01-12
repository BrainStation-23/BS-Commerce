import { CategoryService } from '../services';
import { createCategoryRequestSchema, getCategoryBySlugRequestSchema, getCategoryRequestSchema } from './category.model';
import { Helper } from '../../../helper/helper.interface';
export declare class CategoryResolver {
    private categoryService;
    private helper;
    constructor(categoryService: CategoryService, helper: Helper);
    getCategory(data: getCategoryRequestSchema): Promise<import("../../../helper/serviceResponse/service.response.interface").ServiceSuccessResponse | import("../../../helper/serviceResponse/service.response.interface").ServiceErrorResponse | import("@nestjs/common").HttpException>;
    getCategoryList(): Promise<import("../../../helper/serviceResponse/service.response.interface").ServiceSuccessResponse | import("../../../helper/serviceResponse/service.response.interface").ServiceErrorResponse | import("@nestjs/common").HttpException>;
    getCategoryBySlug(data: getCategoryBySlugRequestSchema): Promise<import("../../../helper/serviceResponse/service.response.interface").ServiceSuccessResponse | import("../../../helper/serviceResponse/service.response.interface").ServiceErrorResponse | import("@nestjs/common").HttpException>;
    createCategory(category: createCategoryRequestSchema): Promise<import("../../../helper/serviceResponse/service.response.interface").ServiceSuccessResponse | import("../../../helper/serviceResponse/service.response.interface").ServiceErrorResponse | import("@nestjs/common").HttpException>;
}
