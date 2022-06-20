import { AuthModule } from 'src/modules/auth/auth.rest.module';
import { CompareModule } from 'src/modules/compare/compare.rest.module';
import { UserModule } from 'src/modules/user/user.rest.module';
import { BrandModule } from 'src/modules/brands/brand.rest.module';

export const ResolveRestModule = () => {
  return [
    AuthModule,
    UserModule,
    BrandModule,
    CompareModule
  ];
};
