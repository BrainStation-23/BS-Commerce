import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { connectToDatabase } from './database/database.init';

async function bootstrap() {
  await connectToDatabase('MONGO');
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(3000);
  console.log('http://localhost:3000');
}

bootstrap();
