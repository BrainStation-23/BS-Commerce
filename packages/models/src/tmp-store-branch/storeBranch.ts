export interface StoreBranchAddress {
    addressLine1: string,
    addressLine2?: string,
    postCode: string,
    city: string,
    country: string,
}

export const enum StoreBranchStatus {
    PENDING = 'PENDING',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED',
}

export interface StoreBranchImage {
    logo: string;
    cover: string;
  }

export interface StoreBranch {
    id?: string;
    store: string;
    url: string;
    name: string;
    image: StoreBranchImage;
    address: StoreBranchAddress;
    isActive: boolean;
    inActiveReason?: string;
    status: StoreBranchStatus;
    description: string;
}