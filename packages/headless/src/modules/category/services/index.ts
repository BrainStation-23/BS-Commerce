import { HttpStatus, Injectable } from "@nestjs/common";
import { addCategoryErrorMessage, addCategoryResponse, getCategoryBySlugErrorMessage, getCategoryBySlugResponse, getCategoryErrorMessage, getCategoryListErrorMessage, getCategoryListResponse, getCategoryResponse } from "models";
import { RequestCategory } from "src/entity/category";
import { Helper } from "src/helper/helper.interface";
import { CategoryRepository } from "../repositories";

@Injectable()
export class CategoryService {
  constructor(private categoryRepo: CategoryRepository, private helper: Helper) { }

  async addCategory(category: RequestCategory): Promise<addCategoryResponse> {
    const newCategory = await this.categoryRepo.addCategory(category);
    if (!newCategory) {
      return this.helper.serviceResponse.errorResponse(
        addCategoryErrorMessage.CAN_NOT_ADD_CATEGORY,
        null,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return this.helper.serviceResponse.successResponse(newCategory, HttpStatus.OK);
  }

  async getCategory(categoryId: string): Promise<getCategoryResponse> {
    const category = await this.categoryRepo.getCategory(categoryId);
    if (!category) {
      return this.helper.serviceResponse.errorResponse(
        getCategoryErrorMessage.CAN_NOT_GET_CATEGORY_BY_ID,
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.helper.serviceResponse.successResponse(category, HttpStatus.OK,);
  }

  async getCategoryList(): Promise<getCategoryListResponse> {
    const category = await this.categoryRepo.getCategoryList();
    if (!category) {
      return this.helper.serviceResponse.errorResponse(
        getCategoryListErrorMessage.CAN_NOT_GET_CATEGORY_LIST,
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.helper.serviceResponse.successResponse(category, HttpStatus.OK,);
  }

  async getCategoryBySlug(slug: string): Promise<getCategoryBySlugResponse> {
    const category = await this.categoryRepo.getCategoryBySlug(slug);

    if (!category) {
      return this.helper.serviceResponse.errorResponse(
        getCategoryBySlugErrorMessage.CAN_NOT_GET_CATEGORY_BY_SLUG,
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.helper.serviceResponse.successResponse(category, HttpStatus.OK,);
  }
}