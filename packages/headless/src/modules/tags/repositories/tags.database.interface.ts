import { Injectable } from '@nestjs/common';
import {
  Tag, updateTagRequest,
} from 'src/entity/tags';

@Injectable()
export abstract class ITagsDatabase {
  abstract getTags: (query: Record<string, any>) => Promise<Tag[]>;
  abstract getTag: (query: Record<string, any>) => Promise<Tag | null>;
  abstract createTag: (data: Tag) => Promise<Tag | null>;
  abstract updateTag: (id: string, data: updateTagRequest) => Promise<Tag | null>;
}