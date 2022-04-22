import { ManufacturerRepository } from './repositories/index';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ManufacturerService } from './services/manufacturer.service';
import { ManufacturerController } from './controllers/manufacturer.controller';
import { IManufacturerDatabase } from './repositories/manufacturer.database.interface';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { ManufacturerMiddleware } from './middleware/manufacturer.middleware';

@Module({
  controllers: [ManufacturerController],
  providers: [
    ManufacturerService, 
    ManufacturerRepository, 
    { 
      provide: IManufacturerDatabase, 
      useClass: ResolveDatabaseDependency('MANUFACTURER')
    }
  ]
})
export class ManufacturerModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ManufacturerMiddleware)
      .forRoutes(ManufacturerController)
  }
}