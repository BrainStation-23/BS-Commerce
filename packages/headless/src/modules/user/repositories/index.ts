import { Injectable } from '@nestjs/common';
import { User } from 'src/entity/user';
import { IUserDatabase } from './user.database.interface';

@Injectable()
export class UserRepository {
  constructor(private readonly db: IUserDatabase) { }

  async createUser(user: User): Promise<User | null> {
    return await this.db.createUser(user);
  }

  async findUser(query: Record<string, string>): Promise<User | null> {
    return await this.db.findUser(query);
  }

  async findSigninUser(email: string): Promise<User | null> {
    return await this.db.findSigninUser(email);
  }

  async updateUser(userId: string, user: User): Promise<User | null> {
    return await this.db.updateUser(userId, user);
  }

}