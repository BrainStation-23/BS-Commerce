import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Customer, CustomerAddress } from 'src/entity/customer';
import { ICustomerDatabase } from './customer.database.interface';

@Injectable()
export class CustomerRepository {
  constructor(private readonly db: ICustomerDatabase) { }

  async createCustomer(customer: Customer): Promise<Customer | null> {
    customer.id = randomUUID()
    return await this.db.createCustomer(customer);
  }

  async findCustomer(query: Record<string, any>): Promise<Customer | null> {
    return await this.db.findCustomer(query);
  }

  async updateCustomer(customerId: string, customer: Customer): Promise<Customer | null> {
    return await this.db.updateCustomer(customerId, customer);
  }

  async updateCustomerWithNewAddress(customerId: string, customer: Customer, address: CustomerAddress): Promise<Customer | null> {
    return await this.db.updateCustomerWithNewAddress(customerId, customer, address);
  }

  async updateCustomerAndAddress(customerId: string, customer: Customer, address: CustomerAddress): Promise<Customer | null> {
    return await this.db.updateCustomerAndAddress(customerId, customer, address);
  }

  async getCustomerPassword(query: Record<string, any>): Promise<Customer | null> {
    return await this.db.getCustomerPassword(query);
  }
}