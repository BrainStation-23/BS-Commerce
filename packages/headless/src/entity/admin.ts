export class Admin {
  id: string;
  info: {
    name: string;
    email: string;
    phone: string;
  };
  image: {
    logo: string;
    cover: string;
  };
  password: string;
  role: {
    name: string;
    roleId: string;
    roleType: string;
  };
  // branchId
  branch: string;
  isActive: boolean;
}
