import * as dotenv from 'dotenv';
dotenv.config();
import { NestFactory } from '@nestjs/core';
import * as graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.js';
import { SwaggerConfig } from './internal/swagger/swagger.init';
import { AppModule } from './app.module';
import { ValidationPipe } from './decorators/service.validator';
import { connectToDatabase, DB } from './database/database.init';
import { multerConfig } from 'config/multer';
import { dbConfig } from 'config/database';
import { coreConfig } from 'config/core';

async function bootstrap() {
  await connectToDatabase(dbConfig.db as DB);
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix(coreConfig.restApiPrefix);
  app.enableCors({ allowedHeaders: "*", origin: "*" });
  app.use(graphqlUploadExpress({ maxFileSize: multerConfig.maxFileSize }));
  app.useGlobalPipes(new ValidationPipe());
  coreConfig.api === 'REST' && SwaggerConfig(app);
  await app.listen(coreConfig.port);
  console.log(`http://${coreConfig.host}:${coreConfig.port}`);
}

bootstrap();