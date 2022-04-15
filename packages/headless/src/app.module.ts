import { Module, MiddlewareConsumer } from "@nestjs/common";
import { HelperModule } from "./helper/helper.module";
import { LoggerMiddleware } from "./middleware/logger.middleware";
import { ProductModule } from "./modules/product/product.module";
import { ManufacturerModule } from './modules/manufacturer/manufacturer.module';

@Module({
  imports: [
    ProductModule,
    HelperModule,
    ManufacturerModule
  ]
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*') // for all route path
  }
};