import { Module, MiddlewareConsumer } from "@nestjs/common";
import { HelperModule } from "./helper/helper.module";
import { LoggerMiddleware } from "./middleware/logger.middleware";
import { ProductModule } from "./modules/product/product.module";
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";

const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

@Module({
  imports: [
    UserModule, 
    AuthModule,
    ProductModule,
    MongooseModule.forRoot(mongoURI),
    HelperModule
  ]
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*') // for all route path
  }
};