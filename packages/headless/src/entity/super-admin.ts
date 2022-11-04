export class SuperAdmin {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
  storeId: string;
  branchId: string[];
  email: string;
  countryCode: string;
  phone: string;
  password: string;
  isMfaEnabled: boolean;
  mfaType: string;
}

export class SuperAdminInfo {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
  storeId: string;
  branchId: string[];
  email: string;
  countryCode: string;
  phone: string;
}
