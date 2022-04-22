import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
dotenv.config();

export const SwaggerConfig = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('BS-Commerce Backend')
    .addBearerAuth({
      description: 'User JWT Token',
      type: 'http',
      name: 'Authorization',
      bearerFormat: 'JWT',
    })
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('BS-Commerce')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  return SwaggerModule.setup('api', app, document);
};
