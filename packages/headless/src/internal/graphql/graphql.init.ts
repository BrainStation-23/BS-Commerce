import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { coreConfig } from 'config/core';

export const GraphqlInitModule = () => {
  return [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['src/**/*.graphql'],
      path: `/${coreConfig.graphqlPathPrefix}`,
      playground: (coreConfig.env === 'DEVELOPMENT') ? true : false,
      cors: { origin: '*', credentials: true, },
    }),
  ];
};
