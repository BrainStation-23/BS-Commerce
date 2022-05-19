import { Injectable } from '@nestjs/common';
import { Address, User } from 'src/entity/user';
import { IUserDatabase } from 'src/modules/user/repositories/user.database.interface';
import { UserModel } from './user.model';
@Injectable()
export class UserDatabase implements IUserDatabase {
  async createUser(user: User): Promise<any | null> {
    const createdUser = await UserModel.create(user);
    const newUser = createdUser?.toJSON();
    delete newUser?.password;
    return newUser;
  }

  async getUserPassword(query: Record<string, string>): Promise<User | null> {
    return await UserModel.findOne(query).lean();
  }

  async findUser(query: Record<string, any>): Promise<User | null> {
    return await UserModel.findOne(query).lean().select('-password -_id');
  }

  async updateUser(userId: string, user: User): Promise<User | null> {
    return await UserModel.findOneAndUpdate({ id: userId }, { $set: user }, { new: true }).lean().select('-password -_id').exec();
  }

  async updateUserWithNewAddress(userId: string, user: User, address: Address): Promise<User | null> {
    return await UserModel.findOneAndUpdate({ id: userId }, { $push: { addresses: address }, $set: user, }, { new: true }).lean().select('-password -_id').exec();
  }

  async updateUserAndAddress(userId: string, user: User, address: Address): Promise<User | null> {
    console.log(user.addresses)
    return await UserModel.findOneAndUpdate({ id: userId, 'addresses.id': address.id }, { $set: user }, { new: true }).lean().select('-password -_id').exec();
  }
}