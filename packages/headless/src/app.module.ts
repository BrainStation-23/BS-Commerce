import { Module } from '@nestjs/common';
import { ResolveGraphqlModule } from './graphql.module.dependency';
import { HelperModule } from './helper/helper.module';
import { ResolveRestModule } from './rest.module.dependency';
type API = 'GRAPHQL' | 'REST';

@Module({
  imports: [
    HelperModule,
    ...(('GRAPHQL' as API) ? ResolveGraphqlModule() : ResolveRestModule())
  ]
})
export class AppModule {}
