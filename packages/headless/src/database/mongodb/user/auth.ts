import { Injectable } from '@nestjs/common';
import { User } from 'src/entity/user';
import { IAuthDatabase } from 'src/modules/auth/repositories/auth.database.interface';
import { UserModel } from './user.model';
@Injectable()
export class AuthDatabase implements IAuthDatabase {
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