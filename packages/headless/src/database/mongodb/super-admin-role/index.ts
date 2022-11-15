import { Injectable } from '@nestjs/common';
import { query } from 'express';
import { RoleTypeEnum } from 'models';
import { Role } from 'src/entity/role';
import { IRoleDatabase } from 'src/modules/super-admin-role/repositories/role.database.interface';
import {
  CreateRoleDto,
  UpdateRoleDto,
} from 'src/modules/super-admin-role/rest/dto/role.dto';
import { SuperAdminRoleModel } from './super-admin.role.model';

@Injectable()
export class SuperAdminRoleDatabase implements IRoleDatabase {
  async create(body: CreateRoleDto): Promise<Role> {
    const newRole = await SuperAdminRoleModel.create({...body, roleType: RoleTypeEnum.SUPER_ADMIN});
    return newRole ? newRole : null;
  }

  async find(query: Record<string, any>): Promise<Role[]> {
    const roles = await SuperAdminRoleModel.find(query).lean();
    return roles ? roles : null;
  }

  async findOne(query: Record<string, any>): Promise<Role> {
    const role = await SuperAdminRoleModel.findOne(query).lean();
    return role ? role : null;
  }

  async findOneAndUpdate(
    query: Record<string, any>,
    body: UpdateRoleDto,
  ): Promise<Role> {
    const role = await SuperAdminRoleModel.findOneAndUpdate(query, { $set: body }).lean();
    return role ? role : null;
  }

  async findOneAndDelete(query: Record<string, any>): Promise<Role> {
    const role = await SuperAdminRoleModel.findOneAndDelete(query).lean();
    return role ? role : null;
  }
}
