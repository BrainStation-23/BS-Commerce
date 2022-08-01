import { CustomerAuthService } from '../services';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import {
  CreateCustomerInput,
  CustomerSignInDataInput,
  GetAuthCustomerQuery,
  GetCustomerAuthResponse,
  RegistrationAuthResponse,
  SignInAuthResponse,
} from './auth.model';

@Resolver()
export class CustomerAuthResolver {
  constructor(private authService: CustomerAuthService) { }

  @Query(() => GetCustomerAuthResponse)
  async getCustomer(@Args('query') query: GetAuthCustomerQuery) {
    console.log(query)
    return await this.authService.getCustomer(query);
  }

  @Mutation(() => RegistrationAuthResponse)
  async register(@Args('customer') customer: CreateCustomerInput) {
    return await this.authService.register(customer);
  }

  @Mutation(() => SignInAuthResponse)
  async customerSignIn(@Args('data') data: CustomerSignInDataInput) {
    return await this.authService.signIn(data);
  }
}