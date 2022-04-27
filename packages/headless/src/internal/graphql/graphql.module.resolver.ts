import { GraphqlModule } from './graphql.init';
import { WishListModule as WishListGraphqlModule } from '../../modules/wishlist/wishlist.graphql.module';

export const ResolveGraphqlModule = () => {
  return [
    WishListGraphqlModule,
    ...GraphqlModule()
  ];
};
