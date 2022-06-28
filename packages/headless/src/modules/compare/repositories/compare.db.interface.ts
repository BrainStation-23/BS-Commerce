import { Injectable } from '@nestjs/common';
import { Compare, CompareItems } from 'src/entity/compare';

@Injectable()
export abstract class ICompareDatabase {
  abstract getCompareListByUserId: (userId: string) => Promise<Compare | null>;
  abstract getCompareListById: (
    userId: string,
    compareId: string,
  ) => Promise<Compare | null>;
  abstract deleteCompareById: (
    userId: string,
    compareId: string,
  ) => Promise<Compare | null>;
  abstract deleteItemByProductId: (
    userId: string,
    productId: string,
  ) => Promise<Compare | null>;
  abstract deleteAllItemByUserId: (userId: string) => Promise<Compare | null>;
  abstract addItemToCompare: (
    userId: string,
    productId: CompareItems,
  ) => Promise<Compare | null>;
  abstract createCompare: (
    userId: string,
    productId: CompareItems,
  ) => Promise<Compare | null>;
}
