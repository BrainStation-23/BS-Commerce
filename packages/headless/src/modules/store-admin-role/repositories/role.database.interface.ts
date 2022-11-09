import { Injectable } from '@nestjs/common';
import { Role } from 'src/entity/role';
import { CreateRoleDto, UpdateRoleDto } from '../rest/dto/role.dto';

@Injectable()
export abstract class IRoleDatabase {
  abstract create: (body: CreateRoleDto) => Promise<Role>;
  abstract find: (query: Record<string, any>) => Promise<Role[]>;
  abstract findOne: (query: Record<string, any>) => Promise<Role>;
  abstract findOneAndUpdate: (
    query: Record<string, any>,
    body: UpdateRoleDto,
  ) => Promise<Role>;
  abstract findOneAndDelete: (query: Record<string, any>) => Promise<Role>;
}
