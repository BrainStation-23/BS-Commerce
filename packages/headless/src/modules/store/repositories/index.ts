import { Injectable } from '@nestjs/common';
import { Admin } from 'src/entity/admin';
import { Store } from 'src/entity/store';
import { IStoreDatabase } from './store.database.interface';

@Injectable()
export class StoreRepository {
  constructor(private readonly db: IStoreDatabase) {}

  async getStore(query: Record<string, any>): Promise<Store | null> {
    return await this.db.getStore(query);
  }

  async findStoreAdmin(query: Record<string, any>): Promise<Admin | null> {
    return await this.db.findStoreAdmin(query);
  }

  async createStore(data: {
    store: Store;
    admin: Admin;
  }): Promise<Store | null> {
    return await this.db.createStore(data);
  }
}
