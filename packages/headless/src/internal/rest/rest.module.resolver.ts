import { AuthModule } from 'src/modules/auth/auth.rest.module';
import { CartModule } from 'src/modules/cart/cart.rest.module';
import { UserModule } from 'src/modules/user/user.rest.module';

export const ResolveRestModule = () => {
  return [
    AuthModule,
    UserModule,
    CartModule,
  ];
};
