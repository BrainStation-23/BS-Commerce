import { Injectable } from '@nestjs/common';
import { CreateBranchRequest, Branch, AllBranchByStoreId } from 'models';
import { Store } from 'src/entity/store';
import { IBranchDatabase } from 'src/modules/branch/repositories/branch.database.interface';
import { StoreModel } from '../store/store.model';
import { BranchModel } from './branch.model';

@Injectable()
export class BranchDatabase implements IBranchDatabase {
    async createBranch(branch: CreateBranchRequest): Promise<Branch | null>{
        return await BranchModel.create(branch);
    }

    async getStore (storeId: string): Promise<Store | null>{
        try{
            const store = await StoreModel.findOne({id: storeId});
            return store;
        }catch(err){
            return null;
        }
    };

    async getBranchByStoreId(storeId: string): Promise<AllBranchByStoreId | null>{
        try{        
            const branchList = await BranchModel.find({store: storeId});
            return {store: storeId, branchList};
        }catch(err){
            return null;
        }
        
    }

    async getBranch(branchId: string): Promise<Branch | null>{
        try{        
            const branch = await BranchModel.findOne({id: branchId});
            console.log(branch)
            return branch;
        }catch(err){
            return null;
        }
        
    }
    
}