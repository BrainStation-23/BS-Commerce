import { Injectable } from '@nestjs/common';
import { Role } from 'src/entity/role';
import { CreateRoleDto, UpdateRoleDto } from '../rest/dto/role.dto';
import { IRoleDatabase } from './role.database.interface';

@Injectable()
export class RoleRepository {
  constructor(private readonly db: IRoleDatabase) {}

  async create(body: CreateRoleDto): Promise<Role> {
    return await this.db.create(body);
  }

  async find(query: Record<string, any>): Promise<Role[]> {
    return await this.db.find(query);
  }

  async findOne(query: Record<string, any>): Promise<Role> {
    return await this.db.findOne(query);
  }

  async findOneAndUpdate(
    query: Record<string, any>,
    body: UpdateRoleDto,
  ): Promise<Role> {
    return await this.db.findOneAndUpdate(query, body);
  }

  async findOneAndDelete(query: Record<string, any>): Promise<Role> {
    return await this.db.findOneAndDelete(query);
  }
}
