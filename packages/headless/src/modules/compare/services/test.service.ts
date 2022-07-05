import { Injectable } from '@nestjs/common';
import { GetCompareErrorEnum } from 'models';
import { errorResponse, successResponse } from 'src/utils/response';
import { CompareDataDto, CompareResponse } from '../dto/test.dto';
import { CompareRepository } from '../repositories';
@Injectable()
export class CompareTestService {
  constructor(private compareRepository: CompareRepository) {}

  async getCompareByUserId(userId: string): Promise<CompareResponse<CompareDataDto>> {
    const data = (await this.compareRepository.getCompareByUserId(userId)) as CompareDataDto;
    if (data) {
      const result = successResponse(CompareDataDto, data);
      return result;
    } else {
      return errorResponse(GetCompareErrorEnum.COMPARISON_LIST_IS_EMPTY);
    }
  }

  async getCompare(userId: string): Promise<CompareResponse<boolean>> {
    const data = (await this.compareRepository.getCompareByUserId(userId)) as CompareDataDto;
    if (data) {
      // const result = successResponse(true);
      // return result;
      return null;
    } else {
      const err = errorResponse(GetCompareErrorEnum.COMPARISON_LIST_IS_EMPTY);
      return err;
    }
  }
}
