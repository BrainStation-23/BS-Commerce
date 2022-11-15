export class SignInData {
  username: string;
  password: string;
}

export class RoleData{
  name: string;
  roleId: string;
  roleType: string;
}
export class AdminJwtPayload {
  id: string;
  username: string;
  logInTime: number;
  role: RoleData | string;
  storeId?: string;
  branchIds?: string | string[];
}

export class StoreAdminJwtPayload {
  id: string;
  username: string;
  logInTime: number;
  role: RoleData;
  storeId?: string;
  branchIds?: string | string[];
}