import { Injectable } from '@nestjs/common';
import { query } from 'express';
import { Role } from 'src/entity/role';
import { IRoleDatabase } from 'src/modules/super-admin-role/repositories/role.database.interface';
import {
  CreateRoleDto,
  UpdateRoleDto,
} from 'src/modules/super-admin-role/rest/dto/role.dto';
import { UserAdminRoleModel } from './user-admin.role.model';

@Injectable()
export class RoleDatabase implements IRoleDatabase {
  async create(body: CreateRoleDto): Promise<Role> {
    const newRole = await UserAdminRoleModel.create(body);
    return newRole ? newRole : null;
  }

  async find(query: Record<string, any>): Promise<Role[]> {
    const roles = await UserAdminRoleModel.find(query).lean();
    return roles ? roles : null;
  }

  async findOne(query: Record<string, any>): Promise<Role> {
    const role = await UserAdminRoleModel.findOne(query).lean();
    return role ? role : null;
  }

  async findOneAndUpdate(
    query: Record<string, any>,
    body: UpdateRoleDto,
  ): Promise<Role> {
    const role = await UserAdminRoleModel.findOneAndUpdate(query, { $set: body }).lean();
    return role ? role : null;
  }

  async findOneAndDelete(query: Record<string, any>): Promise<Role> {
    const role = await UserAdminRoleModel.findOneAndDelete(query).lean();
    return role ? role : null;
  }
}
