import { Injectable } from '@nestjs/common';
import { Customer } from 'src/entity/customer';
import { ICustomerDatabase } from 'src/modules/customer/repositories/customer.database.interface';
import { CustomerModel } from './customer.model';
@Injectable()
export class CustomerDatabase implements ICustomerDatabase {
  async createCustomer (customer: Customer): Promise<Customer>{
    const createdCUstomer = await CustomerModel.create(customer);
    const newCustomer = createdCUstomer?.toJSON();
    delete newCustomer?.password;
    return newCustomer;
  }
  findCustomer: (query: Record<string, string>) => Promise<Customer>;
}