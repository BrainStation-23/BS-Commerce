import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { GraphQLModule } from "@nestjs/graphql";

export const GraphqlInitModule = () => {
  return [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['src/**/*.graphql'],
      path: '/graphql',
      playground: (process.env.NODE_ENV === 'DEVELOPMENT') ? true : false
    }),
  ];
};
