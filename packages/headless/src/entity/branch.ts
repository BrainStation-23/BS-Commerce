export class BranchAddress{
    id: string;
    addressLine1: string;
    addressLine2?: string;
    postCode: string;
    city: string;
    country: string;
}

export class Branch{
    id: string;
    store: string; //storeId
    url: string;
    address: BranchAddress;
    isActive: boolean;
} 