import { Injectable } from '@nestjs/common';
import { query } from 'express';
import { Role } from 'src/entity/role';
import { IRoleDatabase } from 'src/modules/role/repositories/role.database.interface';
import {
  CreateRoleDto,
  UpdateRoleDto,
} from 'src/modules/role/rest/dto/role.dto';
import { RoleModel } from './role.model';

@Injectable()
export class RoleDatabase implements IRoleDatabase {
  async create(body: CreateRoleDto): Promise<Role> {
    const newRole = await RoleModel.create(body);
    return newRole ? newRole : null;
  }

  async find(query: Record<string, any>): Promise<Role[]> {
    const roles = await RoleModel.find(query).lean();
    return roles ? roles : null;
  }

  async findOne(query: Record<string, any>): Promise<Role> {
    const role = await RoleModel.findOne(query).lean();
    return role ? role : null;
  }

  async findOneAndUpdate(
    query: Record<string, any>,
    body: UpdateRoleDto,
  ): Promise<Role> {
    const role = await RoleModel.findOneAndUpdate(query, { $set: body }).lean();
    return role ? role : null;
  }

  async findOneAndDelete(query: Record<string, any>): Promise<Role> {
    const role = await RoleModel.findOneAndDelete(query).lean();
    return role ? role : null;
  }
}
