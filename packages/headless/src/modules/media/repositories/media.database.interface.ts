import { Injectable } from '@nestjs/common';
import { User } from 'src/entity/user';

@Injectable()
export abstract class IMediaDatabase {
  abstract createUser: (user: User) => Promise<User | null>;
}