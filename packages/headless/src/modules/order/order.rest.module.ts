import { Module } from '@nestjs/common';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { OrderRepository } from './repositories';
import { IOrderDatabase } from './repositories/order.db.interface';
import { OrderCustomerController } from './rest/customer.controller';
import { OrderCustomerService } from './services/customer.service';

@Module({
  controllers: [OrderCustomerController],
  providers: [
    OrderCustomerService,
    OrderRepository,
    {
      provide: IOrderDatabase,
      useValue: ResolveDatabaseDependency('ORDER'),
    },
  ],
})
export class OrderModule {}
