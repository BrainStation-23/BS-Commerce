import { StoreBranchStatus } from './tmp-store-branch';

export class BranchHistory {
  id: string;
  branchName: string;
  branchURL: string;
  actions: ActionType[];
}

export class ActionType {
  user: UserType;
  status: StoreBranchStatus;
  comment: string;
  updatedTime: Date;
}

export class UserType {
  id: string;
  email: string;
  type: UserTypeEnum;
}

export const enum UserTypeEnum {
  ADMIN = 'ADMIN',
  MERCHANT = 'MERCHANT',
}
