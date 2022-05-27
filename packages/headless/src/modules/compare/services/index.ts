import { HttpStatus, Injectable } from '@nestjs/common';
import { Compare } from 'src/entity/compare';
import { Helper } from 'src/helper/helper.interface';
import {
  ServiceErrorResponse,
  ServiceSuccessResponse,
} from 'src/helper/serviceResponse/service.response.interface';
import { CompareRepository } from '../repositories';

@Injectable()
export class CompareService {
  constructor(
    private compareRepository: CompareRepository,
    private helper: Helper,
  ) {}

  async addItemToCompare(
    userId: string,
    productId: string,
  ): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    if (!productId.trim()) {
      return this.helper.serviceResponse.errorResponse(
        'Invalid product id.',
        null,
        HttpStatus.BAD_REQUEST,
      );
    }

    /*
    check user compare list
    */
    const isExist = await this.compareRepository.getCompareByUserId(userId);
    let saveData: Compare = null;

    /**
     * if not exist create new else add product id into items
     */
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

    if (saveData) {
      saveData = await this.compareRepository.getCompareByUserId(userId);
      return this.helper.serviceResponse.successResponse(
        saveData,
        HttpStatus.OK,
      );
    } else {
      return this.helper.serviceResponse.errorResponse(
        'Can not add item for comparing.',
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async getCompareByUserId(
    userId: string,
  ): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const isExist = await this.compareRepository.getCompareByUserId(userId);
    if (isExist) {
      return this.helper.serviceResponse.successResponse(
        isExist,
        HttpStatus.OK,
      );
    } else {
      return this.helper.serviceResponse.errorResponse(
        'Comparison list is empty.',
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async getCompareById(
    userId: string,
    compareId: string,
  ): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const isExist = await this.compareRepository.getCompareById(
      userId,
      compareId,
    );
    if (isExist) {
      return this.helper.serviceResponse.successResponse(
        isExist,
        HttpStatus.OK,
      );
    } else {
      return this.helper.serviceResponse.errorResponse(
        'Comparison not found.',
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async deleteCompareById(
    userId: string,
    compareId: string,
  ): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const isExist = await this.compareRepository.deleteCompareById(
      userId,
      compareId,
    );
    if (isExist) {
      return this.helper.serviceResponse.successResponse(
        { success: true },
        HttpStatus.OK,
      );
    } else {
      return this.helper.serviceResponse.errorResponse(
        'Comparison can not be deleted.',
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async deleteItemByProductId(
    userId: string,
    productId: string,
  ): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const isExist = await this.compareRepository.deleteItemByProductId(
      userId,
      productId,
    );
    if (isExist) {
      return this.helper.serviceResponse.successResponse(
        isExist,
        HttpStatus.OK,
      );
    } else {
      return this.helper.serviceResponse.errorResponse(
        'Item can not be deleted.',
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async deleteAllItemByUserId(
    userId: string,
  ): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const isExist = await this.compareRepository.deleteAllItemByUserId(userId);
    if (isExist) {
      return this.helper.serviceResponse.successResponse(
        isExist,
        HttpStatus.OK,
      );
    } else {
      return this.helper.serviceResponse.errorResponse(
        'Item can not be deleted.',
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
