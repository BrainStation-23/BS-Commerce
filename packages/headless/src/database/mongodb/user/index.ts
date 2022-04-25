import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/entity/user';
import { IUserDB } from 'src/modules/user/repository/user.db.interface';
import { UserModel } from './user.model';

@Injectable()
export class UserAuthDB implements IUserDB {
  async save(body: UserEntity): Promise<UserEntity | null> {
    const user = await UserModel.create(body);
    delete user?.password;
    return user;
  }
  async findOneForLogin(
    query: Record<string, string>,
  ): Promise<UserEntity | null> {
    const user = await UserModel.findOne(query).lean();
    return user;
  }
  async findById(id: string): Promise<UserEntity | null> {
    const user = await UserModel.findOne({ id }).lean();
    delete user?.password;
    return user;
  }

  async findOne(query: Record<string, string>): Promise<UserEntity | null> {
    const user = await UserModel.findOne(query).lean();
    delete user?.password;
    return user;
  }
}
