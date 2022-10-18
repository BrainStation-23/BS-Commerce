import { Injectable } from "@nestjs/common";
import { AllBranchByStoreId, Branch, CreateBranchRequest } from "models";
import { Store } from "src/entity/store";

@Injectable()
export abstract class IBranchDatabase{
    abstract createBranch: (branch: CreateBranchRequest) => Promise<Branch | null>;
    abstract getStore: (storeId: string) => Promise<Store | null>;
    abstract getBranchByStoreId: (storeId: string) => Promise<AllBranchByStoreId | null>;
    abstract getBranch: (query: any) => Promise<Branch | null>;
}