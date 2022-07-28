import { AuthService } from '../services';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  AdminSignUpResponse,
  AdminSignInInput,
  AdminSignInResponse,
  AdminSignUpInput
} from './auth.model';
import { Helper } from 'src/helper/helper.interface';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService, private helper: Helper) { }

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Mutation(returns => AdminSignUpResponse)
  async signUp(@Args('admin') admin: AdminSignUpInput) {
    // return await this.authService.signUp(admin);
    const res = await this.authService.signUp(admin);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(returns => AdminSignInResponse)
  async signIn(@Args('data') data: AdminSignInInput) {
    return await this.authService.signIn(data);
  }
}