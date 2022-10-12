import { Injectable } from '@nestjs/common';
import { Admin } from 'src/entity/admin';
import { Store } from 'src/entity/store';
import { IStoreDatabase } from 'src/modules/store/repositories/store.database.interface';
import { StoreModel } from './store.model';
import mongoose from 'mongoose';
import { AdminModel } from '../admin/admin.model';

@Injectable()
export class StoreDatabase implements IStoreDatabase {
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
    // await session.withTransaction(async () => {
    //   await AdminModel.create({ ...data.admin }, { session });
    //   await StoreModel.create(
    //     {
    //       ...data.store,
    //       admin: data.admin.id,
    //     },
    //     { session },
    //   );
    // });
    // session.commitTransaction();
    // session.endSession();
    // await mongoose
    //   .startSession()
    //   .then((_session) => {
    //     session = _session;
    //     session.startTransaction();
    //     AdminModel.create({ ...data.admin }, { session: session });
    //     StoreModel.create(
    //       {
    //         ...data.store,
    //         id: '05103b3d-32b5-46f0-af83-f75facca91c6',
    //         admin: data.admin.id,
    //       },
    //       { session: session },
    //     );
    //   })
    //   .then(() => session.commitTransaction())
    //   .then(() => session.abortTransaction())
    //   .then(() => session.endSession());

    const session = await mongoose.startSession();
    try {
      session.startTransaction();
      const admin: Admin = await new AdminModel({ ...data.admin }).save({
        session,
      });

      await new StoreModel({
        ...data.store,
        admin: admin.id,
      }).save({ session });

      await session.commitTransaction();
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
