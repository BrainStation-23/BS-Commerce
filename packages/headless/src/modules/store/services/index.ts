import { HttpStatus, Injectable } from '@nestjs/common';
import { Helper } from 'src/helper/helper.interface';
import { StoreRepository } from '../repositories';
import { randomUUID } from 'crypto';
import * as bcrypt from 'bcrypt';
import { authConfig } from 'config/auth';
import {
  CreateStoreErrorMessages,
  CreateStoreRequestBody,
  CreateStoreResponse,
  GetAllStoresQuery,
  GetStoreErrorMessages,
  GetStoreResponse,
} from 'models';
import { CreateStoreAdminDto } from '../rest/dto/store-admin.dto';
import { CreateStoreRequestBodyDto } from '../rest/dto';

@Injectable()
export class StoreService {
  constructor(private storeRepo: StoreRepository, private helper: Helper) {}

  async createStore(
    data: CreateStoreRequestBodyDto,
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
      url,
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

    const { admin, role, ...rest } = data;
    const hashPassword = await bcrypt.hash(admin.password, authConfig.salt);
    admin.password = hashPassword
    
    const store = {
      ...rest,
      url,
      id: randomUUID(),
    };

    const createdStore = await this.storeRepo.createStore({
      store,
      role,
      admin
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

  async getAllStores(condition: GetAllStoresQuery): Promise<GetStoreResponse> {
    const { adminEmail, skip, limit } = condition;
    let stores: any = [];
    const query: Record<string, any> = this.generateSearchQuery(condition);
    stores = await this.storeRepo.getAllStores(
      { ...query, email: adminEmail },
      skip,
      limit,
    );
    if (!stores)
      return this.helper.serviceResponse.errorResponse(
        GetStoreErrorMessages.NO_STORE_FOUND,
        null,
        HttpStatus.BAD_REQUEST,
      );
    return this.helper.serviceResponse.successResponse(stores, HttpStatus.OK);
  }

  generateSearchQuery(condition: GetAllStoresQuery): object {
    const { url, legalName, isActive } = condition;
    const query: Record<string, any> = {};
    if (url !== undefined && url !== '') {
      query.url = url;
    }
    if (legalName !== undefined && legalName !== '') {
      query['info.legalName'] = legalName;
    }
    if (isActive !== undefined) {
      query['isActive'] = isActive;
    }
    return query;
  }
}
