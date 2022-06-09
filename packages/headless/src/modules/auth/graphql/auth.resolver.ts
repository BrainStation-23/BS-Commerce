import { AuthService } from '../services';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateUserDto, SignInDataDto } from '../dto';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) { }

  @Mutation()
  async signUp(@Args('user') data: CreateUserDto) {
    return await this.authService.signUp(data);
  }

  @Mutation()
  async signIn(@Args('data') data: SignInDataDto) {
    return await this.authService.signIn(data);
  }
}
