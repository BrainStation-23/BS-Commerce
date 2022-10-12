import { Injectable } from '@nestjs/common';
import { Admin } from 'src/entity/admin';
import { Store } from 'src/entity/store';
import { IStoreDatabase } from 'src/modules/store/repositories/store.database.interface';
import { StoreModel } from './store.model';
import mongoose from 'mongoose';
import { AdminModel } from '../admin/admin.model';

@Injectable()
export class StoreDatabase implements IStoreDatabase {
  async findStoreAdmin(query: Record<string, any>): Promise<Admin | null> {
    try {
      return await AdminModel.findOne(query).select('-_id').lean();
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
    admin: Admin;
  }): Promise<Store | null> {
    const session = await mongoose.startSession();
    try {
      session.startTransaction();
      const admin: Admin = await new AdminModel({ ...data.admin }).save({
        session,
      });

      const store: Store = await new StoreModel({
        ...data.store,
        admin: admin.id,
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
