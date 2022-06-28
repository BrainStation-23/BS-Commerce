import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Address, User } from 'src/entity/user';
import { IUserDatabase } from './user.database.interface';

@Injectable()
export class UserRepository {
  constructor(private readonly db: IUserDatabase) { }

  async createUser(user: User): Promise<User | null> {
    user.id = randomUUID()
    return await this.db.createUser(user);
  }

  async findUser(query: Record<string, any>): Promise<User | null> {
    return await this.db.findUser(query);
  }

  async getUserPassword(query: Record<string, string>): Promise<User | null> {
    return await this.db.getUserPassword(query);
  }

  async updateUser(userId: string, user: User): Promise<User | null> {
    return await this.db.updateUser(userId, user);
  }

  async updateUserWithNewAddress(userId: string, user: User, address: Address): Promise<User | null> {
    return await this.db.updateUserWithNewAddress(userId, user, address);
  }

  async updateUserAndAddress(userId: string, user: User, address: Address): Promise<User | null> {
    return await this.db.updateUserAndAddress(userId, user, address);
  }

}