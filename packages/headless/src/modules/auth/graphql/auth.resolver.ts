import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from '../services';
import {
  AuthResponse,
  SignInInput,
  SignInResponse,
  UserInput,
} from './auth.gql.model';

@Resolver(() => UserInput)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  /**
   * Mutation Start
   */

  @Mutation(() => AuthResponse)
  async signUp(@Args('user') user: UserInput) {
    return await this.authService.signUp(user);
  }

  @Mutation(() => SignInResponse)
  async signIn(@Args('data') data: SignInInput) {
    return await this.authService.signIn(data);
  }

  /**
   * Mutation End
   */
}
