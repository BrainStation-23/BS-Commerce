import { HttpStatus, Injectable } from '@nestjs/common';
import {
  CreateBranchErrorMessage,
  CreateBranchRequest,
  CreateBranchResponse,
  AllBranchByStoreId,
  Branch,
  GetAllBranchByStoreIdErrorMessage,
  GetAllBranchByStoreIdErrorResponse,
  GetAllBranchByStoreIdSuccessResponse,
  GetAllBranchByStoreIdResponse,
  SingleBranchResponse,
  SingleBranchErrorMessage
} from 'models';
import { Helper } from 'src/helper/helper.interface';
import { BranchRepository } from '../repositories';

@Injectable()
export class BranchService{
    constructor(private branchRepo: BranchRepository, private helper: Helper) {}

    async createBranch(branch: CreateBranchRequest): Promise<CreateBranchResponse> {
        const { store } = branch;
        const storeExists = await this.branchRepo.getStore(store);
        if(!storeExists)
          return {
            error: CreateBranchErrorMessage.INVALID_STORE_ID,
            errors: null,
            code: HttpStatus.BAD_REQUEST,
          }

        const urlExists = await this.branchRepo.getBranch({url: branch.url});
        if (urlExists)
          return {
            error: CreateBranchErrorMessage.URL_ALREADY_EXISTS,
            errors: null,
            code: HttpStatus.BAD_REQUEST
          };

        const newBranch = await this.branchRepo.createBranch(branch);
        if (!newBranch)
          return {
            error: CreateBranchErrorMessage.CANNOT_CREATE_BRANCH,
            errors: null,
            code: HttpStatus.INTERNAL_SERVER_ERROR,
          };

        return this.helper.serviceResponse.successResponse(
          newBranch,
          HttpStatus.CREATED,
        );
    }

    async getBranchByStoreId(storeId: string): Promise<GetAllBranchByStoreIdResponse>{
      const branches = await this.branchRepo.getBranchByStoreId(storeId);
      if(!branches)
        return {
          error: GetAllBranchByStoreIdErrorMessage.INVALID_STORE_ID,
          errors: null,
          code: HttpStatus.BAD_REQUEST,
        };

      return this.helper.serviceResponse.successResponse(
        branches,
        HttpStatus.OK,
      );
    }

    async getBranch(branchId: string): Promise<SingleBranchResponse>{
      const branch = await this.branchRepo.getBranch({id: branchId});
      if(!branch)
        return {
          error: SingleBranchErrorMessage.INVALID_BRANCH_ID,
          errors: null,
          code: HttpStatus.BAD_REQUEST,
        };
      return this.helper.serviceResponse.successResponse(
        branch,
        HttpStatus.OK,
      );
    }
}
