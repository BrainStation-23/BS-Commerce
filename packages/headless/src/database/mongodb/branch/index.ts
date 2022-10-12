import { Injectable } from '@nestjs/common';
import { CreateBranchRequest, Branch, AllBranchByStoreId } from 'models';
import { IBranchDatabase } from 'src/modules/branch/repositories/branch.database.interface';
import { BranchModel } from './branch.model';

@Injectable()
export class BranchDatabase implements IBranchDatabase {
    async createBranch(branch: CreateBranchRequest): Promise<Branch | null>{
        return await BranchModel.create(branch);
    }

    async getStore (storeId: string): Promise<any>{
        // let store;
        // try{
        //     store = await 
        // }catch(err){
        //     return null;
        // }
        return "ok";
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