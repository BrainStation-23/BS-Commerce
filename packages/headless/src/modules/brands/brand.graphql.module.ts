import { Module } from "@nestjs/common";

import { BrandController } from './rest/brand.controller';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { IBrandDatabase } from 'src/modules/brands/repositories/brand.database.interface';
import { BrandService } from './services/index';
import { BrandRepository } from './repositories/index';
import { BrandResolver } from "./graphql/brand.resolver";

@Module({
    controllers: [],
    providers: [
        BrandResolver,
        BrandService,
        BrandRepository,
        { 
            provide: IBrandDatabase, 
            useClass: ResolveDatabaseDependency('BRAND') 
        }
    ]
})

export class BrandModule{};