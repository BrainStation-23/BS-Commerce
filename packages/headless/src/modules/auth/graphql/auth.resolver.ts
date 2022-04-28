import { AuthService } from '../services';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from 'src/entity/user';
import { SignInData } from 'src/entity/auth';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) { }

  /**
  * Mutation Start
  */

  @Mutation()
  async signUp(@Args('user') user: User) {
    return await this.authService.signUp(user);
  }

  @Mutation()
  async signIn(@Args('data') data: SignInData) {
    return await this.authService.signIn(data);
  }

  /**
   * Mutation End
   */
}
