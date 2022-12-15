import { Module } from '@nestjs/common';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
// import { OrderRepository } from './repositories';
// import { IOrderDatabase } from './repositories/order.db.interface';
import { PaymentController } from './rest/payment.controller';
import { PaymentService } from './services/payment.service';

@Module({
  controllers: [PaymentController],
  providers: [
    PaymentService,
    // OrderRepository,
    // {
    //   provide: IOrderDatabase,
    //   useClass: ResolveDatabaseDependency('ORDER'),
    // },
  ],
})
export class PaymentModule {}
