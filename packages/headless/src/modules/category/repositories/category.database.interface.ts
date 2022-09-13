import { Injectable } from '@nestjs/common';
import {
  Category,
  RequestCategory,
  responseCategory,
} from 'src/entity/category';

@Injectable()
export abstract class ICategoryDatabase {
  abstract getCategory: (
    query: Record<string, any>,
  ) => Promise<Category | null>;
  abstract getCategoryList: () => Promise<responseCategory[] | null>;
  abstract createCategory: (
    category: RequestCategory,
  ) => Promise<Category | null>;
}
