import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Customer, CustomerAddress } from 'src/entity/customer';
import { Otp } from 'src/entity/otp';
import { ICustomerDatabase } from './customer.database.interface';

@Injectable()
export class CustomerRepository {
  constructor(private readonly db: ICustomerDatabase) { }

  async createCustomer(customer: Customer): Promise<Customer | null> {
    customer.id = randomUUID();
    return await this.db.createCustomer(customer);
  }

  async sendOtp(data: Otp): Promise<Otp | null> {
    data.id = randomUUID();
    return await this.db.sendOtp(data);
  }

  async findCustomer(query: Record<string, any>): Promise<Customer | null> {
    return await this.db.findCustomer(query);
  }

  async updateCustomer(customerId: string, customer: Customer): Promise<Customer | null> {
    return await this.db.updateCustomer(customerId, customer);
  }

  async addCustomerNewAddress(customerId: string, address: CustomerAddress): Promise<Customer | null> {
    return await this.db.addCustomerNewAddress(customerId, address);
  }

  async updateCustomerAddress(customerId: string, addressId: string, address: CustomerAddress): Promise<Customer | null> {
    return await this.db.updateCustomerAddress(customerId, addressId, address);
  }

  async deleteCustomerAddress(customerId: string, addressId: string): Promise<Customer | null> {
    return await this.db.deleteCustomerAddress(customerId, addressId);
  }

  async getCustomerPassword(query: Record<string, any>): Promise<Customer | null> {
    return await this.db.getCustomerPassword(query);
  }
}