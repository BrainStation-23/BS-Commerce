import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { IJwtPayload } from '../dto/user.dto';

/**
 * @return only the userId from jwt payload
 */
export const UserId = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user.userId;
  },
);

/**
 * @return all data from jwt payload
 */
export const UserInfo = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const userInfo: IJwtPayload = {
      userId: request.user.userId,
      phone: request.user.phone,
      username: request.user.username,
      logInTime: request.user.logInTime,
    };
    return userInfo;
  },
);
