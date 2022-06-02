import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from 'src/app.module';

describe('Initializing... (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/compare', async () => {
    const result = await request(app.getHttpServer())
      .get('/compare')
      .set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk5ZTg5OTE2LTc4YTYtNGM4Zi1iOWI3LWFjNWIxYjY3Y2IzNyIsInVzZXJuYW1lIjoidGVzdEB0ZXN0LmNvbSIsImxvZ0luVGltZSI6MTY1NDE2MTgwNzEyMCwiaWF0IjoxNjU0MTYxODA3LCJleHAiOjE2NTQyNDgyMDd9.WNNe559eUN_Nf0EzPEZQtz9erhnoUAVbsxJyIpKYY4w',
      )
      .expect(200);

    console.log(result);
  }, 30000);
});
