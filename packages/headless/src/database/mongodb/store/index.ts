import { Injectable } from '@nestjs/common';
import { StoreAdmin } from 'src/entity/store-admin';
import { Store } from 'src/entity/store';
import { IStoreDatabase } from 'src/modules/store/repositories/store.database.interface';
import { StoreModel } from './store.model';
import mongoose from 'mongoose';
import { StoreAdminModel } from '../store-admin/store-admin.model';
import { CreateRoleDto } from 'src/modules/store/rest/dto/store-admin-role.dto';
import { Role } from 'src/entity/role';
import { StoreAdminRoleModel } from '../store-admin-role/store-admin.role.model';
import { RoleTypeEnum } from 'models';

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

  async getAllStores(
    query: Record<string, any>,
    skip: number,
    limit: number,
  ): Promise<Store[] | []> {
    try {
      const { email, ...rest } = query;
      const admin: StoreAdmin | null =
        email &&
        (await StoreAdminModel.findOne({
          'info.email': email,
        }).lean());

      if (email && !admin) {
        return [];
      }

      return admin && email
        ? await StoreModel.find({ ...rest, admin: admin.id })
            .skip(skip)
            .limit(limit)
            .select('-_id')
            .lean()
        : await StoreModel.find(rest)
            .skip(skip)
            .limit(limit)
            .select('-_id')
            .lean();
    } catch (error: any) {
      console.log(error.message);
      return null;
    }
  }

  async createStore(data: {
    store: Store;
    role: CreateRoleDto;
    admin: StoreAdmin;
  }): Promise<Store | null> {
    const session = await mongoose.startSession();
    try {
      session.startTransaction();
      /**
       * step 1: create role with temp store id
       * step 2: create admin with role and temp store id
       * step 3: create store admin
       * step 4: update admin with store id
       * step 5: update role with store id
       */
      let role: Role = await new StoreAdminRoleModel({
        ...data.role,
        roleType: RoleTypeEnum.STORE_ADMIN,
        storeId: 'temp',
      }).save({ session });

      let storeAdmin: StoreAdmin = await new StoreAdminModel({
        ...data.admin,
        role: {
          roleId: role.id,
          name: role.name,
          roleType: role.roleType,
        },
        storeId: 'temp',
      }).save({
        session,
      });

      let store: Store = await new StoreModel({
        ...data.store,
        admin: storeAdmin.id,
      }).save({ session });

      storeAdmin = await StoreAdminModel.findOneAndUpdate(
        { id: storeAdmin.id },
        {
          $set: { storeId: store.id },
        },
        { session },
      );

      role = await StoreAdminRoleModel.findOneAndUpdate(
        { id: role.id },
        {
          $set: { storeId: store.id },
        },
        { session },
      );

      console.log(storeAdmin, role, store);

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
