import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/entity/user';
import { IUserDB } from 'src/modules/user/repository/user.db.interface';
import { UserModel } from './user.model';

@Injectable()
export class UserAuthDB implements IUserDB {
  async save(body: UserEntity): Promise<UserEntity | null> {
    const isExist = await UserModel.findOne({ phone: body.phone }).lean();
    if (isExist) {
      return null;
    }
    const user = (await UserModel.create(body)).toJSON();
    delete user.password;
    return user;
  }

  async findOne(query: Record<string, string>): Promise<UserEntity | null> {
    const user = await UserModel.findOne(query).lean();
    if (!user) {
      return null;
    }
    delete user.password;
    return user;
  }

  async findOneForLogin(
    query: Record<string, string>,
  ): Promise<UserEntity | null> {
    const user = await UserModel.findOne(query).lean();
    if (!user) {
      return null;
    }
    return user;
  }
}
