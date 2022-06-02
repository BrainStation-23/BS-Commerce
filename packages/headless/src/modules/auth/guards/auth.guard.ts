import {
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { coreConfig } from 'src/config/core';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext();
    return coreConfig.api === 'GRAPHQL'
      ? super.canActivate(new ExecutionContextHost([req]))
      : super.canActivate(context);
  }
  handleRequest(err: any, user: any, info: string) {
    if (err || !user) {
      if (!user) {
        throw new HttpException(
          'Sorry! You are not a valid User.',
          HttpStatus.FORBIDDEN,
        );
      }
      throw err;
    }
    return user;
  }
}
