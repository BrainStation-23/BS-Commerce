import { Compare, CompareItems } from 'src/entity/compare';
import { ICompareDatabase } from 'src/modules/compare/repositories/compare.db.interface';
import { CompareModel } from './compare.model';

export class CompareDatabase implements ICompareDatabase {
  async getCompareListByUserId(userId: string): Promise<Compare | null> {
    const compareList = await CompareModel.findOne({
      userId: userId,
    });
    return compareList;
  }

  async getCompareListById(
    userId: string,
    compareId: string,
  ): Promise<Compare | null> {
    const compareList = await CompareModel.findOne({
      id: compareId,
      userId,
    });

    return compareList;
  }

  async addItemToCompare(
    userId: string,
    productId: CompareItems,
  ): Promise<Compare> {
    return await CompareModel.findOneAndUpdate(
      { userId: userId },
      { $push: { items: productId } },
      { new: true },
    ).lean();
  }

  async createCompare(
    userId: string,
    productId: CompareItems,
  ): Promise<Compare> {
    return await CompareModel.create({
      userId: userId,
      items: [productId],
    });
  }
  async deleteCompareById(userId: string, compareId: string): Promise<Compare> {
    return await CompareModel.findOneAndRemove({
      id: compareId,
      userId,
    });
  }

  async deleteItemByProductId(
    userId: string,
    productId: string,
  ): Promise<Compare> {
    return await CompareModel.findOneAndUpdate(
      {
        userId: userId,
      },
      { $pull: { items: { productId } } },
      { new: true },
    );
  }

  async deleteAllItemByUserId(userId: string): Promise<Compare> {
    return await CompareModel.findOneAndUpdate(
      {
        userId: userId,
      },
      { $set: { items: [] } },
      { new: true },
    );
  }
}
