import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PERMISSIONS, RoleTypeEnum } from 'models';
import { SuperAdminRoleModel } from 'src/database/mongodb/super-admin-role/super-admin.role.model';
import { StoreAdminRoleModel } from 'src/database/mongodb/store-admin-role/store-admin.role.model';
import { PERMISSION_KEY } from 'src/decorators/permission.decorator';

@Injectable()
export class AdminRoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredPermissions = this.reflector.get<PERMISSIONS[]>(
      PERMISSION_KEY,
      context.getHandler(),
    );

    if (!requiredPermissions?.length) {
      return true;
    }

    const user = context.switchToHttp().getRequest()?.user;

    // TO DO -> this logic will be removed
    // allow access to super admin
    if (user.role === 'super-admin') {
      return true;
    }

    const query = {
      id: user.role.roleId,
      name: user.role.name,
      roleType: user.role.roleType,
      isActive: true,
      permissions: { $elemMatch: { $in: requiredPermissions } },
    };

    let isExist = 0;
    if (user.role.roleType === RoleTypeEnum.SUPER_ADMIN) {
      isExist = await SuperAdminRoleModel.findOne(query).countDocuments();
    } else if (
      user.role.roleType === RoleTypeEnum.STORE_ADMIN ||
      user.role.roleType === RoleTypeEnum.BRANCH_ADMIN
    ) {
      isExist = await StoreAdminRoleModel.findOne(query).countDocuments();
    } else {
      return false;
    }
    if (isExist) {
      return true;
    }
    return false;
  }
}
