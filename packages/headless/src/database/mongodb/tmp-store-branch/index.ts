import { Injectable } from '@nestjs/common';
import { CreateStoreBranchRequest } from 'models';
import { BranchHistory } from 'src/entity/branch-history';
import { Store } from 'src/entity/store';
import { StoreBranch } from 'src/entity/tmp-store-branch';
import { BranchModel } from '../branch/branch.model';
import { StoreModel } from '../store/store.model';
import { BranchHistoryModel } from './branchHistory.model';
import { TmpStoreBranchModel } from './tempStoreBranch.model';

@Injectable()
export class StoreBranchDatabase {
  async getStore(query: Record<string, any>): Promise<Store | null> {
    try {
      return await StoreModel.findOne(query).select('url').lean();
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async createTmpStoreBranch(
    storeBranch: CreateStoreBranchRequest,
  ): Promise<StoreBranch | null> {
    try {
      return await TmpStoreBranchModel.create(storeBranch);
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async getTmpAllStoreBranch(
    query: Record<string, any>,
  ): Promise<StoreBranch[] | []> {
    try {
      return await TmpStoreBranchModel.find(query, '-_id -createdAt -updatedAt')
        .limit(query.limit)
        .skip(query.skip)
        .lean();
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async getTmpStoreBranch(
    query: Record<string, any>,
  ): Promise<StoreBranch | null> {
    try {
      return await TmpStoreBranchModel.findOne(
        query,
        '-_id -createdAt -updatedAt',
      ).lean();
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async getStoreBranch(
    query: Record<string, any>,
  ): Promise<StoreBranch | null> {
    try {
      return await BranchModel.findOne(
        query,
        '-_id -createdAt -updatedAt',
      ).lean();
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async createBranchHistory(history: BranchHistory) {
    try {
      await BranchHistoryModel.create(history);
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async getHistory(query: Record<string, any>) {
    try {
      return await BranchHistoryModel.findOne(
        query,
        '-_id -createdAt -updatedAt',
      ).lean();
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
