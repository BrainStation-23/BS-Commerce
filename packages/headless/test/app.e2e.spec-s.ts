import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from 'src/app.module';
import { dbConfig } from 'src/config/database';
import { connectToDatabase } from 'src/database/database.init';
import { AddToCompareDto } from 'src/modules/compare/dto/compare.dto';
import * as request from 'supertest';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZjYTNkY2E0LTcxNTctNDQwMC1iMDQ1LWE3OWZiOTg5NzcxNiIsInVzZXJuYW1lIjoidGVzdDFAbWFpbC5jb20iLCJsb2dJblRpbWUiOjE2NTQ3NjAyMDkzNTQsImlhdCI6MTY1NDc2MDIwOSwiZXhwIjoxNjU0ODQ2NjA5fQ.yzx5ePwTmWo4aDAZWp43IQng7RV3Edi5fOBLFjmxffs';

const timeout = 30 * 1000;
const productId = '76e9c15f-6816-439c-9a4f-e2fc902ffbf5';
const compareDto: AddToCompareDto = { productId };

describe('Initializing... (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    type DB = 'MONGO' | 'MYSQL';
    await connectToDatabase(dbConfig.db as DB, 'TEST');

    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('GET /compare', () => {
    it('should return compare object', async () => {
      const getresult = await request(app.getHttpServer())
        .get('/compare')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);

      console.log('get result = ', getresult.body);
    }, 30000);
  });

  describe('POST /compare', () => {
    it(
      'should return compare object',
      async () => {
        const postresult = await request(app.getHttpServer())
          .post('/compare')
          .send(compareDto)
          .set('Authorization', `Bearer ${token}`)
          .expect(200);
        console.log('post result = ', postresult.body);
      },
      timeout,
    );
  });
});
