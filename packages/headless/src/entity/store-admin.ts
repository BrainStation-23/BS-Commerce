export class StoreAdmin {
  id: string;
  info: {
    name: string;
    email: string;
    phone?: string;
  };
  password: string;
  role: {
    name: string;
    roleId?: string;
    roleType: string;
  };
  // branchId
  branch?: string;
  isActive: boolean;
}
