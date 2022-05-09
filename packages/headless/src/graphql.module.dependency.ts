import { GraphqlModule } from './graphql/graphql.init';
import { WishListModule as WishListGraphqlModule } from './modules/wishlist/wishlist.graphql.module';
import { BrandModule as BrandGraphqlModule } from './modules/brands/brand.graphql.module';

export const ResolveGraphqlModule = () => {
  return [
    WishListGraphqlModule,
    BrandGraphqlModule,
    ...GraphqlModule()
  ];
};
