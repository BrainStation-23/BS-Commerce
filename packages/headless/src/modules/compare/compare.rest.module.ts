import { Module } from '@nestjs/common';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { CompareRepository } from './repositories';
import { ICompareDatabase } from './repositories/compare.db.interface';
import { CompareController } from './rest';
import { CompareTestController } from './rest/test.controller';
import { CompareService } from './services';
import { CompareTestService } from './services/test.service';

@Module({
  controllers: [CompareController, CompareTestController],
  providers: [
    CompareService,
    CompareTestService,
    CompareRepository,
    {
      provide: ICompareDatabase,
      useClass: ResolveDatabaseDependency('COMPARE'),
    },
  ],
})
export class CompareModule {}
