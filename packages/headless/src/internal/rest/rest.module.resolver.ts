import { AuthModule } from 'src/modules/auth/auth.rest.module';
import { UserModule } from 'src/modules/user/user.rest.module';

export const ResolveRestModule = () => {
  return [
    AuthModule,
    UserModule
  ];
};
