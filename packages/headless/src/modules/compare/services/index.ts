import { HttpStatus, Injectable } from '@nestjs/common';
import { Compare } from 'src/entity/compare';
import { errorResponse, successResponse } from 'src/utils/response';
import {
  IServiceErrorResponse,
  IServiceSuccessResponse,
} from 'src/utils/response/service.response.interface';
import { CompareRepository } from '../repositories';

@Injectable()
export class CompareService {
  constructor(private compareRepository: CompareRepository) {}

  async addItemToCompare(
    userId: string,
    productId: string,
  ): Promise<IServiceSuccessResponse<Compare> | IServiceErrorResponse> {
    if (!productId.trim()) {
      return errorResponse('Invalid product id.', null, HttpStatus.BAD_REQUEST);
    }
    if (!userId.trim()) {
      return errorResponse('Invalid user id.', null, HttpStatus.BAD_REQUEST);
    }

    /*
    check user compare list
    */
    const isExist = await this.compareRepository.getCompareByUserId(userId);
    let saveData: Compare = null;
    /**
     * if not exist create new else add product id into items
     */
    console.log({ isExist });
    if (!isExist) {
      saveData = await this.compareRepository.createCompare(userId, productId);
    } else {
      const find = isExist.items.find((e) => e.productId === productId);
      /**
       * if new product doesn't exists in list then add it, else keep the same
       */
      if (!find)
        saveData = await this.compareRepository.addItemToCompare(
          userId,
          productId,
        );
      else saveData = isExist;
    }

    console.log({ saveData });

    if (saveData) {
      // saveData = await this.compareRepository.getCompareByUserId(userId);
      return successResponse(saveData, HttpStatus.OK);
    } else {
      return errorResponse(
        'Can not add item for comparing.',
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async getCompareByUserId(
    userId: string,
  ): Promise<IServiceSuccessResponse<Compare> | IServiceErrorResponse> {
    const isExist = await this.compareRepository.getCompareByUserId(userId);
    if (isExist) {
      return successResponse(isExist, HttpStatus.OK);
    } else {
      return errorResponse(
        'Comparison list is empty.',
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async getCompareById(
    userId: string,
    compareId: string,
  ): Promise<IServiceSuccessResponse<Compare> | IServiceErrorResponse> {
    const isExist = await this.compareRepository.getCompareById(
      userId,
      compareId,
    );
    if (isExist) {
      return successResponse(isExist, HttpStatus.OK);
    } else {
      return errorResponse(
        'Comparison not found.',
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async deleteCompareById(
    userId: string,
    compareId: string,
  ): Promise<IServiceSuccessResponse<boolean> | IServiceErrorResponse> {
    const isExist = await this.compareRepository.deleteCompareById(
      userId,
      compareId,
    );
    if (isExist) {
      return successResponse(true, HttpStatus.OK);
    } else {
      return errorResponse(
        'Comparison can not be deleted.',
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async deleteItemByProductId(
    userId: string,
    productId: string,
  ): Promise<IServiceSuccessResponse<Compare> | IServiceErrorResponse> {
    const isExist = await this.compareRepository.deleteItemByProductId(
      userId,
      productId,
    );
    if (isExist) {
      return successResponse(isExist, HttpStatus.OK);
    } else {
      return errorResponse(
        'Item can not be deleted.',
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async deleteAllItemByUserId(
    userId: string,
  ): Promise<IServiceSuccessResponse<Compare> | IServiceErrorResponse> {
    const isExist = await this.compareRepository.deleteAllItemByUserId(userId);
    if (isExist) {
      return successResponse(isExist, HttpStatus.OK);
    } else {
      return errorResponse(
        'Item can not be deleted.',
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
