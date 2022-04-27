import {
    Injectable,
    ExecutionContext,
    HttpException,
    HttpStatus,
    UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';

@Injectable()
export class GqlAuthGuard extends AuthGuard('jwt') {
    canActivate(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context);
        const { req } = ctx.getContext();
        return super.canActivate(
            new ExecutionContextHost([req]),
        );
    }
    handleRequest(err: any, user: any, info: string) {
        if (err || !user) {
            if (!user) {
                throw new HttpException('Sorry! You are not a valid User.', HttpStatus.UNAUTHORIZED);
            }
            throw err || new UnauthorizedException('Unauthorized');
        }
        return user;
    }
}