import { Injectable } from '@nestjs/common';
import { User } from 'src/entity/user';
import { IUserDatabase } from 'src/modules/user/repositories/user.database.interface';
import UserModel from './user.model';

@Injectable()
export class UserDatabase implements IUserDatabase {
  async createUser(user: User): Promise<any | null> {
    const newUser = (await UserModel.create(user)).get({ plain: true });
    delete newUser?.password;
    return newUser;
  }

  async getUserPassword(query: Record<string, string>): Promise<any | null> {
    return await UserModel.findOne({ where: query });
  }

  async findUser(query: Record<string, any>): Promise<any | null> {
    const user = (await UserModel.findOne({ where: query }));
    delete user?.password;
    return user;
  }

  async updateUser(userId: string, user: User): Promise<any | null> {
    await UserModel.update(user, {
      where: { id: userId }
    });
    const updatedUser = await this.findUser({ id: userId });
    delete updatedUser?.password;
    return updatedUser;
  }
}