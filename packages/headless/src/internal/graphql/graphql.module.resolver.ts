import { GraphqlModule } from './graphql.init';
import { CartModule as CartGraphqlModule } from 'src/modules/cart/cart.graphql.module';
import { WishListModule as WishListGraphqlModule } from 'src/modules/wishlist/wishlist.graphql.module';

export const ResolveGraphqlModule = () => {
  return [
    WishListGraphqlModule,
    CartGraphqlModule,
    ...GraphqlModule()
  ];
};