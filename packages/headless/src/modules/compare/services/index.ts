import { HttpStatus, Injectable } from '@nestjs/common';
import { Compare, CompareData } from 'src/entity/compare';
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

  addItemToCompare = async (
    userId: string,
    body: CompareData,
  ): Promise<ServiceSuccessResponse | ServiceErrorResponse> => {
    const isExist = await this.compareRepository.getCompareByUserId(userId);
    let saveData: Compare = null;
    if (!isExist) {
      saveData = await this.compareRepository.createCompare(userId, body);
    } else {
      saveData = await this.compareRepository.addItemToCompare(userId, body);
    }

    if (saveData) {
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
  };
}
