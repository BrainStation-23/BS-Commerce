import { Injectable } from '@nestjs/common';
import {
  HomePageProductsTagsRequest,
  Tag,
  UpdateHomePageTagsRequest
} from 'src/entity/tags';

@Injectable()
export abstract class ITagsDatabase {
  abstract getTags: (query: Record<string, any>) => Promise<Tag[]>;
  abstract getTag: (query: Record<string, any>) => Promise<Tag | null>;
  abstract createTag: (data: { name: string }) => Promise<Tag | null>;
  abstract createHomePageProductsTags: (data: HomePageProductsTagsRequest) => Promise<Tag | null>;
  abstract updateHomePageProductsTag: (tagId: string, data: UpdateHomePageTagsRequest) => Promise<Tag | null>;
}