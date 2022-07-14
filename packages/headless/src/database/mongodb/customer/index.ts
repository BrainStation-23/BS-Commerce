import { Injectable } from '@nestjs/common';
import { Customer, CustomerAddress } from 'src/entity/customer';
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
    return CustomerModel.findOne(query).lean().select('-password -_id');
  }

  async getCustomerPassword(query: Record<string, string>): Promise<Customer | null> {
    return await CustomerModel.findOne(query).lean();
  }

  async updateCustomer(customerId: string, customer: Customer): Promise<Customer | null> {
    return await CustomerModel.findOneAndUpdate({ id: customerId }, { $set: customer }, { new: true }).lean().select('-password -_id').exec();
  }

  async updateCustomerWithNewAddress(customerId: string, customer: Customer, address: CustomerAddress): Promise<Customer | null> {
    return await CustomerModel.findOneAndUpdate({ id: customerId }, { $set: customer, $push: { addresses: address } }, { new: true }).lean().select('-password -_id').exec();
  }

  async updateCustomerAndAddress(customerId: string, customer: Customer, address: CustomerAddress): Promise<Customer | null> {
    return await CustomerModel.findOneAndUpdate({ id: customerId, 'addresses.id': address.id }, { $set: { ...customer, 'addresses.$': address } }, { new: true }).lean().select('-password -_id').exec();
  }
}