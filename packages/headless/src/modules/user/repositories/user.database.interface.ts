import { Injectable } from '@nestjs/common';
import { Address, User } from 'src/entity/user';

@Injectable()
export abstract class IUserDatabase {
  abstract createUser: (user: User) => Promise<User | null>;
  abstract findUser: (query: Record<string, string>) => Promise<User | null>;
  abstract getUserPassword(query: Record<string, string>): Promise<User | null>;
  abstract updateUser: (userId: string, user: User) => Promise<User | null>;
}