import { Module } from '@nestjs/common';
import { HelperModule } from './helper/helper.module';
import { ResolveGraphqlModule } from './internal/graphql/graphql.module.resolver';
import { ResolveRestModule } from './internal/rest/rest.module.resolver';
import { coreConfig } from 'config/core';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV
        ? `${process.cwd()}/${process.env.NODE_ENV}.env`
        : 'development.env',
    }),
    HelperModule,
    ...(coreConfig.api === 'GRAPHQL'
      ? ResolveGraphqlModule()
      : ResolveRestModule()),
  ],
})
export class AppModule {}
