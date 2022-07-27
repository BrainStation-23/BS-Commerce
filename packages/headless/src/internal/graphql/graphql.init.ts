import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { coreConfig } from 'config/core';
import { DirectiveLocation, GraphQLDirective } from 'graphql';
import { join } from 'path';
import { AuthResolver } from 'src/modules/auth/graphql/auth.resolver';
import { upperDirectiveTransformer } from './directives/test';

export const GraphqlInitModule = () => {
  return [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      path: `/${coreConfig.graphqlPathPrefix}`,
      playground: (coreConfig.env === 'DEVELOPMENT') ? true : false,
      cors: { origin: '*', credentials: true, },
      installSubscriptionHandlers: true,
      transformSchema: schema => upperDirectiveTransformer(schema, 'email'),
      buildSchemaOptions: {
        directives: [
          new GraphQLDirective({
            name: 'email',
            locations: [DirectiveLocation.FIELD_DEFINITION , DirectiveLocation.INPUT_FIELD_DEFINITION],
          })
        ]
      }
    }),
  ];
};
