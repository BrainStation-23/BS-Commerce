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

  async getUserPassword(query: Record<string, string>): Promise<User | null> {
    return await UserModel.findOne(query).lean();
  }

  async findUser(query: Record<string, any>): Promise<User | null> {
    const user = await UserModel.findOne(query).lean();
    delete user?.password;
    return user;
  }

  async updateUser(userId: string, user: User): Promise<User | null> {
    const updatedUser = await UserModel.findOneAndUpdate({ id: userId }, { $set: user }, { new: true }).lean().exec();
    delete updatedUser?.password;
    return updatedUser;
  }
}