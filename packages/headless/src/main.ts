import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { connectToDatabase } from './database/database.init';
import { dbConfig } from 'config/database';
import { coreConfig } from 'config/core';
type DB = 'MONGO' | 'MYSQL';

async function bootstrap() {
  await connectToDatabase(dbConfig.db as DB);
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(coreConfig.appPrefix);
  app.enableCors();
  await app.listen(coreConfig.port);
  console.log(`http://${coreConfig.host}:${coreConfig.port}`);
}

bootstrap();
