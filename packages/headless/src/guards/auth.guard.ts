import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { coreConfig } from "config/core";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private roles: string[] | null) { }

  async canActivate(context: ExecutionContext) {
    const user = (coreConfig.api === 'GRAPHQL') ? await GqlExecutionContext.create(context).getContext().req.user : await context.switchToHttp().getRequest().user;

    if (!this.roles) {
      return user;
    }

    if (!user) {
      throw new HttpException('Sorry! You are not a valid user for this action.', HttpStatus.FORBIDDEN);
    }

    const role = user.role;
    const doesRoleMatch = this.roles.some(r => r === role);
    if (!doesRoleMatch) {
      throw new HttpException('Sorry! You are not a valid user for this action.', HttpStatus.FORBIDDEN);
    }
    return user;
  }
}