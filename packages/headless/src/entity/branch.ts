export class BranchAddress{
    id: string;
    addressLine1: string;
    addressLine2?: string;
    postCode: string;
    city: string;
    country: string;
}

export class BranchPhoto{
    cover?: string;
    logo?: string;
}

export enum InActiveReason{
    BLOCKED_BY_ADMIN = 'BLOCKED_BY_ADMIN',
    UNDER_MAINTENANCE = 'UNDER_MAINTENANCE'
}
export class Branch{
    id: string;
    store: string; //storeId
    url: string;
    address: BranchAddress;
    isActive: boolean;
    inActiveReason?: InActiveReason;
    image?: BranchPhoto;
    description?: string;
    name: string;
}