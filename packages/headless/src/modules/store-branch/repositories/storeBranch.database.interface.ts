import { Injectable } from '@nestjs/common';
import { CreateStoreBranchRequest } from 'models';
import { Store } from 'src/entity/store';
import { StoreBranch } from 'src/entity/store-branch';

@Injectable()
export abstract class IStoreBranchDatabase {
  abstract getStore: (query: Record<string, any>) => Promise<Store | null>;
  abstract createTmpStoreBranch: (
    storeBranch: CreateStoreBranchRequest,
  ) => Promise<StoreBranch | null>;
  abstract getTmpAllStoreBranch: (
    query: Record<string, any>,
  ) => Promise<StoreBranch[] | []>;
  abstract getTmpStoreBranch: (
    query: Record<string, any>,
  ) => Promise<StoreBranch | null>;
  abstract getStoreBranch: (
    query: Record<string, any>,
  ) => Promise<StoreBranch | null>;
}
