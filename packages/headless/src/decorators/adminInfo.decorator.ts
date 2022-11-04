import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { coreConfig } from 'config/core';
/**
 * @return only the user from jwt payload
 */
export const AdminInfo = createParamDecorator(
  async (data: unknown, context: ExecutionContext) => {
    return coreConfig.api === 'GRAPHQL'
      ? await GqlExecutionContext.create(context).getContext().req.user
      : await context.switchToHttp().getRequest().user;
  },
);
