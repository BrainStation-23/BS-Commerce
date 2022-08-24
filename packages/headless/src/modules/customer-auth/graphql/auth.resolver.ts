import { CustomerAuthService } from '../services';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import {
  CreateCustomerInput,
  CustomerSignInDataInput,
  GetAuthCustomerQuery,
  GetCustomerAuthResponse,
  RegistrationAuthResponse,
  SendOtpInput,
  SendOtpAuthResponse,
  SignInAuthResponse,
  VerifyOtpInput,
  VerifyOtpAuthResponse,
  ForgotPasswordResponse,
  CustomerForgotPasswordDataInput,
} from './auth.model';
import { Helper } from 'src/helper/helper.interface';

@Resolver()
export class CustomerAuthResolver {
  constructor(private authService: CustomerAuthService, private helper: Helper) { }

  @Query(() => GetCustomerAuthResponse)
  async getCustomer(@Args('query', { nullable: true }) query?: GetAuthCustomerQuery) {
    const res = await this.authService.getCustomer(query);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => RegistrationAuthResponse)
  async register(@Args('customer') customer: CreateCustomerInput) {
    const res = await this.authService.register(customer);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => SendOtpAuthResponse)
  async sendOtpForRegistration(@Args('data', { nullable: true }) data?: SendOtpInput) {
    const res = await this.authService.registerSendOTP(data);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => SignInAuthResponse)
  async customerSignIn(@Args('data') data: CustomerSignInDataInput) {
    const res = await this.authService.signIn(data);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => SendOtpAuthResponse)
  async sendOtpForForgotPassword(@Args('data', { nullable: true }) data?: SendOtpInput) {
    const res = await this.authService.forgotPasswordSendOTP(data);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => VerifyOtpAuthResponse)
  async verifyOtpForForgotPassword(@Args('data', { nullable: true }) data?: VerifyOtpInput) {
    const res = await this.authService.forgotPasswordVerifyOTP(data);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => ForgotPasswordResponse)
  async forgotPassword(@Args('data') data: CustomerForgotPasswordDataInput) {
    const res = await this.authService.forgotPassword(data);
    return this.helper.serviceResponse.graphqlResponse(res);
  }
}