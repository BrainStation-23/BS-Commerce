import { Module } from '@nestjs/common';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { CompareRepository } from './repositories';
import { ICompareDatabase } from './repositories/compare.db.interface';
import { CompareController } from './rest';
import { CompareService } from './services';

@Module({
  controllers: [CompareController],
  providers: [
    CompareService,
    CompareRepository,
    {
      provide: ICompareDatabase,
      useClass: ResolveDatabaseDependency('COMPARE'),
    },
  ],
})
export class CompareModule {}
