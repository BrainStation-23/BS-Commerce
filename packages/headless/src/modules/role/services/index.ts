import { HttpStatus, Injectable } from '@nestjs/common';
import { Role } from 'src/entity/role';
import { errorResponse, successResponse } from 'src/utils/response';
import { IServiceResponse } from 'src/utils/response/service.response.interface';
import { RoleRepository } from '../repositories';
import { CreateRoleDto } from '../rest/dto/role.dto';

@Injectable()
export class RoleService {
  constructor(private readonly roleRepository: RoleRepository) {}

  async create(body: CreateRoleDto): Promise<IServiceResponse<Role>> {
    const isExist = await this.roleRepository.findOne({name: body.name})
    if(isExist){
      return errorResponse('This role is already exist!', null, HttpStatus.CONFLICT)
    }
    const newRole = await this.roleRepository.create(body);
    if (newRole) {
      return successResponse(Role, newRole);
    }
    return errorResponse('Error in create new role', null, HttpStatus.CONFLICT);
  }

  async findAll(query = {}): Promise<IServiceResponse<Role[]>> {
    const roles = await this.roleRepository.find(query);
    if (roles) {
      return successResponse(null, roles);
    }
    return errorResponse('No result found!', null, HttpStatus.NOT_FOUND);
  }

  async findOne(query: Record<string, any>): Promise<IServiceResponse<Role>> {
    const role = await this.roleRepository.findOne(query);
    if (role) {
      return successResponse(Role, role);
    }
    return errorResponse('No result found!', null, HttpStatus.NOT_FOUND);
  }
}
