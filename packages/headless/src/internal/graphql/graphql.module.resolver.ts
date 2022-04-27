import { WishListModule as WishListGraphqlModule } from 'src/modules/wishlist/wishlist.graphql.module';
import { GraphqlInitModule } from "./graphql.init";

export const ResolveGraphqlModule = () => {
  return [
    WishListGraphqlModule,
    ...GraphqlInitModule()
  ];
};
