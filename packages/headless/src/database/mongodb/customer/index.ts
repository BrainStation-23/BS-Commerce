import { Injectable } from '@nestjs/common';
import { Customer } from 'src/entity/customer';
import { ICustomerDatabase } from 'src/modules/customer/repositories/customer.database.interface';
import { CustomerModel } from './customer.model';

@Injectable()
export class CustomerDatabase implements ICustomerDatabase {
  async createCustomer(customer: Customer): Promise<Customer | null> {
    const createdCUstomer = await CustomerModel.create(customer);
    const newCustomer = createdCUstomer?.toJSON();
    delete newCustomer?.password;
    return newCustomer;
  }

  async findCustomer(query: Record<string, any>): Promise<Customer | null> {
    return CustomerModel.findOne(query).lean();
  }

  async insertOtp(data: Customer): Promise<Boolean> {
    const customer = await CustomerModel.create(data);
    return customer ? true : false
  }
}