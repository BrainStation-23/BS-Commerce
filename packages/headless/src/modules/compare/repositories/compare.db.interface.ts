import { Injectable } from '@nestjs/common';
import { Compare, CompareData } from 'src/entity/compare';

@Injectable()
export abstract class ICompareDatabase {
  abstract getCompareListByUserId: (userId: string) => Promise<Compare | null>;
  abstract addItemToCompare: (
    userId: string,
    body: CompareData,
  ) => Promise<Compare | null>;
  abstract createCompare: (
    userId: string,
    body: CompareData,
  ) => Promise<Compare | null>;
}
