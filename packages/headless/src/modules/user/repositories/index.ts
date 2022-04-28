import { Injectable } from '@nestjs/common';
import { User } from 'src/entity/user';
import { IUserDatabase } from './user.database.interface';
@Injectable()
export class UserRepository {
  constructor(private readonly db: IUserDatabase) { }

  async createUser(user: User): Promise<User | null> {
    return await this.db.createUser(user);
  }

  async findUser(username: string): Promise<User | null> {
    return await this.db.findUser(username);
  }

  async findSigninUser(username: string): Promise<User | null> {
    return await this.db.findSigninUser(username);
  }
}