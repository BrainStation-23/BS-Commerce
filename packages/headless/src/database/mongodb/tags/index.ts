import { Injectable } from '@nestjs/common';
import { Tags } from 'src/entity/tags';
import { ITagsDatabase } from 'src/modules/tags/repositories/tags.database.interface';
import { TagsModel } from './wishList.model';

@Injectable()
export class TagsDatabase implements ITagsDatabase {
  async getTags(query: Record<string, any>): Promise<Tags[] | []> {
    return await TagsModel.find(query).lean();
  }
}
