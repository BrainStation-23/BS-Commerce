import * as dotenv from 'dotenv';
dotenv.config();
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { connectToDatabase } from './database/database.init';
import { dbConfig } from 'config/database';
import { coreConfig } from 'config/core';
import { SwaggerConfig } from './internal/swagger/swagger.init';
import { ValidationPipe } from './decorators/service.validator';
type DB = 'MONGO' | 'MYSQL';

async function bootstrap() {
  await connectToDatabase(dbConfig.db as DB);
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD
  const config = new DocumentBuilder()
    .setTitle('BS-Commerce Backend')
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('BS-Commerce')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  await app.listen(3000);
  console.log('http://localhost:3000/api');
=======
  app.setGlobalPrefix(coreConfig.restApiPrefix);
  app.useGlobalPipes(new ValidationPipe());
  (coreConfig.api === 'REST') ? SwaggerConfig(app) : null
  await app.listen(coreConfig.port);
  console.log(`http://${coreConfig.host}:${coreConfig.port}`);
>>>>>>> a21e665f167390885e2c59c0219a77d94c366598
}

bootstrap();
