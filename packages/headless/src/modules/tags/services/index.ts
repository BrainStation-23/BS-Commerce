import { HttpStatus, Injectable } from '@nestjs/common';
import { Helper } from 'src/helper/helper.interface';
import { TagsRepository } from '../repositories';
import {
  GetTagsResponse,
  GetTagsErrorMessages,
} from 'models';

@Injectable()
export class TagsService {
  constructor(private tagsRepo: TagsRepository, private helper: Helper) { }

  async getTags(query: Record<string, any>): Promise<GetTagsResponse> {
    const tags = await this.tagsRepo.getTags({});
    if (!tags?.length) return this.helper.serviceResponse.errorResponse(GetTagsErrorMessages.NO_TAGS_FOUND, null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(tags, HttpStatus.OK);
  }
}