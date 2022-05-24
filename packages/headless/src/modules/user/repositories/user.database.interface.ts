import { Injectable } from '@nestjs/common';
import { Address, User } from 'src/entity/user';
import { CreateUserDto } from 'src/modules/auth/dto/auth.dto';

@Injectable()
export abstract class IUserDatabase {
  abstract createUser: (user: CreateUserDto) => Promise<User | null>;
  abstract findUser: (query: Record<string, string>) => Promise<User | null>;
  abstract getUserPassword(query: Record<string, string>): Promise<User | null>;
  abstract updateUser: (userId: string, user: User) => Promise<User | null>;
  abstract updateUserWithNewAddress: (userId: string, user: User, address: Address) => Promise<User | null>;
  abstract updateUserAndAddress: (userId: string, user: User, address: Address) => Promise<User | null>;
}