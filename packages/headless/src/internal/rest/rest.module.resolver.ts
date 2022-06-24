import { AuthModule } from 'src/modules/auth/auth.rest.module';
import { CartModule } from 'src/modules/cart/cart.rest.module';
import { CategoryModule } from 'src/modules/category/category.rest.module';
import { CompareModule } from 'src/modules/compare/compare.rest.module';
import { CustomerAuthModule } from 'src/modules/customer-auth/auth.rest.module';
import { ManufacturerModule } from 'src/modules/manufacturer/manufacturer.rest.module';
import { ProductModule } from 'src/modules/product/product.rest.module';
import { UserModule } from 'src/modules/user/user.rest.module';

export const ResolveRestModule = () => {
  return [
    AuthModule,
    UserModule,
    ProductModule,
    ManufacturerModule,
    CategoryModule,
    CustomerAuthModule,
    CartModule,
    CompareModule,
  ];
};
