import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User as CustomerInfo } from 'src/decorators/auth.decorator';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/guards/auth.guard';
import { CustomerService } from '../services';
import { Customer } from 'src/entity/customer';
import {
  CustomerAddressInput,
  CustomerResponse,
  UpdateCustomerInput
} from './customer.model';
import { Helper } from 'src/helper/helper.interface';

@UseGuards(new RolesGuard(['customer']))
@Resolver()
export class CustomerResolver {
  constructor(private customerService: CustomerService, private helper: Helper) { }

  @Query(() => CustomerResponse)
  async getCustomerInfo(@CustomerInfo() customer: Customer) {
    const res = await this.customerService.getCustomer(customer.id);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => CustomerResponse)
  async updateCustomer(@Args('data') data: UpdateCustomerInput, @CustomerInfo() customer: Customer) {
    const res = await this.customerService.updateCustomer(customer.id, data);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => CustomerResponse)
  async addCustomerNewAddress(@Args('address') address: CustomerAddressInput, @CustomerInfo() customer: Customer) {
    const res = await this.customerService.addCustomerNewAddress(customer.id, address);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => CustomerResponse)
  async updateCustomerAddress(@Args('address') address: CustomerAddressInput, @Args('addressId') addressId: string, @CustomerInfo() customer: Customer) {
    const res = await this.customerService.updateCustomerAddress(customer.id, addressId, { ...address, id: addressId });
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => CustomerResponse)
  async deleteCustomerAddress(@Args('addressId') addressId: string, @CustomerInfo() customer: Customer) {
    const res = await this.customerService.deleteCustomerAddress(customer.id, addressId);
    return this.helper.serviceResponse.graphqlResponse(res);
  }
}