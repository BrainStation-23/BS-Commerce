import { Injectable } from '@nestjs/common';
import { Address, User } from 'src/entity/user';
import { CreateUserDto } from 'src/modules/auth/dto/auth.dto';
import { IUserDatabase } from 'src/modules/user/repositories/user.database.interface';
import AddressModel from './address.model';
import UserModel from './user.model';

@Injectable()
export class UserDatabase implements IUserDatabase {
  async createUser(user: CreateUserDto): Promise<any | null> {
    const newUser = (await UserModel.create(user)).get({ plain: true });
    delete newUser?.password;
    return newUser;
  }

  async getUserPassword(query: Record<string, string>): Promise<any | null> {
    return await UserModel.findOne({ where: query });
  }

  async findUser(query: Record<string, any>): Promise<any | null> {
    return await UserModel.findOne({ where: query, attributes: { exclude: ['password'] } });
  }

  async updateUser(userId: string, user: User): Promise<any | null> {
    await UserModel.update(user, {
      where: { id: userId }
    });
    return await this.findUser({ id: userId });
  }

  async updateUserWithNewAddress(userId: string, user: User, address: Address): Promise<User | null> {
    await AddressModel.update(address, { where: { id: address.id, userId } });
    return await this.updateUser(userId, user);
  }

  async updateUserAndAddress(userId: string, user: User, address: Address): Promise<User | null> {
    (await AddressModel.create({ ...address, userId })).get({ plain: true });
    return await this.updateUser(userId, user);
  }
}