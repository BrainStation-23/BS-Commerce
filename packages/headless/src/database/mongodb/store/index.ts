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
import { randomUUID } from 'crypto';

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
      let newStoreId = randomUUID();
      if (data?.admin?.countryCode && data?.admin?.phone) {
        data.admin.phone = data?.admin?.countryCode + data?.admin?.phone || '';
      }
      // step 1: create role with newStoreId
      let role: Role = await new StoreAdminRoleModel({
        ...data.role,
        roleType: RoleTypeEnum.STORE_ADMIN,
        storeId: newStoreId,
      }).save({ session });

      // step 2: create store admin with role and newStoreId
      let storeAdmin: StoreAdmin = await new StoreAdminModel({
        ...data.admin,
        role: {
          roleId: role.id,
          name: role.name,
          roleType: role.roleType,
        },
        storeId: newStoreId,
      }).save({
        session,
      });

      // step 3: create store with newStoreId and admin id
      let store: Store = await new StoreModel({
        ...data.store,
        id: newStoreId,
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
