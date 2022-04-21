import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { HelperModule } from './helper/helper.module';
import { WishListModule as WishListGraphqlModule } from './modules/wishlist/wishlist.graphql.module';

export const ResolveGraphqlModule = () => {
  return [
    HelperModule,
    WishListGraphqlModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['src/**/*.graphql'],
      path: '/v1/graphql',
      playground: true,
    }),
  ];
};
