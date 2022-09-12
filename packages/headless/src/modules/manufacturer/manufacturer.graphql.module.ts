import { Module } from '@nestjs/common';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { ManufacturerResolver } from './graphql/manufacturer.resolver';
import { ManufacturerRepository } from './repositories';
import { IManufacturerDatabase } from './repositories/manufacturer.database.interface';
import { ManufacturerService } from './services/manufacturer.service';
@Module({
  controllers: [],
  providers: [
    ManufacturerResolver,
    ManufacturerService,
    ManufacturerRepository,
    {
      provide: IManufacturerDatabase,
      useClass: ResolveDatabaseDependency('MANUFACTURER'),
    },
  ],
})
export class ManufacturerModule {}
