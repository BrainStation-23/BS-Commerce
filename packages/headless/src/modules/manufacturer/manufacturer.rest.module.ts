import { ManufacturerRepository } from './repositories/index';
import { Module } from '@nestjs/common';
import { ManufacturerService } from './services/manufacturer.service';
import { IManufacturerDatabase } from './repositories/manufacturer.database.interface';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { ManufacturerController } from './rest/manufacturer.controller';

@Module({
  controllers: [ManufacturerController],
  providers: [
    ManufacturerService,
    ManufacturerRepository,
    {
      provide: IManufacturerDatabase,
      useClass: ResolveDatabaseDependency('MANUFACTURER'),
    },
  ],
})
export class ManufacturerModule {}
