import { HttpStatus, Injectable } from '@nestjs/common';
import { Helper } from 'src/helper/helper.interface';
import { TagsRepository } from '../repositories';
import {
  GetTagsResponse,
  GetTagsErrorMessages,
  CreateTagResponse,
  CreateTagErrorMessages,
  CreateHomePageProductsTagsResponse,
  CreateHomePageProductsTagsErrorMessages,
  UpdateHomePageProductsTagErrorMessages,
  UpdateHomePageProductsTagResponse,
} from 'models';
import { HomePageProductsTagsRequest, UpdateHomePageTagsRequest } from 'src/entity/tags';

@Injectable()
export class TagsService {
  constructor(private tagsRepo: TagsRepository, private helper: Helper) { }

  async getTags(query: Record<string, any>): Promise<GetTagsResponse> {
    const tags = await this.tagsRepo.getTags({});
    if (!tags) return this.helper.serviceResponse.errorResponse(GetTagsErrorMessages.NO_TAGS_FOUND, null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(tags, HttpStatus.OK);
  }

  async updateHomePageProductsTag(tagId: string, data: UpdateHomePageTagsRequest): Promise<UpdateHomePageProductsTagResponse> {
    const tag = await this.tagsRepo.updateHomePageProductsTag(tagId, data);
    if (!tag) return this.helper.serviceResponse.errorResponse(UpdateHomePageProductsTagErrorMessages.CAN_NOT_UPDATE_HOME_PAGE_PRODUCTS_TAG, null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(tag, HttpStatus.OK);
  }

  async createTag(data: { name: string }): Promise<CreateTagResponse> {
    const doesNameMatch = await this.tagsRepo.getTag({ name: data.name });
    if (doesNameMatch) return this.helper.serviceResponse.errorResponse(CreateTagErrorMessages.TAG_NAME_EXISTS, null, HttpStatus.BAD_REQUEST);

    const tag = await this.tagsRepo.createTag(data);
    if (!tag) return this.helper.serviceResponse.errorResponse(CreateTagErrorMessages.CAN_NOT_CREATE_TAG, null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(tag, HttpStatus.CREATED);
  }

  async createHomePageProductsTags(data: HomePageProductsTagsRequest): Promise<CreateHomePageProductsTagsResponse> {
    const doesNameMatch = await this.tagsRepo.getTag({ name: data.name });
    if (doesNameMatch) return this.helper.serviceResponse.errorResponse(CreateHomePageProductsTagsErrorMessages.TAG_NAME_EXISTS, null, HttpStatus.BAD_REQUEST);

    const Tags = await this.tagsRepo.createHomePageProductsTags(data);
    if (!Tags) return this.helper.serviceResponse.errorResponse(CreateHomePageProductsTagsErrorMessages.CAN_NOT_CREATE_HOME_PAGE_PRODUCT_TAG, null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(Tags, HttpStatus.CREATED);
  }
}