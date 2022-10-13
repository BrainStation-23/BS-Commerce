import { Module } from '@nestjs/common';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { BranchRepository } from './repositories';
import { IBranchDatabase } from 'src/modules/branch/repositories/branch.database.interface';
import { BranchController } from './rest/branch.controller';
import { BranchService } from './services';

@Module({
    controllers: [BranchController],
    providers: [
      BranchService,
      BranchRepository,
      { provide: IBranchDatabase, useClass: ResolveDatabaseDependency('BRANCH') },
    ],
  })
  export class BranchModule {}