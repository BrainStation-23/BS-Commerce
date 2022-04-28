import { Module } from '@nestjs/common';
import { HelperModule } from './helper/helper.module';
import { ResolveGraphqlModule } from './internal/graphql/graphql.module.resolver';
import { ResolveRestModule } from './internal/rest/rest.module.resolver';
import * as dotenv from 'dotenv';
dotenv.config();
import { coreConfig } from 'config/core';
@Module({
  imports: [
    HelperModule,
    ...((coreConfig.api === 'GRAPHQL') ? ResolveGraphqlModule() : ResolveRestModule())
  ]
})
export class AppModule { }
