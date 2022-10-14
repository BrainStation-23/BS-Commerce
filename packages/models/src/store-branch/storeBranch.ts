export interface StoreBranchInfo {
    shopName: string;
    legalName: string;
}
export interface StoreBranchAddress {
    addressLine1: string,
    addressLine2?: string,
    postCode: string,
    city: string,
    country: string,
}
export const enum StoreBranchStatus {
    PENDING = 'PENDING',
    ACCEPTED = 'ACCEPTED',
    REJECTED = 'REJECTED',
}

export interface StoreBranch {
    id?: string;
    store: string;
    url: string;
    info: StoreBranchInfo;
    image: string;
    address: StoreBranchAddress;
    status: StoreBranchStatus;
    description: string;
}