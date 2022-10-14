import { Injectable } from '@nestjs/common';
import { CreateStoreBranchRequest } from 'models';
import { StoreBranch } from 'src/entity/store-branch';

@Injectable()
export abstract class IStoreBranchDatabase {
  abstract getStore: (storeId: string) => Promise<string | null>;
  abstract createTmpStoreBranch: (
    storeBranch: CreateStoreBranchRequest,
  ) => Promise<StoreBranch | null>;
  abstract getTmpAllStoreBranch: (
    query: Record<string, any>,
  ) => Promise<StoreBranch[] | null>;
  abstract getTmpStoreBranch: (
    query: Record<string, any>,
  ) => Promise<StoreBranch | null>;
  abstract getStoreBranch: (
    query: Record<string, any>,
  ) => Promise<StoreBranch | null>;
}
