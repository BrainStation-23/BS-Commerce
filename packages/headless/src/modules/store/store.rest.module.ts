import { Module } from '@nestjs/common';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { StoreRepository } from './repositories';
import { IStoreDatabase } from './repositories/store.database.interface';
import { StoreController } from './rest';
import { StoreService } from './services';

@Module({
  controllers: [StoreController],
  providers: [
    StoreService,
    StoreRepository,
    {
      provide: IStoreDatabase,
      useClass: ResolveDatabaseDependency('STORE'),
    },
  ],
})
export class StoreModule {}
