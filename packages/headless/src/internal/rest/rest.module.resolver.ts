import { AuthModule } from '../../modules/auth/auth.rest.module';
import { CartModule } from '../../modules/cart/cart.rest.module';
import { CategoryModule } from '../../modules/category/category.rest.module';
import { CompareModule } from '../../modules/compare/compare.rest.module';
import { CustomerAuthModule } from '../../modules/customer-auth/auth.rest.module';
import { ManufacturerModule } from '../../modules/manufacturer/manufacturer.rest.module';
import { MediaModule } from '../../modules/media/media.rest.module';
import { OrderModule } from '../../modules/order/order.rest.module';
import { ProductModule } from '../../modules/product/product.rest.module';
import { TagsModule } from '../../modules/tags/tags.rest.module';
import { UserModule } from '../../modules/user/user.rest.module';
import { BrandModule } from '../../modules/brands/brand.rest.module';
import { WishListModule } from '../../modules/wishlist/wishlist.rest.module';
import { CustomerModule } from '../../modules/customer/customer.rest.module';
import { SearchModule } from '../../modules/global-search/search.module';

export const ResolveRestModule = () => {
  return [
    AuthModule,
    UserModule,
    BrandModule,
    CompareModule,
    ProductModule,
    ManufacturerModule,
    CategoryModule,
    CustomerAuthModule,
    CartModule,
    MediaModule,
    CompareModule,
    WishListModule,
    OrderModule,
    TagsModule,
    CustomerModule,
    SearchModule,
  ];
};
