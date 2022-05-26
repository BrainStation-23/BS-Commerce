import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { connectToDatabase } from './database/database.init';

const cors = require('cors');

async function bootstrap() {
  await connectToDatabase('MONGO');
  const app = await NestFactory.create(AppModule);
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
}
bootstrap();
