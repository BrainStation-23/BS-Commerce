import { Query, Resolver } from '@nestjs/graphql';
import { TagsService } from '../services';

@Resolver()
export class TagsResolver {
  constructor(private tagsService: TagsService) { }

  @Query()
  async getTags() {
    return await this.tagsService.getTags({});
  }
}