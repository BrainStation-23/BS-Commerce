import { Injectable } from '@nestjs/common';
import { Tags } from 'src/entity/tags';
import { ITagsDatabase } from 'src/modules/tags/repositories/tags.database.interface';
import { TagsModel } from './tags.model';

@Injectable()
export class TagsDatabase implements ITagsDatabase {
  async getTags(query: Record<string, any>): Promise<Tags[] | []> {
    return await TagsModel.find(query).select('-_id').lean();
  }

  async getTag(query: Record<string, any>): Promise<Tags | null> {
    return await TagsModel.findOne(query).select('-_id').lean();
  }

  async createTag(data: { name: string }): Promise<Tags | null> {
    const tag = await TagsModel.create(data);
    return tag.toObject();
  }
}
