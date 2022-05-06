import { Injectable } from '@nestjs/common';
import { User } from 'src/entity/user';

@Injectable()
export abstract class IUserDatabase {
  abstract createUser: (user: User) => Promise<User | null>;
  abstract findUser: (username: string) => Promise<User | null>;
  abstract findSigninUser(username: string): Promise<User | null>
}