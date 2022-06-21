import { MediaService } from '../services';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class MediaResolver {
  constructor(private mediaService: MediaService) { }

  
}
