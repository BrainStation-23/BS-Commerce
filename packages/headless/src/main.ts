import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { connectToDatabase } from './database/database.init';
import { SwaggerConfig } from './global.config';

async function bootstrap() {
  await connectToDatabase('MONGO');
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  SwaggerConfig(app);

  await app.listen(3000);
  console.log('http://localhost:3000/api');
}
bootstrap();
