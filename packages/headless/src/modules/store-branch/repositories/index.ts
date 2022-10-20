import { Injectable } from '@nestjs/common';
import { CreateStoreBranchRequest } from 'models';
import { Store } from 'src/entity/store';
import { StoreBranch } from 'src/entity/store-branch';
import { IStoreBranchDatabase } from './storeBranch.database.interface';

@Injectable()
export class StoreBranchRepository {
  constructor(private readonly db: IStoreBranchDatabase) {}

  async getStore(query: Record<string, any>): Promise<Store | null> {
    return await this.db.getStore(query);
  }

  async createTmpStoreBranch(
    storeBranch: CreateStoreBranchRequest,
  ): Promise<StoreBranch | null> {
    return await this.db.createTmpStoreBranch(storeBranch);
  }

  async getTmpAllStoreBranch(
    query: Record<string, any>,
  ): Promise<StoreBranch[] | []> {
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
