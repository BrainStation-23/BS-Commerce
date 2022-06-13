import { HttpStatus, Injectable } from "@nestjs/common";
import { Category, RequestCategory } from "src/entity/category";
import { Helper } from "src/helper/helper.interface";
import { ServiceSuccessResponse, ServiceErrorResponse } from "src/helper/serviceResponse/service.response.interface";
import { CategoryRepository } from "../repositories";

@Injectable()
export class CategoryService {
  constructor(private categoryRepo: CategoryRepository, private helper: Helper) { }

  async addCategory(category: RequestCategory): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const newCategory = await this.categoryRepo.addCategory(category);
    if (!newCategory) {
      return this.helper.serviceResponse.errorResponse(
        'Can not add Category',
        null,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return this.helper.serviceResponse.successResponse(newCategory, HttpStatus.OK,);
  }
}