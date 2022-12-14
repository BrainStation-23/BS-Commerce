import { Module } from '@nestjs/common';
import { ResolveDatabaseDependency } from '../../database/database.resolver';
import { CustomerRepository } from './repositories';
import { ICustomerDatabase } from './repositories/customer.database.interface';
import { CustomerController } from './rest';
import { CustomerService } from './services';

@Module({
  controllers: [CustomerController],
  providers: [
    CustomerService,
    CustomerRepository,
    {
      provide: ICustomerDatabase,
      useClass: ResolveDatabaseDependency('CUSTOMER'),
    },
  ],
})
export class CustomerModule {}
