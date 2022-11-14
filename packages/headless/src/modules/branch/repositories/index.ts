import { Injectable } from '@nestjs/common';
import { AllBranchByStoreId, Branch, CreateBranchRequest } from 'models';
import { ActionType, BranchHistory } from 'src/entity/branch-history';
import { Store } from 'src/entity/store';
import { IBranchDatabase } from 'src/modules/branch/repositories/branch.database.interface';

@Injectable()
export class BranchRepository {
  constructor(private readonly db: IBranchDatabase) {}

  async createBranch(branch: CreateBranchRequest): Promise<Branch | null> {
    return await this.db.createBranch(branch);
  }

  async createBranchHistory(history: BranchHistory) {
    await this.db.createBranchHistory(history);
  }

  async getHistory(query: Record<string, any>): Promise<BranchHistory | null> {
    return await this.db.getHistory(query);
  }

  async updateBranchHistory(
    url: string,
    actions: ActionType,
  ): Promise<BranchHistory | null> {
    return await this.db.updateBranchHistory(url, actions);
  }

  async getStore(storeId: string): Promise<Store | null> {
    return await this.db.getStore(storeId);
  }

  async getBranchByStoreId(
    storeId: string,
  ): Promise<AllBranchByStoreId | null> {
    return await this.db.getBranchByStoreId(storeId);
  }

  async getBranch(query: Record<string, any>): Promise<Branch | null> {
    return await this.db.getBranch(query);
  }

  async getTmpBranch(query: Record<string, any>): Promise<Branch | null> {
    return await this.db.getTmpBranch(query);
  }

  async updateStatus(branchId: string, status: string): Promise<Branch | null> {
    return await this.db.updateStatus(branchId, status);
  }
}
