import { CustomerAuthService } from '../services';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateCustomerDto } from '../dto';

@Resolver()
export class CustomerAuthResolver {
  constructor(private authService: CustomerAuthService) { }

  @Mutation()
  async register(@Args('customer') customer: CreateCustomerDto) {
    return await this.authService.register(customer);
  }
}