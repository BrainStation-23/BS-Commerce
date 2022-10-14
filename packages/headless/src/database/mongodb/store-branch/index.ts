import { Injectable } from '@nestjs/common';
import { CreateStoreBranchRequest } from 'models';
import { StoreBranch } from 'src/entity/store-branch';
import { BranchModel } from '../branch/branch.model';
import { StoreModel } from '../store/store.model';
import { TmpStoreBranchModel } from './tempStoreBranch';

@Injectable()
export class StoreBranchDatabase {
  async getStore(storeId: string): Promise<string | null> {
    return await StoreModel.findOne({ storeId }).select('url').lean();
  }
  async createTmpStoreBranch(
    storeBranch: CreateStoreBranchRequest,
  ): Promise<StoreBranch | null> {
    return await TmpStoreBranchModel.create(storeBranch);
  }

  async getTmpAllStoreBranch(
    query: Record<string, any>,
  ): Promise<StoreBranch[] | null> {
    return await TmpStoreBranchModel.find(query, '-_id -createdAt -updatedAt')
      .limit(query.limit)
      .skip(query.skip)
      .lean();
  }

  async getTmpStoreBranch(
    query: Record<string, any>,
  ): Promise<StoreBranch | null> {
    return await TmpStoreBranchModel.findOne(
      query,
      '-_id -createdAt -updatedAt',
    ).lean();
  }

  async getStoreBranch(
    query: Record<string, any>,
  ): Promise<StoreBranch | null> {
    return await BranchModel.findOne(
      query,
      '-_id -createdAt -updatedAt',
    ).lean();
  }
}
