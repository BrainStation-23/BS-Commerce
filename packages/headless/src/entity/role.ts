export class Role {
  id: string;
  name: string;
  roleType: string;
  storeId?: string;
  permissions: string[];
  isActive: boolean;
}
