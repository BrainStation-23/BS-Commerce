import { AuthModule } from '../../modules/auth/auth.graphql.module';
import { ManufacturerModule } from '../../modules/manufacturer/manufacturer.graphql.module';
import { ProductModule } from '../../modules/product/product.graphql.module';
import { UserModule } from '../../modules/user/user.graphql.module';
import { BrandModule } from '../../modules/brands/brand.graphql.module';
import { GraphqlInitModule } from './graphql.init';
import { CategoryModule } from '../../modules/category/category.graphql.module';
import { CustomerAuthModule } from '../../modules/customer-auth/auth.graphql.module';
import { CartModule } from '../../modules/cart/cart.graphql.module';
import { MediaModule } from '../../modules/media/media.graphql.module';
import { WishListModule } from '../../modules/wishlist/wishlist.graphql.module';
import { TagsModule } from '../../modules/tags/tags.graphql.module';
import { CustomerModule } from '../../modules/customer/customer.graphql.module';
import { OrderModule } from '../../modules/order/order.graphql.module';

export const ResolveGraphqlModule = () => {
  return [
    ...GraphqlInitModule(),
    AuthModule,
    BrandModule,
    CartModule,
    UserModule,
    ProductModule,
    ManufacturerModule,
    CategoryModule,
    CustomerAuthModule,
    MediaModule,
    // CompareModule,
    WishListModule,
    TagsModule,
    CustomerModule,
    OrderModule,
  ];
};
