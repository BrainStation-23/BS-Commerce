import { Module } from '@nestjs/common';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { CustomerResolver } from './graphql/customer.resolver';
import { CustomerRepository } from './repositories';
import { ICustomerDatabase } from './repositories/customer.database.interface';
import { CustomerService } from './services';

@Module({
  controllers: [],
  providers: [
    CustomerResolver,
    CustomerService,
    CustomerRepository,
    {
      provide: ICustomerDatabase,
      useClass: ResolveDatabaseDependency('CUSTOMER'),
    },
  ],
})
export class CustomerModule {}
