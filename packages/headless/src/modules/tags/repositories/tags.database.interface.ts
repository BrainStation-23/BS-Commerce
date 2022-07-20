import { Injectable } from '@nestjs/common';
import { Tag } from 'src/entity/tags';

@Injectable()
export abstract class ITagsDatabase {
  abstract getTags: (query: Record<string, any>) => Promise<Tag[]>;
  abstract getTag: (query: Record<string, any>) => Promise<Tag | null>;
  abstract createTag: (data: { name: string }) => Promise<Tag | null>;
}