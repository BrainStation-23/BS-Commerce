import { MediaService } from '../services';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateUserDto } from '../dto';

@Resolver()
export class MediaResolver {
  constructor(private mediaService: MediaService) { }

  @Mutation()
  async signUp(@Args('user') user: CreateUserDto) {
    return await this.mediaService.signUp(user);
  }
}
