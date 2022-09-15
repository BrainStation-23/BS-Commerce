import { Module } from '@nestjs/common';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { CategoryRepository } from './repositories';
import { ICategoryDatabase } from './repositories/category.database.interface';
import { CategoryController } from './rest/category.controller';
import { CategoryService } from './services';

@Module({
  controllers: [CategoryController],
  providers: [
    CategoryService,
    CategoryRepository,
    {
      provide: ICategoryDatabase,
      useClass: ResolveDatabaseDependency('CATEGORY'),
    },
  ],
})
export class CategoryModule {}
