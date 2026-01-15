import { SORT_ORDER } from 'src/config-global';

// Inline types for roles, branches, departments, designations
interface Role {
  id: string;
  name: string;
  created_at?: string;
  updated_at?: string;
}



// Admin Type Enum
export enum AdminType {
  RM = 'RM',
  IFA = 'IFA',
  General = 'General',
}
export enum UserType{

  ACTIVE = 'Active',
  INACTIVE = 'Inactive'
}
// User API Parameter Types
export interface TableListParams {
  page?: number;
  limit?: number;
  sort_order?: SORT_ORDER;
  sort_by?: string;
  search?: string;
  type?: string;
  status?: UserType | 'All'; // Add this line
  is_active?:boolean;
}

// User Filter Type
export interface UserFilter {
  search?: string;
}

// Get User List Options
export interface GetUserListOptions {
  page: number;
  limit: number;
  filters?: UserFilter;
  sort_by?: string;
  sort_order?: SORT_ORDER;
}
// User Response Types
export interface BaseUser {
  id: string;
  created_at: string;
  updated_at: string;
  employee_id: string | null;
  email: string;
  name: string;
  type: AdminType;
  roleIds: string[];
  is_active: boolean;
  is_deleted: boolean;
}

// User creation type
export interface CreateUserType {
  employee_id: string;
  email: string;
  name: string;
  is_active: boolean;
  isEdit: boolean;
}

// User API Payload Types
export interface CreateUserPayload {
  employee_id: string;
  email: string;
  name: string;
  type: AdminType;
  roleIds: string[];
  is_active?: boolean;
}

// User update type
export interface UpdateUserPayload {
  newRoleIds?: string[];
  removeRoleIds?: string[];
  employee_id?: string;
  email?: string;
  name?: string;
  type?: AdminType;
  is_active?: boolean;
}

export interface UserListResponse {
  total: number;
  page: number;
  limit: number;
  data: BaseUser[];
}

export interface UserDetailsResponse {
  data: UserDetails;
}

export interface UserDetails extends BaseUser {
  roles: Role[];
}
 
