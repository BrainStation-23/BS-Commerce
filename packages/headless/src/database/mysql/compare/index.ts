import { Compare } from 'src/entity/compare';
import { ICompareDatabase } from 'src/modules/compare/repositories/compare.db.interface';
import CompareModel from './compare.model';

export class CompareDatabase implements ICompareDatabase {
  private async findOneByUserId(userId: string): Promise<any | null> {
    const res = await (
      await CompareModel.findOne({ where: { userId } })
    ).get({ plain: true });
    res.items.map((e) => e);
  }

  async getCompareListByUserId(userId: string): Promise<any | null> {
    return await this.findOneByUserId(userId);
  }

  async getCompareListById(
    userId: string,
    compareId: string,
  ): Promise<any | null> {
    const compareList = await CompareModel.findOne({
      where: {
        id: compareId,
        userId,
      },
    });

    return compareList;
  }

  async addItemToCompare(userId: string, productId: string): Promise<Compare> {
    const compareDoc = await this.findOneByUserId(userId);
    compareDoc.items.push(productId);
    await CompareModel.update(compareDoc, { where: { userId: userId } });
    return await this.findOneByUserId(userId);
  }

  async createCompare(userId: string, productId: string): Promise<Compare> {
    return (
      await CompareModel.create({
        userId: userId,
        items: [{ productId }],
      })
    ).get({ plain: true });
  }
  async deleteCompareById(userId: string, compareId: string): Promise<boolean> {
    const compareDoc = await CompareModel.destroy({
      where: {
        id: compareId,
        userId,
      },
    });
    if (compareDoc) return true;
    return false;
  }

  async deleteItemByProductId(
    userId: string,
    productId: string,
  ): Promise<Compare> {
    const compareDoc = await this.findOneByUserId(userId);
    compareDoc.items = compareDoc.items.filter((e) => e !== productId);
    await CompareModel.update(compareDoc, { where: { userId: userId } });
    return await this.findOneByUserId(userId);
  }

  async deleteAllItemByUserId(userId: string): Promise<Compare> {
    const compareDoc = await this.findOneByUserId(userId);
    compareDoc.items = [];
    await CompareModel.update(compareDoc, { where: { userId: userId } });
    return await this.findOneByUserId(userId);
  }
}
