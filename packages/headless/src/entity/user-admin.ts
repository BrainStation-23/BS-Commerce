export class RoleInfo {
  name: string;
  roleId: string;
  roleType: string;
}
export class UserAdmin {
  id: string;
  firstName: string;
  lastName: string;
  role: RoleInfo;
  storeId: string;
  branchId: string[];
  email: string;
  countryCode: string;
  phone: string;
  password: string;
  isMfaEnabled: boolean;
  mfaType: string;
}

export class UserAdminInfo {
  id: string;
  firstName: string;
  lastName: string;
  role: RoleInfo;
  storeId: string;
  branchId: string[];
  email: string;
  countryCode: string;
  phone: string;
}
