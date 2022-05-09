import { Injectable } from '@nestjs/common';
import { Compare, CompareData } from 'src/entity/compare';
import { ICompareDatabase } from './compare.db.interface';

@Injectable()
export class CompareRepository {
  constructor(private db: ICompareDatabase) {}

  async getCompareByUserId(userId: string): Promise<Compare | null> {
    return await this.db.getCompareListByUserId(userId);
  }

  async addItemToCompare(
    userId: string,
    body: CompareData,
  ): Promise<Compare | null> {
    return await this.db.addItemToCompare(userId, body);
  }

  async createCompare(
    userId: string,
    body: CompareData,
  ): Promise<Compare | null> {
    return await this.db.createCompare(userId, body);
  }
}
