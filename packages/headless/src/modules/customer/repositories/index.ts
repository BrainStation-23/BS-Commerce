import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Customer } from 'src/entity/customer';
import { ICustomerDatabase } from './customer.database.interface';

@Injectable()
export class CustomerRepository {
  constructor(private readonly db: ICustomerDatabase) { }

  async createCustomer(customer: Customer): Promise<Customer | null> {
    return await this.db.createCustomer(customer);
  }

  async insertOtp(customer: Customer): Promise<Boolean> {
    customer.id = randomUUID()
    return await this.db.insertOtp(customer);
  }

  async findCustomer(query: Record<string, any>): Promise<Customer | null> {
    return await this.db.findCustomer(query);
  }
}