import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PERMISSIONS } from 'models';
import { RoleModel } from 'src/database/mongodb/role/role.model';
import { PERMISSION_KEY } from 'src/decorators/permission.decorator';
import { Role } from 'src/entity/role';
import { RoleService } from 'src/modules/role/services';

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

    // allow access to super admin
    if (user.role === 'super-admin') {
      return true;
    }

    const query = {
      role: user.role,
      isActive: true,
      permissions: { $elemMatch: { $in: requiredPermissions } },
    };
    const role = await RoleModel.find(query).countDocuments();
    if (role) {
      return true;
    }
    return false;
  }
}
