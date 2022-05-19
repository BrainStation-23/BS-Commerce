import { Injectable } from '@nestjs/common';
import { Address, User } from 'src/entity/user';
import { IUserDatabase } from './user.database.interface';

@Injectable()
export class UserRepository {
  constructor(private readonly db: IUserDatabase) { }

  async createUser(user: User): Promise<User | null> {
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

}