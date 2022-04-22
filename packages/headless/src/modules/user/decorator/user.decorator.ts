import { createParamDecorator, ExecutionContext } from '@nestjs/common';

/**
 * @return only the userId from jwt payload
 */
export const UserId = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user.id;
  },
);

/**
 * @return all data from jwt payload
 */
export const UserInfo = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
