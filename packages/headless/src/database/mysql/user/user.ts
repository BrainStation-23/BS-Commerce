import { Injectable } from '@nestjs/common';
import { Address, User } from 'src/entity/user';
import { IUserDatabase } from 'src/modules/user/repositories/user.database.interface';
import AddressModel from './address.model';
import UserModel from './user.model';

@Injectable()
export class UserDatabase implements IUserDatabase {
  async createUser(user: User): Promise<User | null> {
    const newUser = (await UserModel.create(user)).get({ plain: true });
    delete newUser?.password;
    return newUser;
  }

  async getUserPassword(query: Record<string, string>): Promise<User | null> {
    return await UserModel.findOne({ where: query });
  }

  async findUser(query: Record<string, any>): Promise<User | null> {
    return await UserModel.findOne({
      include: [AddressModel],
      where: query,
      raw: false,
      attributes: { exclude: ['password'] }
    })
  }

  async updateUser(userId: string, user: User): Promise<User | null> {
    await UserModel.update(user, { where: { id: userId } });
    return await this.findUser({ id: userId });
  }

  async updateUserWithNewAddress(userId: string, user: User, address: Address): Promise<User | null> {
    await AddressModel.create({ ...address, userId });
    return await this.updateUser(userId, user);
  }

  async updateUserAndAddress(userId: string, user: User, address: Address): Promise<User | null> {
    await AddressModel.update(address, { where: { id: address.id, userId } });
    return await this.updateUser(userId, user);
  }
}