import { GraphqlModule } from './graphql.init';
import { CatagoryModule as CatagoryGraphqlModule } from 'src/modules/catagory/catagory.graphql.module';
import { WishListModule as WishListGraphqlModule } from 'src/modules/wishlist/wishlist.graphql.module';

export const ResolveGraphqlModule = () => {
  return [
    WishListGraphqlModule,
    CatagoryGraphqlModule,
    ...GraphqlModule()
  ];
};