import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Address, Admin } from 'src/entity/admin';
import { IAdminDatabase } from './admin.database.interface';

@Injectable()
export class AdminRepository {
  constructor(private readonly db: IAdminDatabase) { }

  async createUser(user: Admin): Promise<Admin | null> {
    user.id = randomUUID()
    return await this.db.createUser(user);
  }

  async findUser(query: Record<string, any>): Promise<Admin | null> {
    return await this.db.findUser(query);
  }

  async getUserPassword(query: Record<string, string>): Promise<Admin | null> {
    return await this.db.getUserPassword(query);
  }

  async updateUser(userId: string, user: Admin): Promise<Admin | null> {
    return await this.db.updateUser(userId, user);
  }

  async updateUserWithNewAddress(userId: string, user: Admin, address: Address): Promise<Admin | null> {
    return await this.db.updateUserWithNewAddress(userId, user, address);
  }

  async updateUserAndAddress(userId: string, user: Admin, address: Address): Promise<Admin | null> {
    return await this.db.updateUserAndAddress(userId, user, address);
  }

}