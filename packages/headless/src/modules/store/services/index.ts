import { HttpStatus, Injectable } from '@nestjs/common';
import { Helper } from 'src/helper/helper.interface';
import { StoreRepository } from '../repositories';
import {
  CreateStoreErrorMessages,
  CreateStoreRequestBody,
  CreateStoreResponse,
  GetStoreErrorMessages,
  GetStoreResponse,
} from 'models';
import { randomUUID } from 'crypto';
import * as bcrypt from 'bcrypt';
import { authConfig } from 'config/auth';

@Injectable()
export class StoreService {
  constructor(private storeRepo: StoreRepository, private helper: Helper) {}

  async createStore(
    data: CreateStoreRequestBody,
  ): Promise<CreateStoreResponse> {
    // Slug Url Generate
    const url = data.info.shopName
      .trim()
      .toLocaleLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');

    const doesStoreShopOrLegalNameMatch = await this.storeRepo.getStore({
      'info.url': url,
    });
    if (doesStoreShopOrLegalNameMatch)
      return this.helper.serviceResponse.errorResponse(
        CreateStoreErrorMessages.STORE_SHOP_NAME_EXISTS,
        null,
        HttpStatus.BAD_REQUEST,
      );

    const doesStoreAdminEmailMatch = await this.storeRepo.findStoreAdmin({
      'info.email': data.admin.email,
    });
    if (doesStoreAdminEmailMatch)
      return this.helper.serviceResponse.errorResponse(
        CreateStoreErrorMessages.EMAIL_ALREADY_USED,
        null,
        HttpStatus.BAD_REQUEST,
      );

    const { admin, ...rest } = data;
    const { name, email, phone, password } = admin;
    const hashPassword = await bcrypt.hash(password, authConfig.salt);
    const store = {
      ...rest,
      url,
      id: randomUUID(),
    };
    const storeOwnerObj = {
      id: randomUUID(),
      info: {
        name,
        email,
        phone,
      },
      password: hashPassword,
      role: {
        name: 'Store Owner',
        roleType: 'OWNER',
      },
      isActive: true,
    };

    const createdStore = await this.storeRepo.createStore({
      store,
      admin: storeOwnerObj,
    });
    if (!createdStore)
      return this.helper.serviceResponse.errorResponse(
        CreateStoreErrorMessages.CAN_NOT_CREATE_STORE,
        null,
        HttpStatus.BAD_REQUEST,
      );
    return this.helper.serviceResponse.successResponse(
      createdStore,
      HttpStatus.CREATED,
    );
  }

  async getStore(storeId: string): Promise<GetStoreResponse> {
    const store = await this.storeRepo.getStore({ id: storeId });
    if (!store)
      return this.helper.serviceResponse.errorResponse(
        GetStoreErrorMessages.NO_STORE_FOUND,
        null,
        HttpStatus.BAD_REQUEST,
      );
    return this.helper.serviceResponse.successResponse(store, HttpStatus.OK);
  }
}
