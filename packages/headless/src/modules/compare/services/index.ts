import { HttpStatus, Injectable } from '@nestjs/common';
import { AddProductToCompareErrorEnum, DeleteCompareErrorEnum, GetCompareErrorEnum } from 'models';
import { Compare } from 'src/entity/compare';
import { Helper } from 'src/helper/helper.interface';
import { CompareResponse } from '../dto/compare.dto';
import { CompareRepository } from '../repositories';
@Injectable()
export class CompareService {
  constructor(private compareRepository: CompareRepository, private helper: Helper) {}

  async addItemToCompare(userId: string, productId: string): Promise<CompareResponse> {
    console.log(userId);
    const isExist = await this.compareRepository.getCompareByUserId(userId);
    let saveData: Compare = null;
    if (!isExist) {
      saveData = await this.compareRepository.createCompare(userId, {
        productId,
      });
    } else {
      saveData = await this.compareRepository.addItemToCompare(userId, {
        productId,
      });
    }

    if (saveData) {
      return {
        data: saveData,
        code: HttpStatus.OK,
      };
    } else {
      return this.helper.serviceResponse.errorResponse(
        AddProductToCompareErrorEnum.CAN_NOT_ADD_ITEM_FOR_COMPARING,
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async getCompareByUserId(userId: string): Promise<CompareResponse> {
    const data = await this.compareRepository.getCompareByUserId(userId);
    if (data) {
      return { data, code: HttpStatus.OK };
    } else {
      return this.helper.serviceResponse.errorResponse(
        GetCompareErrorEnum.COMPARISON_LIST_IS_EMPTY,
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async getCompareById(userId: string, compareId: string): Promise<CompareResponse> {
    const data = await this.compareRepository.getCompareById(userId, compareId);
    if (data) {
      return { data, code: HttpStatus.OK };
    } else {
      return this.helper.serviceResponse.errorResponse(
        GetCompareErrorEnum.COMPARISON_NOT_FOUND,
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async deleteCompareById(userId: string, compareId: string): Promise<CompareResponse> {
    const data = await this.compareRepository.deleteCompareById(userId, compareId);
    if (data) {
      return { data, code: HttpStatus.OK };
    } else {
      return this.helper.serviceResponse.errorResponse(
        DeleteCompareErrorEnum.COMPARISON_CAN_NOT_BE_DELETED_OR_NOT_EXIST,
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async deleteItemByProductId(userId: string, productId: string): Promise<CompareResponse> {
    const isExist = await this.compareRepository.getProduct(productId);
    if(!isExist) return this.helper.serviceResponse.errorResponse(
      DeleteCompareErrorEnum.INVALID_ID,
      null,
      HttpStatus.BAD_REQUEST,
    );

    const data = await this.compareRepository.deleteItemByProductId(userId, productId);
    if (data) {
      return { data, code: HttpStatus.OK };
    } else {
      return this.helper.serviceResponse.errorResponse(
        DeleteCompareErrorEnum.ITEM_CAN_NOT_BE_DELETED,
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async deleteAllItemByUserId(userId: string): Promise<CompareResponse> {
    const data = await this.compareRepository.deleteAllItemByUserId(userId);
    if (data) {
      return { data, code: HttpStatus.OK };
    } else {
      return this.helper.serviceResponse.errorResponse(
        DeleteCompareErrorEnum.ITEM_CAN_NOT_BE_DELETED,
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
