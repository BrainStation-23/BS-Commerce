import { Injectable } from '@nestjs/common';
import { IStoreDatabase } from 'src/modules/store/repositories/store.database.interface';

@Injectable()
export class StoreDatabase implements IStoreDatabase {
}
