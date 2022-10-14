import { Injectable } from '@nestjs/common';
import { StoreAdmin } from 'src/entity/store-admin';
import { Store } from 'src/entity/store';
import { IStoreDatabase } from './store.database.interface';

@Injectable()
export class StoreRepository {
  constructor(private readonly db: IStoreDatabase) {}

  async getStore(query: Record<string, any>): Promise<Store | null> {
    return await this.db.getStore(query);
  }

  async getAllStores(
    query: Record<string, any>,
    skip?: number,
    limit?: number,
  ): Promise<Store[] | []> {
    return await this.db.getAllStores(query, skip, limit);
  }

  async findStoreAdmin(query: Record<string, any>): Promise<StoreAdmin | null> {
    return await this.db.findStoreAdmin(query);
  }

  async createStore(data: {
    store: Store;
    admin: StoreAdmin;
  }): Promise<Store | null> {
    return await this.db.createStore(data);
  }
}
