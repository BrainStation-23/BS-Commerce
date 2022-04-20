import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/entity/user';
import { CreateUserDto, UserEntityResponse } from '../interface/user.interface';
import { IUserAuthDB } from './user.db.interface';

@Injectable()
export class UserAuthRepository {
  constructor(private readonly db: IUserAuthDB) {}

  async save(body: CreateUserDto): Promise<UserEntityResponse> {
    return await this.db.save(body);
  }

  async findOne(query: Record<string, string>): Promise<UserEntityResponse> {
    return await this.db.findOne(query);
  }
  async findOneForLogin(query: Record<string, string>): Promise<UserEntity> {
    return await this.db.findOneForLogin(query);
  }
}
