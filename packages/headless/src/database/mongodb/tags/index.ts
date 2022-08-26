import { Injectable } from '@nestjs/common';
import { Tag } from 'src/entity/tags';
import { ITagsDatabase } from 'src/modules/tags/repositories/tags.database.interface';
import { TagsModel } from './tags.model';

@Injectable()
export class TagsDatabase implements ITagsDatabase {
  async getTags(query: Record<string, any>): Promise<Tag[]> {
    return await TagsModel.find(query).select('-_id').lean();
  }

  async getTag(query: Record<string, any>): Promise<Tag | null> {
    return await TagsModel.findOne(query).select('-_id').lean();
  }

  async createTag(data: Tag): Promise<Tag | null> {
    const tag = await TagsModel.create(data);
    return tag?.toObject();
  }
}
