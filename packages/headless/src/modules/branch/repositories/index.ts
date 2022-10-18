
import { Injectable } from "@nestjs/common";
import { AllBranchByStoreId, Branch, CreateBranchRequest, CreateBranchResponse } from "models";
import { Store } from "src/entity/store";
import { IBranchDatabase } from "src/modules/branch/repositories/branch.database.interface";

@Injectable()
export class BranchRepository {
    constructor(private readonly db: IBranchDatabase) {}

    async createBranch(branch: CreateBranchRequest): Promise<Branch | null>{
        return await this.db.createBranch(branch);
    }

    async getStore(storeId: string): Promise<Store | null>{
        return await this.db.getStore(storeId);
    }

    async getBranchByStoreId(storeId: string): Promise<AllBranchByStoreId | null>{
        return await this.db.getBranchByStoreId(storeId);
    }

    async getBranch(query: any): Promise<Branch | null>{
        return await this.db.getBranch(query);
    }
}