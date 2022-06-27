import { Compare, CompareItems } from 'src/entity/compare';
import { ICompareDatabase } from 'src/modules/compare/repositories/compare.db.interface';
import { ProductModel } from '../product/product.model';
import { CompareModel } from './compare.model';

export class CompareDatabase implements ICompareDatabase {
  async getCompareListByUserId(userId: string): Promise<Compare | null> {
    const compareList = await CompareModel.findOne({
      userId,
    }).lean();
    return await this.mappedProductDetails(compareList);
  }

  async getCompareListById(userId: string, compareId: string): Promise<Compare | null> {
    const compareList = await CompareModel.findOne({
      id: compareId,
      userId,
    }).lean();
    return await this.mappedProductDetails(compareList);
  }

  async addItemToCompare(userId: string, productId: CompareItems): Promise<Compare> {
    const compareList = await CompareModel.findOneAndUpdate(
      { userId: userId },
      { $addToSet: { items: productId } },
      { new: true },
    ).lean();
    return await this.mappedProductDetails(compareList);
  }

  async createCompare(userId: string, productId: CompareItems): Promise<Compare> {
    const compareList = await CompareModel.create({
      userId: userId,
      items: [productId],
    });
    return await this.mappedProductDetails(compareList);
  }

  async deleteCompareById(userId: string, compareId: string): Promise<Compare> {
    return await CompareModel.findOneAndRemove({
      id: compareId,
      userId,
    }).lean();
  }

  async deleteItemByProductId(userId: string, productId: string): Promise<Compare> {
    return await CompareModel.findOneAndUpdate(
      {
        userId: userId,
      },
      { $pull: { items: { productId } } },
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

  // private functions

  private async mappedProductDetails(compareList: Compare): Promise<Compare> {
    const productIds = compareList.items.map((item) => item.productId);
    const productDetails = await ProductModel.find({
      id: { $in: productIds },
    }).select('info photos id -_id');

    const mappedItems = productDetails.map((e) => {
      const { name, price, shortDescription, fullDescription } = e.info;
      return {
        productId: e.id,
        productDetails: {
          info: { name, price, shortDescription, fullDescription },
          photos: e.photos.map((e) => e.url),
        },
      };
    });
    compareList.items = mappedItems;
    return compareList;
  }
}
