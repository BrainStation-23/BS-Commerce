import { Injectable } from '@nestjs/common';
import { CreateBranchRequest, Branch, AllBranchByStoreId } from 'models';
import mongoose from 'mongoose';
import { ActionType, BranchHistory } from 'src/entity/branch-history';
import { Store } from 'src/entity/store';
import { IBranchDatabase } from 'src/modules/branch/repositories/branch.database.interface';
import { BranchHistoryModel } from '../store-branch/branchHistory.model';
import { TmpStoreBranchModel } from '../store-branch/tempStoreBranch.model';
import { StoreModel } from '../store/store.model';
import { BranchModel } from './branch.model';

@Injectable()
export class BranchDatabase implements IBranchDatabase {
  async createBranch(branch: CreateBranchRequest): Promise<Branch | null> {
    try {
      return await BranchModel.create(branch);
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async createBranchHistory(history: BranchHistory) {
    try {
      await BranchHistoryModel.create(history);
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async getHistory(query: Record<string, any>) {
    try {
      return await BranchHistoryModel.findOne(
        query,
        '-_id -createdAt -updatedAt',
      ).lean();
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async getStore(storeId: string): Promise<Store | null> {
    try {
      return await StoreModel.findOne({ id: storeId })
        .select('-_id')
        .lean()
        .exec();
    } catch (err) {
      return null;
    }
  }

  async getBranchByStoreId(
    storeId: string,
  ): Promise<AllBranchByStoreId | null> {
    try {
      const branchList = await BranchModel.find({ store: storeId })
        .select('-_id')
        .lean()
        .exec();
      return { store: storeId, branchList };
    } catch (err) {
      return null;
    }
  }

  async getBranch(query: Record<string, any>): Promise<Branch | null> {
    try {
      return await BranchModel.findOne(query).select('-_id').lean().exec();
    } catch (err) {
      return null;
    }
  }

  async updateStatus(branchId: string, status: string): Promise<Branch | null> {
    const session = await mongoose.startSession();
    try {
      session.startTransaction();
      const updatedBranch = await TmpStoreBranchModel.findOneAndUpdate(
        { id: branchId },
        { status },
        { new: true, session },
      )
        .select('-_id')
        .lean()
        .exec();

      await TmpStoreBranchModel.findOneAndDelete(
        {
          id: branchId,
        },
        { session },
      );

      const newCollection = await new BranchModel(updatedBranch).save({
        session,
      });
      await session.commitTransaction();
      return newCollection;
    } catch (err) {
      await session.abortTransaction();
      await session.endSession();
      return null;
    } finally {
      await session.endSession();
    }
  }

  async updateBranchHistory(name: string, actions: ActionType) {
    try {
      await BranchHistoryModel.findOneAndUpdate(
        {
          branchName: name,
        },
        { $push: { actions } },
        { new: true },
      )
        .select('-_id')
        .lean()
        .exec();
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
