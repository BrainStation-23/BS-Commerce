import { HttpStatus, Injectable } from '@nestjs/common';
import { PERMISSIONS } from 'models';
import { Role } from 'src/entity/role';
import { UserAdminInfo } from 'src/entity/user-admin';
import { errorResponse, successResponse } from 'src/utils/response';
import { IServiceResponse } from 'src/utils/response/service.response.interface';
import { RoleRepository } from '../repositories';
import { CreateRoleDto, UpdateRoleDto } from '../rest/dto/role.dto';

@Injectable()
export class RoleService {
  constructor(private readonly roleRepository: RoleRepository) {}

  async create(
    adminInfo: UserAdminInfo,
    body: CreateRoleDto,
  ): Promise<IServiceResponse<Role>> {
    const isExist = await this.roleRepository.findOne({
      name: body.name,
      storeId: adminInfo.storeId,
    });
    if (isExist) {
      return errorResponse(
        'This role is already exist!',
        null,
        HttpStatus.CONFLICT,
      );
    }
    const newRole = await this.roleRepository.create(body);
    if (newRole) {
      return successResponse(Role, newRole);
    }
    return errorResponse('Error in create new role', null, HttpStatus.CONFLICT);
  }

  async updateRole(
    adminInfo: UserAdminInfo,
    body: UpdateRoleDto,
  ): Promise<IServiceResponse<Role>> {
    const isExist = await this.roleRepository.findOne({
      id: body.id,
      storeId: adminInfo.storeId,
    });
    if (isExist) {
      if (isExist.name === body?.name) {
        return errorResponse(
          'This role is already exist!',
          null,
          HttpStatus.CONFLICT,
        );
      } else {
        for (let key in body) {
          if (key !== 'id' && key !== 'name') {
            isExist[key] = body[key];
          }
        }
        const newRole = await this.roleRepository.findOneAndUpdate(
          { id: body.id, storeId: adminInfo.storeId },
          isExist,
        );
        if (newRole) {
          return successResponse(Role, newRole);
        }
      }
    }
    return errorResponse('Error in updating role', null, HttpStatus.CONFLICT);
  }

  async findAll(
    adminInfo: UserAdminInfo,
    query = {},
  ): Promise<IServiceResponse<Role[]>> {
    const roles = await (
      await this.roleRepository.find({ storeId: adminInfo.storeId, ...query })
    ).map((e) => {
      delete e.permissions;
      return e;
    });
    if (roles) {
      return successResponse(null, roles);
    }
    return errorResponse('No result found!', null, HttpStatus.NOT_FOUND);
  }

  async findOne(adminInfo: UserAdminInfo, id = null): Promise<IServiceResponse<Role>> {
    const role = await this.roleRepository.findOne({
      storeId: adminInfo.storeId,
      id: id ? id : adminInfo.role.roleId,
    });
    if (role) {
      if(!id){
        delete role.permissions;
      }
      return successResponse(Role, role);
    }
    return errorResponse('No result found!', null, HttpStatus.NOT_FOUND);
  }
}
