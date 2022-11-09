import { Injectable } from '@nestjs/common'; 
import { RoleTypeEnum } from 'models';
import { Role } from 'src/entity/role';
import { IRoleDatabase } from 'src/modules/super-admin-role/repositories/role.database.interface';
import {
  CreateRoleDto,
  UpdateRoleDto,
} from 'src/modules/super-admin-role/rest/dto/role.dto';
import { StoreAdminRoleModel } from './store-admin.role.model';

@Injectable()
export class StoreAdminRoleDatabase implements IRoleDatabase {
  async create(body: CreateRoleDto): Promise<Role> {
    const newRole = await StoreAdminRoleModel.create({...body, roleType: RoleTypeEnum.STORE_ADMIN});
    return newRole ? newRole : null;
  }

  async find(query: Record<string, any>): Promise<Role[]> {
    const roles = await StoreAdminRoleModel.find(query).lean();
    return roles ? roles : null;
  }

  async findOne(query: Record<string, any>): Promise<Role> {
    const role = await StoreAdminRoleModel.findOne(query).lean();
    return role ? role : null;
  }

  async findOneAndUpdate(
    query: Record<string, any>,
    body: UpdateRoleDto,
  ): Promise<Role> {
    const role = await StoreAdminRoleModel.findOneAndUpdate(query, { $set: body }).lean();
    return role ? role : null;
  }

  async findOneAndDelete(query: Record<string, any>): Promise<Role> {
    const role = await StoreAdminRoleModel.findOneAndDelete(query).lean();
    return role ? role : null;
  }
}
