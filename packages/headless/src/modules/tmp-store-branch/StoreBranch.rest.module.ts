import { Module } from '@nestjs/common';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { StoreBranchRepository } from './repositories';
import { IStoreBranchDatabase } from './repositories/storeBranch.database.interface';
import { StoreBranchController } from './rest';
import { StoreBranchService } from './services';

@Module({
  controllers: [StoreBranchController],
  providers: [
    StoreBranchService,
    StoreBranchRepository,
    {
      provide: IStoreBranchDatabase,
      useClass: ResolveDatabaseDependency('STORE_BRANCH'),
    },
  ],
})
export class StoreBranchModule {}
