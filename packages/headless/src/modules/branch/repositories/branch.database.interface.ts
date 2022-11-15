import { Injectable } from '@nestjs/common';
import { AllBranchByStoreId, Branch, CreateBranchRequest } from 'models';
import { ActionType, BranchHistory } from 'src/entity/branch-history';
import { Store } from 'src/entity/store';

@Injectable()
export abstract class IBranchDatabase {
  abstract createBranch: (
    branch: CreateBranchRequest,
  ) => Promise<Branch | null>;
  abstract createBranchHistory: (history: BranchHistory) => Promise<null>;
  abstract updateBranchHistory: (
    url: string,
    actions: ActionType,
  ) => Promise<null>;
  abstract getHistory: (
    query: Record<string, any>,
  ) => Promise<BranchHistory | null>;
  abstract getStore: (storeId: string) => Promise<Store | null>;
  abstract getBranchByStoreId: (
    storeId: string,
  ) => Promise<AllBranchByStoreId | null>;
  abstract getBranch: (query: Record<string, any>) => Promise<Branch | null>;
  abstract getTmpBranch: (query: Record<string, any>) => Promise<Branch | null>;
  abstract updateStatus: (
    branchId: string,
    status: string,
  ) => Promise<Branch | null>;
}
