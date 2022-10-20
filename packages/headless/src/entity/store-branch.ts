import { BranchAddress } from './branch';

export const enum StoreBranchStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
}

export class StoreBranchImage {
  cover: string;
  logo: string;
}

export class StoreBranch {
  id?: string;
  store: string;
  url: string;
  name: string;
  image?: StoreBranchImage;
  address: BranchAddress;
  isActive: boolean;
  inActiveReason: string;
  status: StoreBranchStatus;
  description: string;
}
