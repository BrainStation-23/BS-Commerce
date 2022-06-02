import { ManufacturerModule } from 'src/modules/manufacturer/manufacturer.graphql.module';
import { AuthModule } from 'src/modules/auth/auth.graphql.module';
import { UserModule } from 'src/modules/user/user.graphql.module';
import { GraphqlInitModule } from "./graphql.init";

export const ResolveGraphqlModule = () => {
  return [
    ...GraphqlInitModule(),
    AuthModule,
    UserModule,
    ManufacturerModule
  ];
};
