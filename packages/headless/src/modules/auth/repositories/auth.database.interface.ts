import { Injectable } from '@nestjs/common';
import { User } from 'src/entity/user';

@Injectable()
export abstract class IAuthDatabase {
  abstract createUser: (user: User) => Promise<User>;
  abstract findUser: (username: string) => Promise<User>;
  abstract findSigninUser(username: string): Promise<User | null> 
}