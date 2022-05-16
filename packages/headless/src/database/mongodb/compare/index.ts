import { Compare } from 'src/entity/compare';
import { Product } from 'src/entity/product';
import { ICompareDatabase } from 'src/modules/compare/repositories/compare.db.interface';
import { ProductModel } from '../product/product.model';
import { CompareModel } from './compare.model';

export class CompareDatabase implements ICompareDatabase {
  async getCompareListByUserId(userId: string): Promise<Compare | null> {
    const compareList = await CompareModel.findOne({
      userId: userId,
    }).lean();

    const products: Product[] = await ProductModel.find({
      id: { $in: compareList.items },
    }).select('info photos id -_id');

    compareList.items = products.map((e) => {
      return {
        productId: e.id,
        product: e,
      };
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
    }).lean();

    const products: Product[] = await ProductModel.find({
      id: { $in: compareList.items },
    }).select('info photos id -_id');

    compareList.items = products.map((e) => {
      return {
        productId: e.id,
        product: e,
      };
    });

    return compareList;
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
      id: compareId,
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
