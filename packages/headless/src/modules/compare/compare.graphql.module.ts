import { Module } from '@nestjs/common';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { GqlCompareResolver } from './graphql/compare.resolver';
import { CompareRepository } from './repositories';
import { ICompareDatabase } from './repositories/compare.db.interface';
import { CompareService } from './services';

@Module({
  controllers: [],
  providers: [
    GqlCompareResolver,
    CompareService,
    CompareRepository,
    {
      provide: ICompareDatabase,
      useClass: ResolveDatabaseDependency('COMPARE'),
    },
  ],
})
export class CompareModule {}
