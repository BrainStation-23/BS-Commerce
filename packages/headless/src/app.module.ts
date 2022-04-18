import { Module, MiddlewareConsumer } from '@nestjs/common';
import { HelperModule } from './helper/helper.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { WishListModule } from './modules/wishlist/wishlist.module';

@Module({
  imports: [
    WishListModule,
    HelperModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*'); // for all route path
  }
}
