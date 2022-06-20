import { CustomerAuthService } from '../services';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateCustomerDto, GetCustomerQueryDto } from '../dto';

@Resolver()
export class CustomerAuthResolver {
  constructor(private authService: CustomerAuthService) { }

  @Query()
  async getCustomer(@Args('query') query: GetCustomerQueryDto) {
    return await this.authService.getCustomer(query);
  }

  @Mutation()
  async register(@Args('customer') customer: CreateCustomerDto) {
    return await this.authService.register(customer);
  }
}