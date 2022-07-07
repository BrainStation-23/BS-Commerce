import { Injectable } from '@nestjs/common';
import { Tags } from 'src/entity/tags';

@Injectable()
export abstract class ITagsDatabase {
  abstract getTags: (query: Record<string, any>) => Promise<Tags[] | []>;
}