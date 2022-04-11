import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { connectToDatabase } from './database/database.init';

async function bootstrap() {
	await connectToDatabase('MONGO');
	const app = await NestFactory.create(AppModule);

	/**
	 * Swagger setup
	 */
	const config = new DocumentBuilder()
		.setTitle('BS Commerce Backend')
		.setDescription('API description')
		.setVersion('1.0')
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, document);

	await app.listen(3000);
	console.log('http://localhost:3000/api');
}
bootstrap();
