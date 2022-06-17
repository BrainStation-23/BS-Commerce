import { CustomerAuthService } from '../services';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateCustomerRequest } from 'models';

@Resolver()
export class CustomerAuthResolver {
  constructor(private authService: CustomerAuthService) { }

  @Mutation()
  async register(@Args('customer') customer: CreateCustomerRequest) {
    return await this.authService.register(customer);
  }
}