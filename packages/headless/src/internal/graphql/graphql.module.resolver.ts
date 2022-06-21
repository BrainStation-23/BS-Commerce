import { ManufacturerModule } from 'src/modules/manufacturer/manufacturer.graphql.module';
import { AuthModule } from 'src/modules/auth/auth.graphql.module';
import { ProductModule } from 'src/modules/product/product.graphql.module';
import { UserModule } from 'src/modules/user/user.graphql.module';
import { GraphqlInitModule } from './graphql.init';
import { CategoryModule } from 'src/modules/category/category.graphql.module';
import { CartModule } from 'src/modules/cart/cart.graphql.module';

export const ResolveGraphqlModule = () => {
  return [
    ...GraphqlInitModule(),
    AuthModule,
    CartModule,
    UserModule,
    ProductModule,
    ManufacturerModule,
    CategoryModule,
  ];
};
