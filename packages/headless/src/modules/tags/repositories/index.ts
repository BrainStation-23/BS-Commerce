import { Injectable } from '@nestjs/common';
import {
  HomePageProductsTagsRequest,
  Tag,
  UpdateHomePageTagsRequest
} from 'src/entity/tags';
import { ITagsDatabase } from './tags.database.interface';

@Injectable()
export class TagsRepository {
  constructor(private readonly db: ITagsDatabase) { }

  async getTags(query: Record<string, any>): Promise<Tag[]> {
    return await this.db.getTags(query);
  }

  async getTag(query: Record<string, any>): Promise<Tag | null> {
    return await this.db.getTag(query);
  }

  async createTag(data: { name: string }): Promise<Tag | null> {
    return await this.db.createTag(data);
  }

  async createHomePageProductsTags(data: HomePageProductsTagsRequest): Promise<Tag | null> {
    return await this.db.createHomePageProductsTags(data);
  }

  async updateHomePageProductsTag(tagId: string, data: UpdateHomePageTagsRequest): Promise<Tag | null> {
    return await this.db.updateHomePageProductsTag(tagId, data);
  }
}