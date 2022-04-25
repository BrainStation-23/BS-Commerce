import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { GraphQLModule } from "@nestjs/graphql";

export const GraphqlModule = () => {
    return [
      GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,
        typePaths: ['src/**/*.graphql'],
        path: '/graphql',
        playground: true, // if env is development then playground is true
      }),
    ];
  };
  