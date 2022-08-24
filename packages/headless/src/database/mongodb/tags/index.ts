import { Injectable } from '@nestjs/common';
import {
  HomePageProductsTagsRequest,
  Tag,
  UpdateHomePageTagsRequest
} from 'src/entity/tags';
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

  async createTag(data: { name: string }): Promise<Tag | null> {
    const tag = await TagsModel.create(data);
    return tag?.toObject();
  }

  async createHomePageProductsTags(data: HomePageProductsTagsRequest): Promise<Tag | null> {
    const tag = await TagsModel.create(data);
    return tag?.toObject();
  }

  async updateHomePageProductsTag(tagId: string, data: UpdateHomePageTagsRequest): Promise<Tag | null> {
    return await TagsModel.findOneAndUpdate({ id: tagId }, { $set: data }, { new: true }).select('-_id').lean().exec();
  }
}
