import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { coreConfig } from 'config/core';

export const GraphqlInitModule = () => {
  return [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['src/**/*.graphql'],
      path: '/graphql',
      playground: (coreConfig.env === 'DEVELOPMENT') ? true : false,
      cors: {
        origin: '*',
        credentials: true,
      }
    }),
  ];
};
