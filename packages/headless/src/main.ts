import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { coreConfig } from 'src/config/core';
import { dbConfig } from 'src/config/database';
import { AppModule } from './app.module';
import { connectToDatabase } from './database/database.init';
import { ValidationPipe } from './decorators/service.validator';
import { SwaggerConfig } from './internal/swagger/swagger.init';
dotenv.config();
type DB = 'MONGO' | 'MYSQL';

async function bootstrap() {
  await connectToDatabase(dbConfig.db as DB, 'DEV');
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(coreConfig.restApiPrefix);
  app.useGlobalPipes(new ValidationPipe());
  coreConfig.api === 'REST' ? SwaggerConfig(app) : null;
  await app.listen(coreConfig.port);
  console.log(`http://${coreConfig.host}:${coreConfig.port}`);
}

bootstrap();
