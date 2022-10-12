import { Injectable } from "@nestjs/common";
import { AllBranchByStoreId, Branch, CreateBranchRequest } from "models";

@Injectable()
export abstract class IBranchDatabase{
    abstract createBranch: (branch: CreateBranchRequest) => Promise<Branch | null>;
    abstract getStore: (storeId: string) => Promise<any>;
    abstract getBranchByStoreId: (storeId: string) => Promise<AllBranchByStoreId | null>;
    abstract getBranch: (branchId: string) => Promise<Branch | null>;
}