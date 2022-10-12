import { HttpStatus, Injectable } from '@nestjs/common';
import { Helper } from 'src/helper/helper.interface';
import { StoreRepository } from '../repositories';
import {
  CreateStoreErrorMessages,
  CreateStoreRequestBody,
  CreateStoreResponse,
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
    const doesStoreShopOrLegalNameMatch =
      (await this.storeRepo.getStore({
        'info.shopName': data.info.shopName,
      })) ||
      (await this.storeRepo.getStore({
        'info.legalName': data.info.legalName,
      }));
    if (doesStoreShopOrLegalNameMatch)
      return this.helper.serviceResponse.errorResponse(
        CreateStoreErrorMessages.STORE_SHOP_OR_LEGAL_NAME_EXISTS,
        null,
        HttpStatus.BAD_REQUEST,
      );

    const doesStoreAdminEmailMatch = await this.storeRepo.findStoreAdmin({
      'info.email': data.admin.email,
    });
    if (doesStoreAdminEmailMatch)
      return this.helper.serviceResponse.errorResponse(
        CreateStoreErrorMessages.STORE_ADMIN_EMAIL_EXISTS,
        null,
        HttpStatus.BAD_REQUEST,
      );

    const { admin, ...rest } = data;
    const { name, email, phone, password } = admin;
    const hashPassword = await bcrypt.hash(password, authConfig.salt);
    const storeObj = {
      store: {
        ...rest,
        id: randomUUID(),
      },
      admin: {
        id: randomUUID(),
        info: {
          name,
          email,
          phone,
        },
        password: hashPassword,
        role: {
          name: 'Store Admin',
          roleType: 'STORE',
        },
        isActive: true,
      },
    };

    const store = await this.storeRepo.createStore(storeObj);
    if (!store)
      return this.helper.serviceResponse.errorResponse(
        CreateStoreErrorMessages.CAN_NOT_CREATE_STORE,
        null,
        HttpStatus.BAD_REQUEST,
      );
    return this.helper.serviceResponse.successResponse(
      store,
      HttpStatus.CREATED,
    );
  }
}
