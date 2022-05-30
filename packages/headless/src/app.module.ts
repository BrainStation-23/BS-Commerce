<<<<<<< HEAD
import { UserAuthModule } from '@modules/user-auth/user-auth.module';
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HelperModule } from './helper/helper.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ProductModule,
    UserAuthModule,
    HelperModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*'); // for all route path
  }
}
=======
import { Module } from '@nestjs/common';
import { HelperModule } from './helper/helper.module';
import { ResolveGraphqlModule } from './internal/graphql/graphql.module.resolver';
import { ResolveRestModule } from './internal/rest/rest.module.resolver';
import { coreConfig } from 'config/core';
@Module({
  imports: [
    HelperModule,
    ...((coreConfig.api === 'GRAPHQL') ? ResolveGraphqlModule() : ResolveRestModule())
  ]
})
export class AppModule { }
>>>>>>> a21e665f167390885e2c59c0219a77d94c366598
