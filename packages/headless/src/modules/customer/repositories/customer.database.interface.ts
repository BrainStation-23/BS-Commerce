import { Injectable } from '@nestjs/common';
import { Customer, CustomerAddress } from 'src/entity/customer';

@Injectable()
export abstract class ICustomerDatabase {
  abstract createCustomer: (customer: Customer) => Promise<Customer | null>;
  abstract findCustomer: (query: Record<string, any>) => Promise<Customer | null>;
  abstract getCustomerPassword: (query: Record<string, any>) => Promise<Customer | null>;
  abstract updateCustomer: (customerId: string, customer: Customer) => Promise<Customer | null>;
  abstract addCustomerNewAddress: (customerId: string, address: CustomerAddress) => Promise<Customer | null>;
  abstract updateCustomerAddress: (customerId: string, addressId: string, address: CustomerAddress) => Promise<Customer | null>;
  abstract deleteCustomerAddress: (customerId: string, addressId: string) => Promise<Customer | null>;
}