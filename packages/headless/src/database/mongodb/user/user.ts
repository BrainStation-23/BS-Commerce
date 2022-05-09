import { Injectable } from '@nestjs/common';
import { User } from 'src/entity/user';
import { IUserDatabase } from 'src/modules/user/repositories/user.database.interface';
import { UserModel } from './user.model';
@Injectable()
export class UserDatabase implements IUserDatabase {
  async createUser(user: User): Promise<User | null> {
    const newUser = await UserModel.create(user);
    delete newUser?.password;
    return newUser;
  }

  async findSigninUser(username: string): Promise<User | null> {
    return await UserModel.findOne({ username }).lean();
  }

  async findUser(username: string): Promise<User | null> {
    const user = await UserModel.findOne({ username }).lean();
    delete user?.password;
    return user;
  }
}