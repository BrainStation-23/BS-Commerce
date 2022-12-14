import { Module } from '@nestjs/common';
import { ResolveDatabaseDependency } from '../../database/database.resolver';
import { IBrandDatabase } from '../../modules/brands/repositories/brand.database.interface';
import { BrandService } from './services/index';
import { BrandRepository } from './repositories/index';
import { BrandResolver } from './graphql/brand.resolver';

@Module({
  controllers: [],
  providers: [
    BrandResolver,
    BrandService,
    BrandRepository,
    {
      provide: IBrandDatabase,
      useClass: ResolveDatabaseDependency('BRAND'),
    },
  ],
})
export class BrandModule {}
