import { Injectable } from '@nestjs/common';
import { Address, Admin } from 'src/entity/admin';
import { IUserDatabase } from 'src/modules/admin/repositories/user.database.interface';
import AddressModel from './address.model';
import AdminModel from './admin.model';

@Injectable()
export class UserDatabase implements IUserDatabase {
  async createUser(user: Admin): Promise<Admin | null> {
    const newUser = (await AdminModel.create(user)).get({ plain: true });
    delete newUser?.password;
    return newUser;
  }

  async getUserPassword(query: Record<string, string>): Promise<Admin | null> {
    return await AdminModel.findOne({ where: query });
  }

  async findUser(query: Record<string, any>): Promise<Admin | null> {
    return await AdminModel.findOne({
      include: [AddressModel],
      where: query,
      raw: false,
      attributes: { exclude: ['password'] }
    })
  }

  async updateUser(userId: string, user: Admin): Promise<Admin | null> {
    await AdminModel.update(user, { where: { id: userId } });
    return await this.findUser({ id: userId });
  }

  async updateUserWithNewAddress(userId: string, user: Admin, address: Address): Promise<Admin | null> {
    await AddressModel.create({ ...address, userId });
    return await this.updateUser(userId, user);
  }

  async updateUserAndAddress(userId: string, user: Admin, address: Address): Promise<Admin | null> {
    await AddressModel.update(address, { where: { id: address.id, userId } });
    return await this.updateUser(userId, user);
  }
}