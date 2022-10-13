import { Injectable } from '@nestjs/common';
import { StoreAdmin } from 'src/entity/store-admin';
import { Store } from 'src/entity/store';
import { IStoreDatabase } from 'src/modules/store/repositories/store.database.interface';
import { StoreModel } from './store.model';
import mongoose from 'mongoose';
import { StoreAdminModel } from '../store-admin/store-admin.model';

@Injectable()
export class StoreDatabase implements IStoreDatabase {
  async findStoreAdmin(query: Record<string, any>): Promise<StoreAdmin | null> {
    try {
      return await StoreAdminModel.findOne(query).select('-_id').lean();
    } catch (error: any) {
      console.log(error.message);
      return null;
    }
  }

  async getStore(query: Record<string, any>): Promise<Store | null> {
    try {
      return await StoreModel.findOne(query).select('-_id').lean();
    } catch (error: any) {
      console.log(error.message);
      return null;
    }
  }

  async createStore(data: {
    store: Store;
    admin: StoreAdmin;
  }): Promise<Store | null> {
    const session = await mongoose.startSession();
    try {
      session.startTransaction();
      const storeAdmin: StoreAdmin = await new StoreAdminModel({
        ...data.admin,
      }).save({
        session,
      });

      const store: Store = await new StoreModel({
        ...data.store,
        admin: storeAdmin.id,
      }).save({ session });

      await session.commitTransaction();
      return store;
    } catch (error: any) {
      console.log(error.message);
      await session.abortTransaction();
      await session.endSession();
      return null;
    } finally {
      await session.endSession();
    }
  }
}
