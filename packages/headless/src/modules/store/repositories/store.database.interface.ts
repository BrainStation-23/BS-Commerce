import { Injectable } from '@nestjs/common';
import { StoreAdmin } from 'src/entity/store-admin';
import { Store } from 'src/entity/store';
import { CreateRoleDto } from '../rest/dto/store-admin-role.dto';

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
    role: CreateRoleDto,
    admin: StoreAdmin;
  }) => Promise<Store | null>;
}
