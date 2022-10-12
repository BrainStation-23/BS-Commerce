import { Injectable } from '@nestjs/common';
import { Admin } from 'src/entity/admin';
import { Store } from 'src/entity/store';

@Injectable()
export abstract class IStoreDatabase {
  abstract getStore: (query: Record<string, any>) => Promise<Store | null>;
  abstract createStore: (data: {
    store: Store;
    admin: Admin;
  }) => Promise<Store | null>;
}
