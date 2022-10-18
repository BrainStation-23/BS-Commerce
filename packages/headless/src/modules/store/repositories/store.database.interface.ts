import { Injectable } from '@nestjs/common';
import { StoreAdmin } from 'src/entity/store-admin';
import { Store } from 'src/entity/store';

@Injectable()
export abstract class IStoreDatabase {
  abstract getStore: (query: Record<string, any>) => Promise<Store | null>;
  abstract getAllStores: (
    query: Record<string, any>,
    skip: number,
    limit: number,
  ) => Promise<Store[] | []>;
  abstract findStoreAdmin: (
    query: Record<string, any>,
  ) => Promise<StoreAdmin | null>;
  abstract createStore: (data: {
    store: Store;
    admin: StoreAdmin;
  }) => Promise<Store | null>;
}
