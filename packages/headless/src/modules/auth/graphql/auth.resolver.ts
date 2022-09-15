import { AuthService } from '../services';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import {
  AdminSignUpResponse,
  AdminSignInInput,
  AdminSignInResponse,
  AdminSignUpInput,
} from './auth.model';
import { Helper } from 'src/helper/helper.interface';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService, private helper: Helper) {}

  @Mutation(() => AdminSignUpResponse)
  async signUp(@Args('admin') admin: AdminSignUpInput) {
    const res = await this.authService.signUp(admin);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => AdminSignInResponse)
  async signIn(@Args('data') data: AdminSignInInput) {
    const res = await this.authService.signIn(data);
    return this.helper.serviceResponse.graphqlResponse(res);
  }
}
