import { HttpStatus, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import {
  CreateStoreBranchErrorMessages,
  CreateStoreBranchRequest,
  CreateStoreBranchResponse,
  GetAllStoreBranchErrorMessages,
  GetAllStoreBranchQuery,
  GetAllStoreBranchResponse,
  GetStoreBranchErrorMessages,
  GetStoreBranchResponse,
} from 'models';
import { Helper } from 'src/helper/helper.interface';
import { StoreBranchRepository } from '../repositories';

@Injectable()
export class StoreBranchService {
  constructor(
    private storeBranchRepo: StoreBranchRepository,
    private helper: Helper,
  ) {}
  async createTmpStoreBranch(
    storeBranch: CreateStoreBranchRequest,
  ): Promise<CreateStoreBranchResponse> {
    const Store: any = await this.storeBranchRepo.getStore({
      id: storeBranch.store,
    });
    const branchUrl = storeBranch.name
      .trim()
      .toLocaleLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '');
    const url = Store.url + '/' + branchUrl;
    const doesStoreExist =
      (await this.storeBranchRepo.getTmpStoreBranch({
        url: url,
      })) ||
      (await this.storeBranchRepo.getStoreBranch({
        url: url,
      }));
    if (doesStoreExist) {
      return this.helper.serviceResponse.errorResponse(
        CreateStoreBranchErrorMessages.STORE_BRANCH_ALREADY_EXIST,
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
    const { ...rest } = storeBranch;
    const store = {
      ...rest,
      url,
      status: 'PENDING',
      id: randomUUID(),
    };
    const branch = await this.storeBranchRepo.createTmpStoreBranch(store);
    if (!branch) {
      return this.helper.serviceResponse.errorResponse(
        CreateStoreBranchErrorMessages.CAN_NOT_CREATE_STORE_BRANCH_REQUEST,
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.helper.serviceResponse.successResponse(
      branch,
      HttpStatus.CREATED,
    );
  }

  async getTmpAllStoreBranch(
    condition: GetAllStoreBranchQuery,
  ): Promise<GetAllStoreBranchResponse> {
    const branch = await this.storeBranchRepo.getTmpAllStoreBranch(condition);
    if (!branch) {
      return this.helper.serviceResponse.errorResponse(
        GetAllStoreBranchErrorMessages.CAN_NOT_GET_ALL_STORE_BRANCH,
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.helper.serviceResponse.successResponse(branch, HttpStatus.OK);
  }

  async getTmpStoreBranch(branchId: string): Promise<GetStoreBranchResponse> {
    const branch = await this.storeBranchRepo.getTmpStoreBranch({
      id: branchId,
    });
    if (!branch) {
      return this.helper.serviceResponse.errorResponse(
        GetStoreBranchErrorMessages.CAN_NOT_GET_STORE_BRANCH,
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.helper.serviceResponse.successResponse(branch, HttpStatus.OK);
  }
}
