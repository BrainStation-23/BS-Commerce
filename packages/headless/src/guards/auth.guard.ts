import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { GqlExecutionContext } from "@nestjs/graphql";
import { coreConfig } from "config/core";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.getAllAndMerge('roles', [context.getHandler(), context.getClass()]);
    if (!roles.length) {
      return true;
    }

    const user = (coreConfig.api === 'GRAPHQL') ? await GqlExecutionContext.create(context).getContext().req.user : await context.switchToHttp().getRequest().user;
    if (!user) {
      throw new HttpException('Sorry! You are not a valid user for this action.', HttpStatus.FORBIDDEN);
    }

    const userType = user.userType;
    const doesRoleMatch = roles.some(r => r === userType);
    if (!doesRoleMatch) {
      throw new HttpException('Sorry! You are not a valid user for this action.', HttpStatus.FORBIDDEN);
    }
    return doesRoleMatch;
  }
}