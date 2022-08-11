import { CustomerAuthService } from '../services';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import {
  CreateCustomerInput,
  CustomerSignInDataInput,
  GetAuthCustomerQuery,
  GetCustomerAuthResponse,
  RegistrationAuthResponse,
  SendCreateCustomerOtpInput,
  SendOtpAuthResponse,
  SignInAuthResponse,
  VerifyCreateCustomerOtpInput,
  VerifyOtpAuthResponse,
} from './auth.model';
import { Helper } from 'src/helper/helper.interface';

@Resolver()
export class CustomerAuthResolver {
  constructor(private authService: CustomerAuthService, private helper: Helper) { }

  @Query(() => GetCustomerAuthResponse)
  async getCustomer(@Args('query', {nullable: true}) query?: GetAuthCustomerQuery) {
    const res = await this.authService.getCustomer(query);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => RegistrationAuthResponse)
  async register(@Args('customer') customer: CreateCustomerInput) {
    const res = await this.authService.register(customer);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  
  @Mutation(() => SendOtpAuthResponse)
  async sendOtp(@Args('data', {nullable: true}) data?: SendCreateCustomerOtpInput) {
    const res = await this.authService.sendOtp(data);
    return this.helper.serviceResponse.graphqlResponse(res);
  }


  @Mutation(() => VerifyOtpAuthResponse)
  async verifyOtp(@Args('data', {nullable: true}) data?: VerifyCreateCustomerOtpInput) {
    const res = await this.authService.verifyOtp(data);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => SignInAuthResponse)
  async customerSignIn(@Args('data') data: CustomerSignInDataInput) {
    const res = await this.authService.signIn(data);
    return this.helper.serviceResponse.graphqlResponse(res);
  }
}