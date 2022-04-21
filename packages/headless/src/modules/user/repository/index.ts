import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/entity/user';
import { IUserDB } from './user.db.interface';

@Injectable()
export class UserRepository {
  constructor(private readonly db: IUserDB) {}

  async save(body: UserEntity): Promise<UserEntity> {
    return await this.db.save(body);
  }

  async findOne(query: Record<string, string>): Promise<UserEntity> {
    return await this.db.findOne(query);
  }
  async findOneForLogin(query: Record<string, string>): Promise<UserEntity> {
    return await this.db.findOneForLogin(query);
  }
}
