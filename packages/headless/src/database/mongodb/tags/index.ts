import { Injectable } from '@nestjs/common';
import { ITagsDatabase } from '../../../modules/tags/repositories/tags.database.interface';
import { TagsModel } from './tags.model';
import { Tag, UpdateTagRequest } from '../../../entity/tags';

@Injectable()
export class TagsDatabase implements ITagsDatabase {
  async getTags(query: Record<string, any>): Promise<Tag[] | []> {
    return await TagsModel.find(query).select('-_id').lean();
  }

  async getTag(query: Record<string, any>): Promise<Tag | null> {
    return await TagsModel.findOne(query).select('-_id').lean();
  }

  async createTag(data: Tag): Promise<Tag | null> {
    const tag = await TagsModel.create(data);
    return tag?.toObject();
  }

  async updateTag(
    query: Record<string, any>,
    data: UpdateTagRequest,
  ): Promise<Tag | null> {
    return await TagsModel.findOneAndUpdate(
      query,
      { $set: data },
      { new: true },
    )
      .select('-_id')
      .lean();
  }
}
