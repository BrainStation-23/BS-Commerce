import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { coreConfig } from 'config/core';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { join } from 'path';

export const GraphqlInitModule = () => {
  return [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      path: `/${coreConfig.graphqlPathPrefix}`,
      playground: (coreConfig.env === 'DEVELOPMENT') ? true : false,
      cors: { origin: '*', credentials: true, },
      formatError: (error: any) => {
        return {
          message: error.extensions?.exception?.response?.error || error?.message,
          code: error.extensions?.response?.statusCode || error.extensions?.exception?.status || 500,
        };
      },
    }),
  ];
};
