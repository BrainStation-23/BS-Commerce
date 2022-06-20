import { Injectable } from '@nestjs/common';
import { Customer } from 'src/entity/customer';

@Injectable()
export abstract class ICustomerDatabase {
  abstract createCustomer: (customer: Customer) => Promise<Customer | null>;
  abstract findCustomer: (query: Record<string, any>) => Promise<Customer | null>;
}