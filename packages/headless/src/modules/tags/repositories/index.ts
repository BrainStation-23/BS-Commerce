import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Tag, UpdateTagRequest } from 'src/entity/tags';
import { ITagsDatabase } from './tags.database.interface';

@Injectable()
export class TagsRepository {
  constructor(private readonly db: ITagsDatabase) {}

  async getTags(query: Record<string, any>): Promise<Tag[]> {
    return await this.db.getTags(query);
  }

  async getTag(query: Record<string, any>): Promise<Tag | null> {
    return await this.db.getTag(query);
  }

  async createTag(data: Tag): Promise<Tag | null> {
    data.id = randomUUID();
    return await this.db.createTag(data);
  }

  async updateTag(
    query: Record<string, any>,
    data: UpdateTagRequest,
  ): Promise<Tag | null> {
    return await this.db.updateTag(query, data);
  }
}
