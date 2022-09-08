import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RolesGuard } from 'src/guards/auth.guard';
import { Helper } from 'src/helper/helper.interface';
import { TagsService } from '../services';
import {
  CreateTagInput,
  TagResponse,
  TagsResponse,
  UpdateTagInput,
} from './tags.model';

@Resolver()
export class TagsResolver {
  constructor(private tagsService: TagsService, private helper: Helper) { }

  @Query(() => TagsResponse)
  async getTags() {
    const res = await this.tagsService.getTags();
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Query(() => TagResponse)
  async getTag(@Args('tagId') tagId: string,) {
    const res = await this.tagsService.getTag(tagId);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Query(() => TagsResponse)
  async getHomePageProductsTags() {
    const res = await this.tagsService.getHomePageProductsTags();
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => TagResponse)
  @UseGuards(new RolesGuard(['admin']))
  async createTag(@Args('data') data: CreateTagInput) {
    const res = await this.tagsService.createTag(data);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => TagResponse)
  @UseGuards(new RolesGuard(['admin']))
  async createHomePageProductsTag(@Args('data') data: CreateTagInput) {
    const res = await this.tagsService.createHomePageProductsTag(data);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => TagResponse)
  @UseGuards(new RolesGuard(['admin']))
  async updateTag(@Args('tagId') tagId: string, @Args('data') data: UpdateTagInput) {
    const res = await this.tagsService.updateTag(tagId, data);
    return this.helper.serviceResponse.graphqlResponse(res);
  }
}