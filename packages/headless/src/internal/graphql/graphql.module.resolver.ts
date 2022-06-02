import { AuthModule } from 'src/modules/auth/auth.graphql.module';
import { UserModule } from 'src/modules/user/user.graphql.module';
import { GraphqlInitModule } from "./graphql.init";
import { CartModule } from 'src/modules/cart/cart.graphql.module';

export const ResolveGraphqlModule = () => {
  return [
    ...GraphqlInitModule(),
    AuthModule,
    CartModule,
    UserModule,
  ];
};
