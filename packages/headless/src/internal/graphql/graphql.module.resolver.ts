import { AuthModule } from 'src/modules/admin-auth/auth.graphql.module';
import { CompareModule } from 'src/modules/compare/compare.graphql.module';
import { ManufacturerModule } from 'src/modules/manufacturer/manufacturer.graphql.module';
import { ProductModule } from 'src/modules/product/product.graphql.module';
import { UserModule } from 'src/modules/admin/user.graphql.module';
import { GraphqlInitModule } from './graphql.init';
import { CategoryModule } from 'src/modules/category/category.graphql.module';
import { CustomerAuthModule } from 'src/modules/customer-auth/auth.graphql.module';
import { CartModule } from 'src/modules/cart/cart.graphql.module';
import { MediaModule } from 'src/modules/media/media.graphql.module';

export const ResolveGraphqlModule = () => {
  return [
    ...GraphqlInitModule(),
    AuthModule,
    CartModule,
    UserModule,
    ProductModule,
    ManufacturerModule,
    CategoryModule,
    CustomerAuthModule,
    MediaModule,
    CompareModule,
  ];
};
