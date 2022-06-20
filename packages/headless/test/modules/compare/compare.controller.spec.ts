import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from 'src/app.module';
import { AddToCompareDto } from 'src/modules/compare/dto/compare.dto';
import { CompareController } from 'src/modules/compare/rest';
import * as request from 'supertest';
import {
  connectTestDatabase,
  getDemoUserToken,
  testProductId,
  testTimeout,
  testUserId,
  testUsername,
} from '../../test-utility';

const token = getDemoUserToken(testUserId, testUsername).token;
const timeout = testTimeout;
const userId = testUserId;
const productId = testProductId;
const compareDto: AddToCompareDto = { productId };

const mockController = {
  getCompareByUserId: jest.fn(),
};

describe('Initializing... Compare controller testing', () => {
  let app: INestApplication;
  let controller: CompareController;
  beforeAll(async () => {
    await connectTestDatabase();

    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [{ provide: CompareController, useValue: mockController }],
    }).compile();

    controller = module.get<CompareController>(CompareController);
    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    // remove test databse collection if required
    // await removeTestCollection('compares');
    await app.close();
  });

  describe('GET /compare - without token', () => {
    it('should return 403', async () => {
      const getresult = await request(app.getHttpServer())
        .get('/compare')
        .expect(403);
    }, 30000);
  });

  describe('GET /compare with wrong token', () => {
    it('should return error', async () => {
      const getresult = await request(app.getHttpServer())
        .get('/compare')
        .set('Authorization', `Bearer ${token.replace('e', 'y')}`)
        .expect(403);
    }, 30000);
  });

  // describe('GET /compare', () => {
  //   it('should return compare object', async () => {
  //     const getresult = await request(app.getHttpServer())
  //       .get('/compare')
  //       .set('Authorization', `Bearer ${token}`)
  //       .expect(400);
  //     console.log({ getresult });

  //     expect(controller.getCompareByUserId).toHaveBeenCalled();
  //   }, 30000);
  // });
});
