import { Injectable } from '@nestjs/common';
import { Customer, CustomerAddress } from 'src/entity/customer';

@Injectable()
export abstract class ICustomerDatabase {
  abstract createCustomer: (customer: Customer) => Promise<Customer | null>;
  abstract findCustomer: (query: Record<string, any>) => Promise<Customer | null>;
  abstract getCustomerPassword: (query: Record<string, any>) => Promise<Customer | null>;
  abstract updateCustomer: (customerId: string, customer: Customer) => Promise<Customer | null>;
  abstract updateCustomerWithNewAddress: (customerId: string, customer: Customer, address: CustomerAddress) => Promise<Customer | null>;
  abstract updateCustomerAndAddress: (customerId: string, customer: Customer, address: CustomerAddress) => Promise<Customer | null>;
}