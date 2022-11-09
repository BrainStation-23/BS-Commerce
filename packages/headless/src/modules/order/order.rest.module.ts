import { OrderReviewController } from './rest/review.controller';
import { Module } from '@nestjs/common';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { OrderRepository } from './repositories';
import { IOrderDatabase } from './repositories/order.db.interface';
import { OrderAdminController } from './rest/admin.controlller';
import { OrderCustomerController } from './rest/customer.controller';
import { OrderAdminService } from './services/admin.service';
import { OrderCustomerService } from './services/customer.service';
import { OrderReviewService } from './services/review.service';

@Module({
  controllers: [OrderCustomerController, OrderAdminController, OrderReviewController],
  providers: [
    OrderCustomerService,
    OrderAdminService,
    OrderReviewService,
    OrderRepository,
    {
      provide: IOrderDatabase,
      useClass: ResolveDatabaseDependency('ORDER'),
    },
  ],
})
export class OrderModule {}
