import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/entity/user';

@Injectable()
export abstract class IUserDB {
  abstract save: (body: UserEntity) => Promise<UserEntity>;
  abstract findOne: (query: Record<string, string>) => Promise<UserEntity>;
  abstract findOneForLogin: (
    query: Record<string, string>,
  ) => Promise<UserEntity>;
}
