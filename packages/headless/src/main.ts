import * as dotenv from 'dotenv';
dotenv.config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { connectToDatabase } from './database/database.init';
import { dbConfig } from 'config/database';
import { coreConfig } from 'config/core';
import { SwaggerConfig } from './internal/swagger/swagger.init';
import { ValidationPipe } from './decorators/service.validator';
type DB = 'MONGO' | 'MYSQL';

const cors = require('cors');

async function bootstrap() {
  await connectToDatabase(dbConfig.db as DB);
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD
  ////////////////////////////////////////////////////////////////
  const corsOptions = {
    credentials: true,
    origin: (origin, callback) => {
        return callback(null, true);

        callback(new Error('Not allowed by CORS'));
    }
};
app.use(cors(corsOptions));
  ///////////////////////////////////////////////////////////////
  await app.listen(3000);
  console.log('http://localhost:3000');
=======
  app.setGlobalPrefix(coreConfig.restApiPrefix);
  app.useGlobalPipes(new ValidationPipe());
  (coreConfig.api === 'REST') ? SwaggerConfig(app) : null
  await app.listen(coreConfig.port);
  console.log(`http://${coreConfig.host}:${coreConfig.port}`);
>>>>>>> 2993956ee77bbe8f8e5315205959e00a27b1ba4a
}

bootstrap();
