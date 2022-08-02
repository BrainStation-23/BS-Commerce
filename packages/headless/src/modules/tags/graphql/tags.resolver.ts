import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Helper } from 'src/helper/helper.interface';
import { TagsService } from '../services';
import { CreateTagInput, CreateTagResponse, TagResponse } from './tags.model';

@Resolver()
export class TagsResolver {
  constructor(private tagsService: TagsService, private helper: Helper) { }

  @Query(() => TagResponse)
  async getTags() {
    const res = await this.tagsService.getTags({});
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => CreateTagResponse)
  async createTag(@Args('data') data: CreateTagInput) {
    const res = await this.tagsService.createTag(data);
    return this.helper.serviceResponse.graphqlResponse(res);
  }
}