export class BranchAddress{
    id: string;
    addressLine1: string;
    addressLine2?: string;
    postCode: string;
    city: string;
    country: string;
}

export const enum BranchStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}
export class BranchPhoto{
    cover?: string;
    logo?: string;
}

export enum InActiveReason{
    BLOCKED_BY_ADMIN = 'BLOCKED_BY_ADMIN',
    UNDER_MAINTENANCE = 'UNDER_MAINTENANCE',
    ADMIN_APPROVAL = 'NEED ADMIN APPROVAL'
}
export class Branch{
    id: string;
    store: string; //storeId
    url: string;
    address: BranchAddress;
    isActive: boolean;
    inActiveReason?: InActiveReason;
    image?: BranchPhoto;
    status: BranchStatus;
    description?: string;
    name: string;
}