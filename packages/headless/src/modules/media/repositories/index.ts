import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { User } from 'src/entity/user';
import { IMediaDatabase } from './media.database.interface';

@Injectable()
export class MediaRepository {
  
}