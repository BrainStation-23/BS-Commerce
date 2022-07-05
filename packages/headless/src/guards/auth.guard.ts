import { ExecutionContext, HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { ExecutionContextHost } from "@nestjs/core/helpers/execution-context-host";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthGuard } from "@nestjs/passport";
import { coreConfig } from "config/core";

@Injectable()
export class RolesGuard extends AuthGuard('jwt') {
  constructor(private roles: string[] | null) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext();
    return (coreConfig.api === 'GRAPHQL') ? super.canActivate(new ExecutionContextHost([req])) : super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: string) {
    if (!this.roles) {
      return user || null;
    }

    if (!user) {
      throw new UnauthorizedException('Sorry! You are not a valid user for this action.');
    }

    const role = user.role;
    const doesRoleMatch = this.roles.some(r => r === role);
    if (!doesRoleMatch) {
      throw new UnauthorizedException('Sorry! You are not a valid user for this action.');
    }
    return user;
  }
}