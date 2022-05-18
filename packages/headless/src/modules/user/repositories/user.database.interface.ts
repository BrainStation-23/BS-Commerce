import { Injectable } from '@nestjs/common';
import { User } from 'src/entity/user';

@Injectable()
export abstract class IUserDatabase {
  abstract createUser: (user: User) => Promise<User | null>;
  abstract findUser: (query: Record<string, any>) => Promise<User | null>;
  abstract findSigninUser(email: string): Promise<User | null>;
  abstract updateUser: (userId: string, user: User) => Promise<User | null>;
}