import { getCategoryListAncestor, NestedCategoryList, getCategoryListErrorMessage, getCategoryListErrorResponse, getCategoryListSuccessResponse } from '@bs-commerce/models';
import { PhotoDto } from './category.dto';
export declare class AncestorDto implements getCategoryListAncestor {
    name: string;
    slug: string;
    level: number;
}
export declare class subCategoryListDto {
    id: string;
    name: string;
    photo: PhotoDto;
    published: boolean;
    displayOrder: number;
    slug: string;
    ancestors: AncestorDto[];
    subCategories?: any[];
}
export declare class NestedCategoryListDto implements NestedCategoryList {
    id: string;
    name: string;
    photo: PhotoDto;
    published: boolean;
    displayOrder: number;
    slug: string;
    ancestors: AncestorDto[];
    subCategories?: subCategoryListDto[];
}
export declare class CategoryListDto {
    categories: NestedCategoryListDto[];
}
export declare class getCategoryListSuccessResponseDto implements getCategoryListSuccessResponse {
    code: number;
    data: CategoryListDto;
}
export declare class getCategoryListErrorResponseDto implements getCategoryListErrorResponse {
    code: number;
    error: getCategoryListErrorMessage;
    errors: string[];
}
