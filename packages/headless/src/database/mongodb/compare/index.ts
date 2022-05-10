import { Compare } from 'src/entity/compare';
import { ICompareDatabase } from 'src/modules/compare/repositories/compare.db.interface';
import { CompareModel } from './compare.model';

export class CompareDatabase implements ICompareDatabase {
  async getCompareListByUserId(userId: string): Promise<Compare | null> {
    return await CompareModel.findOne({
      userId: userId,
    }).lean();
  }
  async getCompareListById(
    userId: string,
    compareId: string,
  ): Promise<Compare | null> {
    return await CompareModel.findOne({ _id: compareId, userId }).lean();
  }

  async addItemToCompare(userId: string, productId: string): Promise<Compare> {
    return await CompareModel.findOneAndUpdate(
      { userId: userId },
      { $push: { items: productId } },
      { new: true },
    ).lean();
  }

  async createCompare(userId: string, productId: string): Promise<Compare> {
    return await CompareModel.create({
      userId: userId,
      items: [productId],
    });
  }
  async deleteCompareById(userId: string, compareId: string): Promise<boolean> {
    return await CompareModel.findOneAndRemove({
      _id: compareId,
      userId,
    }).lean();
  }

  async deleteItemByProductId(
    userId: string,
    productId: string,
  ): Promise<Compare> {
    return await CompareModel.findOneAndUpdate(
      {
        userId: userId,
      },
      { $pull: { items: productId } },
      { new: true },
    ).lean();
  }

  async deleteAllItemByUserId(userId: string): Promise<Compare> {
    return await CompareModel.findOneAndUpdate(
      {
        userId: userId,
      },
      { $set: { items: [] } },
      { new: true },
    ).lean();
  }
}
