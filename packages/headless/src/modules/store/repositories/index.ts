import { Injectable } from '@nestjs/common';
import { IStoreDatabase } from './store.database.interface';

@Injectable()
export class StoreRepository {
  constructor(private readonly db: IStoreDatabase) {}
}
