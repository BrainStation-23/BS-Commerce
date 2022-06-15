import { Compare, CompareItems } from 'src/entity/compare';
import { ICompareDatabase } from 'src/modules/compare/repositories/compare.db.interface';
import { CompareModel } from './compare.model';

export class CompareDatabase implements ICompareDatabase {
	async getCompareListByUserId(userId: string): Promise<Compare | null> {
		const compareList = await CompareModel.findOne({
			userId,
		}).lean();
		return compareList;
	}

	async getCompareListById(userId: string, compareId: string): Promise<Compare | null> {
		const compareList = await CompareModel.findOne({
			id: compareId,
			userId,
		}).lean();

		return compareList;
	}

	async addItemToCompare(userId: string, productId: CompareItems): Promise<Compare> {
		return await CompareModel.findOneAndUpdate(
			{ userId: userId },
			{ $addToSet: { items: productId } },
			{ new: true },
		).lean();
	}

	async createCompare(userId: string, productId: CompareItems): Promise<Compare> {
		return await CompareModel.create({
			userId: userId,
			items: [productId],
		});
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
}
