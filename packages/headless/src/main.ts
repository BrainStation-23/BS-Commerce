import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { connectToDatabase } from './database/database.init';

async function bootstrap() {
  await connectToDatabase('MONGO');
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('BS Commerce Backend')
    .setDescription('API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
  console.log('http://localhost:3000');
}
bootstrap();
