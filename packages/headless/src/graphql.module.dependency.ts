import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { WishListModule as WishListGraphqlModule } from './modules/wishlist/wishlist.graphql.module';

export const ResolveGraphqlModule = () => {
  return [
    WishListGraphqlModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['src/**/*.graphql'],
      path: '/graphql',
      playground: true, // if env is development
    }),
  ];
};
