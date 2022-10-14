import { Injectable } from '@nestjs/common';
import { CreateStoreBranchRequest } from 'models';
import { StoreBranch } from 'src/entity/store-branch';
import { IStoreBranchDatabase } from './storeBranch.database.interface';

@Injectable()
export class StoreBranchRepository {
  constructor(private readonly db: IStoreBranchDatabase) {}

  async getStore(storeId: string) {
    return await this.db.getStore(storeId);
  }
  async createTmpStoreBranch(
    storeBranch: CreateStoreBranchRequest,
  ): Promise<StoreBranch | null> {
    return await this.db.createTmpStoreBranch(storeBranch);
  }

  async getTmpAllStoreBranch(
    query: Record<string, any>,
  ): Promise<StoreBranch[] | null> {
    return this.db.getTmpAllStoreBranch(query);
  }

  async getTmpStoreBranch(
    query: Record<string, any>,
  ): Promise<StoreBranch | null> {
    return this.db.getTmpStoreBranch(query);
  }

  async getStoreBranch(
    query: Record<string, any>,
  ): Promise<StoreBranch | null> {
    return this.db.getStoreBranch(query);
  }
}
