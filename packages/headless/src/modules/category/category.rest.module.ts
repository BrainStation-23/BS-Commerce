import { Module } from '@nestjs/common';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { CategoryRepository } from './repositories';
import { ICategoryDatabase } from './repositories/category.database.interface';
import { CategoryController } from './rest/category.controller';
import { MulterModule } from '@nestjs/platform-express';
import { CategoryService } from './services';

@Module({
  imports: [MulterModule.register({
    dest: './files',
  })],
  controllers: [CategoryController],
  providers: [
    CategoryService,
    CategoryRepository,
    { provide: ICategoryDatabase, useClass: ResolveDatabaseDependency('CATEGORY') },
  ],
})
export class CategoryModule {}