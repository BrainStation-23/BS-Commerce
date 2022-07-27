import { AuthService } from '../services';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  AdminSignUpResponse,
  AdminSignInInput,
  AdminSignInResponse,
  AdminSignUpInput
} from './auth.model';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) { }

  @Mutation(returns => AdminSignUpResponse)
  async signUp(@Args('admin') admin: AdminSignUpInput) {
    return await this.authService.signUp(admin);
  }

  @Mutation(returns => AdminSignInResponse)
  async signIn(@Args('data') data: AdminSignInInput) {
    return await this.authService.signIn(data);
  }
}