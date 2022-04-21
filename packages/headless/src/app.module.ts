import { Module } from '@nestjs/common';
import { ResolveGraphqlModule } from './graphql.module.dependency';
import { ResolveRestModule } from './rest.module.dependency';
type API = 'GRAPHQL' | 'REST';

@Module({
  imports: ('GRAPHQL' as API) ? ResolveGraphqlModule() : ResolveRestModule()
})
export class AppModule {}
