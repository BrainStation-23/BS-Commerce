import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/entity/user';
import { CreateUserDto, UserEntityResponse } from '../dto/user.dto';

@Injectable()
export abstract class IUserAuthDB {
  abstract save: (body: CreateUserDto) => Promise<UserEntityResponse>;
  abstract findOne: (
    query: Record<string, string>,
  ) => Promise<UserEntityResponse>;
  abstract findOneForLogin: (
    query: Record<string, string>,
  ) => Promise<UserEntity>;
}
