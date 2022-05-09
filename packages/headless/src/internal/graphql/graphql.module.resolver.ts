import { AuthModule } from 'src/modules/auth/auth.graphql.module';
import { BrandModule } from 'src/modules/brands/brand.graphql.module';
import { WishListModule } from 'src/modules/wishlist/wishlist.graphql.module';
import { GraphqlInitModule } from "./graphql.init";

export const ResolveGraphqlModule = () => {
  return [
    ...GraphqlInitModule(),
    BrandModule,
    WishListModule,
    AuthModule,
  ];
};
