import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { connectToDatabase } from './database/database.init';

async function bootstrap() {
  await connectToDatabase('MONGO');
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

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
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log('http://localhost:3000/api');
}
bootstrap();
