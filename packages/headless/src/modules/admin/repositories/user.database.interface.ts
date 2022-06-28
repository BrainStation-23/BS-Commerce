import { Injectable } from '@nestjs/common';
import { Address, Admin } from 'src/entity/admin';

@Injectable()
export abstract class IUserDatabase {
  abstract createUser: (user: Admin) => Promise<Admin | null>;
  abstract findUser: (query: Record<string, string>) => Promise<Admin | null>;
  abstract getUserPassword(query: Record<string, string>): Promise<Admin | null>;
  abstract updateUser: (userId: string, user: Admin) => Promise<Admin | null>;
  abstract updateUserWithNewAddress: (userId: string, user: Admin, address: Address) => Promise<Admin | null>;
  abstract updateUserAndAddress: (userId: string, user: Admin, address: Address) => Promise<Admin | null>;
}