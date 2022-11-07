import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PERMISSIONS } from 'models';
import { SuperAdminRoleModel } from 'src/database/mongodb/super-admin-role/super-admin.role.model';
import { UserAdminRoleModel } from 'src/database/mongodb/user-admin-role/user-admin.role.model';
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

    // allow access to super admin
    if (user.role === 'super-admin') {
      return true;
    }

    const query = {
      id: user.role.roleId,
      name: user.role.name,
      type: user.role.roleType,
      isActive: true,
      permissions: { $elemMatch: { $in: requiredPermissions } },
    };
    
    let isExist = 0
    if(user.role.roleType === 'super-admin-type'){
      isExist = await SuperAdminRoleModel.findOne(query).countDocuments()
    }else if(user.role.roleType === 'user-admin-type'){
      isExist = await UserAdminRoleModel.findOne(query).countDocuments()
    }else{
      return false;
    }
    if (isExist) {
      return true;
    }
    return false;
  }
}
