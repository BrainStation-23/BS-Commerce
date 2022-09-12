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
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  await connectToDatabase(dbConfig.db as DB);
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '../../src/public'), {
    prefix: '/src/public',
  });
  app.enableCors();
  app.setGlobalPrefix(coreConfig.restApiPrefix);
  app.enableCors({
    allowedHeaders: "*",
    origin: "*",
    credentials: true
  });
  coreConfig.api === 'GRAPHQL' && app.use(graphqlUploadExpress({ maxFileSize: multerConfig.maxFileSize }));
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  coreConfig.api === 'REST' && SwaggerConfig(app);
  await app.listen(coreConfig.port);
  console.log(`http://${coreConfig.host}:${coreConfig.port}`);
}

bootstrap();