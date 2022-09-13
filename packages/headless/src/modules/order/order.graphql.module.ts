import { Module } from '@nestjs/common';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { AdminOrderResolver } from './graphql/order.admin.resolver';
import { CustomerOrderResolver } from './graphql/order.customer.resolver';
import { OrderRepository } from './repositories';
import { IOrderDatabase } from './repositories/order.db.interface';
import { OrderAdminService } from './services/admin.service';
import { OrderCustomerService } from './services/customer.service';

@Module({
  controllers: [],
  providers: [
    CustomerOrderResolver,
    AdminOrderResolver,
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
