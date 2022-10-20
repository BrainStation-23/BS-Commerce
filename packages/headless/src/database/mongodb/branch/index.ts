import { Injectable } from '@nestjs/common';
import { CreateBranchRequest, Branch, AllBranchByStoreId } from 'models';
import { Store } from 'src/entity/store';
import { IBranchDatabase } from 'src/modules/branch/repositories/branch.database.interface';
import { StoreModel } from '../store/store.model';
import { BranchModel } from './branch.model';

@Injectable()
export class BranchDatabase implements IBranchDatabase {
    async createBranch(branch: CreateBranchRequest): Promise<Branch | null>{
      try {
        return await BranchModel.create(branch);
      } catch (err) {
        console.log(err)
        return null;
      }
    }

    async getStore (storeId: string): Promise<Store | null>{
        try{
            return await StoreModel.findOne({id: storeId})
            .select('-_id')
            .lean()
            .exec()
        }catch(err){
            return null;
        }
    };

    async getBranchByStoreId(storeId: string): Promise<AllBranchByStoreId | null>{
        try{
            const branchList = await BranchModel.find({store: storeId})
            .select('-_id')
            .lean()
            .exec()
            return {store: storeId, branchList};
        }catch(err){
            return null;
        }
    }

    async getBranch(query: Record<string, any>): Promise<Branch | null>{
        try{
            return await BranchModel.findOne(query)
            .select('-_id')
            .lean()
            .exec()
        }catch(err){
            return null;
        }
    }

}