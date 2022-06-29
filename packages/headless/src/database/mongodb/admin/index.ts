import { Injectable } from '@nestjs/common';
import { Address, Admin } from 'src/entity/admin';
import { IAdminDatabase } from 'src/modules/admin/repositories/admin.database.interface';
import { AdminModel } from './admin.model';
@Injectable()
export class UserDatabase implements IAdminDatabase {
  async createUser(user: Admin): Promise<Admin | null> {
    const createdUser = await AdminModel.create(user);
    const newUser = createdUser?.toJSON();
    delete newUser?.password;
    return newUser;
  }

  async getUserPassword(query: Record<string, string>): Promise<Admin | null> {
    return await AdminModel.findOne(query).lean();
  }

  async findUser(query: Record<string, any>): Promise<Admin | null> {
    return await AdminModel.findOne(query).lean().select('-password -_id');
  }

  async updateUser(userId: string, user: Admin): Promise<Admin | null> {
    return await AdminModel.findOneAndUpdate({ id: userId }, { $set: user }, { new: true }).lean().select('-password -_id').exec();
  }

  async updateUserWithNewAddress(userId: string, user: Admin, address: Address): Promise<Admin | null> {
    return await AdminModel.findOneAndUpdate({ id: userId }, { $set: user, $push: { addresses: address } }, { new: true }).lean().select('-password -_id').exec();
  }

  async updateUserAndAddress(userId: string, user: Admin, address: Address): Promise<Admin | null> {
    return await AdminModel.findOneAndUpdate({ id: userId, 'addresses.id': address.id }, { $set: { ...user, 'addresses.$': address } }, { new: true }).lean().select('-password -_id').exec();
  }
}