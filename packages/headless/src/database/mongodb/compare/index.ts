import mongoose from 'mongoose';
import { Compare, CompareData } from 'src/entity/compare';
import { ICompareDatabase } from 'src/modules/compare/repositories/compare.db.interface';
import { CompareModel } from './compare.model';

export class CompareDatabase implements ICompareDatabase {
  async getCompareListByUserId(userId: string): Promise<Compare | null> {
    return await CompareModel.findOne({
      user: new mongoose.Types.ObjectId(userId),
    }).lean();
  }

  async addItemToCompare(userId: string, body: CompareData): Promise<Compare> {
    return await CompareModel.findOneAndUpdate(
      { user: new mongoose.Types.ObjectId(userId) },
      { $push: { items: new mongoose.Types.ObjectId(body.productId) } },
      { new: true },
    ).lean();
  }

  async createCompare(userId: string, body: CompareData): Promise<Compare> {
    return await CompareModel.create({
      user: new mongoose.Types.ObjectId(userId),
      items: [new mongoose.Types.ObjectId(body.productId)],
    });
  }
}
