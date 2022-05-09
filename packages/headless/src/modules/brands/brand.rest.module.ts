import { Module } from "@nestjs/common";

import { BrandController } from './rest/brand.controller';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { IBrandDatabase } from 'src/modules/brands/repositories/brand.database.interface';
import { BrandService } from './services/index';
import { BrandRepository } from './repositories/index';

@Module({
    controllers: [BrandController],
    providers: [
        BrandService,
        BrandRepository,
        { provide: IBrandDatabase, useClass: ResolveDatabaseDependency('BRAND') }
    ]
})

export class BrandModule{};