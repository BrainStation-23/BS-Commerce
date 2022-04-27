import { Injectable } from '@nestjs/common';
import { User } from 'src/entity/user';
import { IAuthDatabase } from './auth.database.interface';
@Injectable()
export class AuthRepository {
  constructor(private readonly db: IAuthDatabase) {}

  async createUser(user: User): Promise<User> {
    return await this.db.createUser(user);
  }

  async findUser(username: string): Promise<User> {
    return await this.db.findUser(username);
  }
  
  async findSigninUser(username: string): Promise<User> {
    return await this.db.findSigninUser(username);
  }
}