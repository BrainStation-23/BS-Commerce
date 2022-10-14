export class StoreBranchAddress {
  id?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  country: string;
  postCode: string;
}

export const enum StoreBranchStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
}
export class StoreBranchInfo {
  shopName: string;
  legalName: string;
}

export class StoreBranchImage {
  logo: string;
  cover: string;
}

export class StoreBranch {
  id?: string;
  store: string;
  url: string;
  info: StoreBranchInfo;
  image: string;
  address: StoreBranchAddress;
  status: StoreBranchStatus;
  description: string;
}
