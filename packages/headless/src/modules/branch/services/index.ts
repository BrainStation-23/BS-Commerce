import { HttpStatus, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import {
  CreateBranchErrorMessage,
  CreateBranchRequest,
  CreateBranchResponse,
  GetAllBranchByStoreIdErrorMessage,
  GetAllBranchByStoreIdResponse,
  SingleBranchResponse,
  SingleBranchErrorMessage,
  UpdateBranchStatusResponse,
  UpdateBranchStatusErrorMessage,
  UpdateBranchStatusSuccessMessage,
} from 'models';
import { UserTypeEnum } from 'src/entity/branch-history';
import { StoreBranchStatus } from 'src/entity/tmp-store-branch';
import { Helper } from 'src/helper/helper.interface';
import { BranchRepository } from '../repositories';

@Injectable()
export class BranchService {
  constructor(private branchRepo: BranchRepository, private helper: Helper) {}

  async createBranch(
    branch: CreateBranchRequest,
  ): Promise<CreateBranchResponse> {
    const { store } = branch;
    const storeExists = await this.branchRepo.getStore(store);
    if (!storeExists)
      return {
        error: CreateBranchErrorMessage.INVALID_STORE_ID,
        errors: null,
        code: HttpStatus.BAD_REQUEST,
      };

    const branchUrl = branch.name
      .trim()
      .toLocaleLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '');
    const url = storeExists.url + '/' + branchUrl;
    const urlExists = await this.branchRepo.getBranch({ url: url });
    if (urlExists)
      return {
        error: CreateBranchErrorMessage.URL_ALREADY_EXISTS,
        errors: null,
        code: HttpStatus.BAD_REQUEST,
      };

    const { ...rest } = branch;
    const branchBody = {
      ...rest,
      url,
      status: 'APPROVED',
    };

    const newBranch = await this.branchRepo.createBranch(branchBody);
    if (!newBranch)
      return {
        error: CreateBranchErrorMessage.CANNOT_CREATE_BRANCH,
        errors: null,
        code: HttpStatus.INTERNAL_SERVER_ERROR,
      };

    const history = {
      id: randomUUID(),
      branchName: branch.name,
      actions: [
        {
          user: {
            id: '123',
            email: 'admin@gmail.com',
            type: UserTypeEnum.ADMIN,
          },
          status: StoreBranchStatus.APPROVED,
          comment: branch.description,
          updatedTime: new Date(),
        },
      ],
    };

    const doesExistHistory = await this.branchRepo.getHistory({
      branchName: branch.name,
    });
    if (!doesExistHistory) {
      await this.branchRepo.createBranchHistory(history);
    }
    return this.helper.serviceResponse.successResponse(
      newBranch,
      HttpStatus.CREATED,
    );
  }

  async getBranchByStoreId(
    storeId: string,
  ): Promise<GetAllBranchByStoreIdResponse> {
    const branches = await this.branchRepo.getBranchByStoreId(storeId);
    if (!branches)
      return {
        error: GetAllBranchByStoreIdErrorMessage.INVALID_STORE_ID,
        errors: null,
        code: HttpStatus.BAD_REQUEST,
      };

    return this.helper.serviceResponse.successResponse(branches, HttpStatus.OK);
  }

  async getBranch(branchId: string): Promise<SingleBranchResponse> {
    const branch = await this.branchRepo.getBranch({ id: branchId });
    if (!branch)
      return {
        error: SingleBranchErrorMessage.INVALID_BRANCH_ID,
        errors: null,
        code: HttpStatus.BAD_REQUEST,
      };
    return this.helper.serviceResponse.successResponse(branch, HttpStatus.OK);
  }

  async updateStatus(
    branchId: string,
    status: string,
  ): Promise<UpdateBranchStatusResponse> {
    const updatedBranch = await this.branchRepo.updateStatus(branchId, status);
    if (!updatedBranch) {
      return this.helper.serviceResponse.errorResponse(
        UpdateBranchStatusErrorMessage.CAN_NOT_UPDATE_BRANCH_STATUS,
        null,
        HttpStatus.BAD_REQUEST,
      );
    }

    if (status === StoreBranchStatus.APPROVED) {
      const Actions: any = [
        {
          user: {
            id: '123',
            email: 'admin@gmail.com',
            type: UserTypeEnum.ADMIN,
          },
          status: updatedBranch.status,
          comment: updatedBranch.description,
          updatedTime: new Date(),
        },
      ];

      await this.branchRepo.updateBranchHistory(updatedBranch.name, Actions);
      return this.helper.serviceResponse.successResponse(
        { message: UpdateBranchStatusSuccessMessage.SUCCESSFULLY_APPROVED },
        HttpStatus.OK,
      );
    } else if (status === StoreBranchStatus.REJECTED) {
      const Actions: any = [
        {
          user: {
            id: '123',
            email: 'admin@gmail.com',
            type: UserTypeEnum.ADMIN,
          },
          status: updatedBranch.status,
          comment: updatedBranch.description,
          updatedTime: new Date(),
        },
      ];

      await this.branchRepo.updateBranchHistory(updatedBranch.name, Actions);
      return this.helper.serviceResponse.successResponse(
        { message: UpdateBranchStatusSuccessMessage.REJECTED_FROM_SUPER_ADMIN },
        HttpStatus.OK,
      );
    }
    return this.helper.serviceResponse.errorResponse(
      UpdateBranchStatusErrorMessage.CAN_NOT_UPDATE_BRANCH_STATUS,
      null,
      HttpStatus.BAD_REQUEST,
    );
  }
}
