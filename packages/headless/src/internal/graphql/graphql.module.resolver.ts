import { AuthModule } from 'src/modules/auth/auth.graphql.module';
import { WishListModule } from 'src/modules/wishlist/wishlist.graphql.module';
import { GraphqlInitModule } from "./graphql.init";
import { BrandModule } from 'src/modules/brands/brand.graphql.module';

export const ResolveGraphqlModule = () => {
  return [
    ...GraphqlInitModule(),
    WishListModule,
    AuthModule,
    BrandModule,
  ];
};
