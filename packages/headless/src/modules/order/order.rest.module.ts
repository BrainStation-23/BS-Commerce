import { Module } from '@nestjs/common';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { OrderRepository } from './repositories';
import { IOrderDatabase } from './repositories/order.db.interface';
import { OrderAdminController } from './rest/admin.controlller';
import { OrderCustomerController } from './rest/customer.controller';
import { OrderAdminService } from './services/admin.service';
import { OrderCustomerService } from './services/customer.service';


@Module({
  controllers: [OrderCustomerController, OrderAdminController],
  providers: [
    OrderCustomerService,
    OrderAdminService,
    OrderRepository,
    {
      provide: IOrderDatabase,
      useClass: ResolveDatabaseDependency('ORDER'),
    },
  ],
})
export class OrderModule {}
