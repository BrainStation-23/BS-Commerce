import {
  CreateUserDto,
  UserEntityResponse,
} from '@modules/user-auth/interface/user.interface';
import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/entity/user';
import { IUserAuthDB } from 'src/modules/user-auth/repository/user.db.interface';
import { UserModel } from './user.model';

@Injectable()
export class UserAuthDB implements IUserAuthDB {
  async save(body: CreateUserDto): Promise<UserEntityResponse> {
    const isExist = await UserModel.findOne({ phone: body.phone }).lean();
    if (isExist) {
      return null;
    }
    const user = (await UserModel.create(body)).toJSON();
    delete user.password;
    return user;
  }

  async findOne(query: Record<string, string>): Promise<UserEntityResponse> {
    const doc = await UserModel.findOne(query).lean();
    if (!doc) {
      return null;
    }
    delete doc.password;
    return doc;
  }

  async findOneForLogin(query: Record<string, string>): Promise<UserEntity> {
    const doc = await UserModel.findOne(query).lean();
    if (!doc) {
      return null;
    }
    return doc;
  }
}
