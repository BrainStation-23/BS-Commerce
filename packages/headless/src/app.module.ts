import { Module, MiddlewareConsumer } from '@nestjs/common';
import { HelperModule } from './helper/helper.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { CartModule } from './modules/cart/cart.module';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [ProductModule, CartModule, HelperModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*'); // for all route path
  }
}
