import { Injectable } from '@nestjs/common';
import { Compare, CompareItems } from 'src/entity/compare';
import { CompareItemsDetails } from '../dto/compare.dto';
import { ICompareDatabase } from './compare.db.interface';

@Injectable()
export class CompareRepository {
  constructor(private db: ICompareDatabase) {}

  async getCompareByUserId(userId: string): Promise<Compare | null> {
    return await this.db.getCompareListByUserId(userId);
  }
  async getCompareById(
    userId: string,
    compareId: string,
  ): Promise<Compare | null> {
    return await this.db.getCompareListById(userId, compareId);
  }

  async deleteCompareById(
    userId: string,
    compareId: string,
  ): Promise<Compare | null> {
    return await this.db.deleteCompareById(userId, compareId);
  }

  async getProduct(productId: string): Promise<Boolean> {
    return await this.db.getProduct(productId);
  }
  async deleteItemByProductId(
    userId: string,
    productId: string,
  ): Promise<Compare | null> {
    return await this.db.deleteItemByProductId(userId, productId);
  }
  async deleteAllItemByUserId(userId: string): Promise<Compare | null> {
    return await this.db.deleteAllItemByUserId(userId);
  }

  async addItemToCompare(
    userId: string,
    productId: CompareItems,
  ): Promise<Compare | null> {
    return await this.db.addItemToCompare(userId, productId);
  }

  async  getProductDetails( productId: string ): Promise<CompareItems[] | null> {
    return await this.db. getProductDetails(productId);
  }
  async createCompare(
    userId: string,
    productId: CompareItems,
  ): Promise<Compare | null> {
    return await this.db.createCompare(userId, productId);
  }
}
