import { AdminAuthModule } from 'src/modules/admin-auth/auth.graphql.module';
import { CompareModule } from 'src/modules/compare/compare.graphql.module';
import { ManufacturerModule } from 'src/modules/manufacturer/manufacturer.graphql.module';
import { ProductModule } from 'src/modules/product/product.graphql.module';
import { AdminModule } from 'src/modules/admin/admin.graphql.module';
import { GraphqlInitModule } from './graphql.init';
import { CategoryModule } from 'src/modules/category/category.graphql.module';
import { CustomerAuthModule } from 'src/modules/customer-auth/auth.graphql.module';
import { CartModule } from 'src/modules/cart/cart.graphql.module';
import { MediaModule } from 'src/modules/media/media.graphql.module';
import { WishListModule } from 'src/modules/wishlist/wishlist.graphql.module';

export const ResolveGraphqlModule = () => {
  return [
    ...GraphqlInitModule(),
    AdminAuthModule,
    CartModule,
    AdminModule,
    ProductModule,
    ManufacturerModule,
    CategoryModule,
    CustomerAuthModule,
    MediaModule,
    CompareModule,
    WishListModule,
  ];
};
