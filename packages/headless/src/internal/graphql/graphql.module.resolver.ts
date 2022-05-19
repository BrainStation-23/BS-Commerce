import { AuthModule } from 'src/modules/auth/auth.graphql.module';
import { GraphqlInitModule } from './graphql.init';

export const ResolveGraphqlModule = () => {
  return [...GraphqlInitModule(), AuthModule];
};
