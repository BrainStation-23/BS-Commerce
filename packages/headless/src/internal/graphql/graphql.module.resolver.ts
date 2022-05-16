import { AuthModule } from 'src/modules/auth/auth.graphql.module';
import { ProductModule } from 'src/modules/product/product.graphql.module';
import { WishListModule } from 'src/modules/wishlist/wishlist.graphql.module';
import { GraphqlInitModule } from "./graphql.init";

export const ResolveGraphqlModule = () => {
  return [
    ...GraphqlInitModule(),
    ProductModule,
    WishListModule,
    AuthModule,
  ];
};
