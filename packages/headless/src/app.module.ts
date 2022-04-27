import { Module } from '@nestjs/common';
import { HelperModule } from './helper/helper.module';
import * as dotenv from 'dotenv';
import { ResolveGraphqlModule } from './internal/graphql/graphql.module.resolver';
import { ResolveRestModule } from './internal/rest/rest.module.resolver';
dotenv.config();
@Module({
  imports: [
    HelperModule,
    ...((process.env.API === 'GRAPHQL') ? ResolveGraphqlModule() : ResolveRestModule())
  ]
})
export class AppModule {}
