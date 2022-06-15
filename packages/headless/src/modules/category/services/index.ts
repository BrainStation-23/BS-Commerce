import { HttpStatus, Injectable } from "@nestjs/common";
import { getCategoryErrorMessage, getCategoryListErrorMessage, getCategoryListResponse, getCategoryResponse } from "models";
import { Helper } from "src/helper/helper.interface";
import { CategoryRepository } from "../repositories";

@Injectable()
export class CategoryService {
  constructor(private categoryRepo: CategoryRepository, private helper: Helper) { }
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

  async getCategoryList(): Promise <getCategoryListResponse > {
    const category = await this.categoryRepo.getCategoryList();
    if(!category) {
      return this.helper.serviceResponse.errorResponse(
        getCategoryListErrorMessage.CAN_NOT_GET_CATEGORY_LIST,
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.helper.serviceResponse.successResponse(category, HttpStatus.OK,);
  }
}