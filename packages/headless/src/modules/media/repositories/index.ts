import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { User } from 'src/entity/user';
import { IMediaDatabase } from './media.database.interface';

@Injectable()
export class MediaRepository {
  constructor(private readonly db: IMediaDatabase) { }

  async createUser(user: User): Promise<User | null> {
    return await this.db.createUser(user);
  }
}