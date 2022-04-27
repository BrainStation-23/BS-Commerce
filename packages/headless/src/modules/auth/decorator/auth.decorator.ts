import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { coreConfig } from 'config/core';
/**
 * @return only the userId from jwt payload
 */
export const UserId = createParamDecorator(
  async (data: unknown, context: ExecutionContext) => {
    return (coreConfig.api === 'GRAPHQL') ? 
    await GqlExecutionContext.create(context).getContext().req.user.id : 
    await context.switchToHttp().getRequest().user.id;
  },
);