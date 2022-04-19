import { BrandController } from './controllers/index';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { IBrandDatabase } from 'src/modules/brands/repositories/brand.database.interface';
import { Brandservice } from './services/index';
import { BrandRepository } from './repositories/index';
import { Module } from "@nestjs/common";

@Module({
    controllers: [BrandController],
    providers: [
        Brandservice,
        BrandRepository,
        { provide: IBrandDatabase, useClass: ResolveDatabaseDependency('BRAND') }
    ]
})

export class BrandModule{};