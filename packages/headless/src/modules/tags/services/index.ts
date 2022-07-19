import { HttpStatus, Injectable } from '@nestjs/common';
import { Helper } from 'src/helper/helper.interface';
import { TagsRepository } from '../repositories';
import {
  GetTagsResponse,
  GetTagsErrorMessages,
  CreateTagResponse,
  CreateTagErrorMessages,
} from 'models';
import { CreateTagRequestBodyDto } from '../dto';

@Injectable()
export class TagsService {
  constructor(private tagsRepo: TagsRepository, private helper: Helper) { }

  async getTags(query: Record<string, any>): Promise<GetTagsResponse> {
    const tags = await this.tagsRepo.getTags({});
    if (!tags?.length) return this.helper.serviceResponse.errorResponse(GetTagsErrorMessages.NO_TAGS_FOUND, null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(tags, HttpStatus.OK);
  }

  async createTag(data: CreateTagRequestBodyDto): Promise<CreateTagResponse> {
    const doesNameMatch = await this.tagsRepo.getTag({ name: data.name });
    if (doesNameMatch) return this.helper.serviceResponse.errorResponse(CreateTagErrorMessages.TAG_NAME_EXISTS, null, HttpStatus.BAD_REQUEST);

    const tag = await this.tagsRepo.createTag(data);
    if (!tag) return this.helper.serviceResponse.errorResponse(CreateTagErrorMessages.CAN_NOT_CREATE_TAG, null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(tag, HttpStatus.OK);
  }
}