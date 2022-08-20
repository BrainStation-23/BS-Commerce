import { CartRepository } from './../cart/repositories/index';
import { ProductRepository } from './../product/repositories/index';
import { Module } from '@nestjs/common';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { OrderRepository } from './repositories';
import { IOrderDatabase } from './repositories/order.db.interface';
import { OrderAdminController } from './rest/admin.controlller';
import { OrderCustomerController } from './rest/customer.controller';
import { OrderAdminService } from './services/admin.service';
import { OrderCustomerService } from './services/customer.service';
import { ICartDatabase } from '../cart/repositories/cart.database.interface';
import { IProductDatabase } from '../product/repositories/product.database.interface';


@Module({
  controllers: [OrderCustomerController, OrderAdminController],
  providers: [
    OrderCustomerService,
    OrderAdminService,
    OrderRepository,
    CartRepository,
    ProductRepository,
    {
      provide: IOrderDatabase,
      useClass: ResolveDatabaseDependency('ORDER'),
    },
    { provide: ICartDatabase, useClass: ResolveDatabaseDependency('CART') },
    {
      provide: IProductDatabase,
      useClass: ResolveDatabaseDependency('PRODUCT')
  },
  ],
})
export class OrderModule {}
