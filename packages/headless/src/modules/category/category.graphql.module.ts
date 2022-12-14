import { Module } from '@nestjs/common';
import { ResolveDatabaseDependency } from '../../database/database.resolver';
import { CategoryResolver } from './graphql/category.resolver';
import { CategoryRepository } from './repositories';
import { ICategoryDatabase } from './repositories/category.database.interface';
import { CategoryService } from './services';

@Module({
  controllers: [],
  providers: [
    CategoryResolver,
    CategoryService,
    CategoryRepository,
    {
      provide: ICategoryDatabase,
      useClass: ResolveDatabaseDependency('CATEGORY'),
    },
  ],
})
export class CategoryModule {}
