import { INestApplication, ValidationPipe } from '@nestjs/common';
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
  let compareId: string;
  beforeAll(async () => {
    await connectTestDatabase();

    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [{ provide: CompareController, useValue: mockController }],
    }).compile();

    controller = module.get<CompareController>(CompareController);
    app = module.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
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
    it('should return 403', async () => {
      const getresult = await request(app.getHttpServer())
        .get('/compare')
        .set('Authorization', `Bearer ${token.replace('e', 'y')}`)
        .expect(403);
    }, 30000);
  });

  describe('POST /compare [passing invalid req body]', () => {
    it('should not save and return error', async () => {
      const getresult = await request(app.getHttpServer())
        .post('/compare')
        .set('Authorization', `Bearer ${token}`)
        .send({ product: '1dca45d8-b6d1-4767-9edb-6c9578913ca3' })
        .expect(400);
    }, 30000);
  });

  describe('POST /compare [passing valid data]', () => {
    it('should save and return compare object', async () => {
      const getresult = await request(app.getHttpServer())
        .post('/compare')
        .send(compareDto)
        .set('Authorization', `Bearer ${token}`)
        .expect(200);
    }, 30000);
  });

  describe('GET /compare [by user id]', () => {
    it('should return compare object', async () => {
      const getresult = await request(app.getHttpServer())
        .get('/compare')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);
      compareId = getresult.body.data.id;
    }, 30000);
  });

  describe(`GET /compare/${compareId} [by compare id]`, () => {
    it('should return compare object', async () => {
      const getresult = await request(app.getHttpServer())
        .get(`/compare/${compareId}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(200);
      compareId = getresult.body.data.id;
    }, 30000);
  });

  describe(`DELETE /compare/item?productId=${productId}`, () => {
    it('should delete compare item', async () => {
      const getresult = await request(app.getHttpServer())
        .delete(`/compare/item?productId=${productId}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(200);
    }, 30000);
  });

  describe('DELETE /compare/allitems ', () => {
    it('should delete compare item', async () => {
      const getresult = await request(app.getHttpServer())
        .delete('/compare/allitems')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);
    }, 30000);
  });

  describe(`DELETE /compare?compareId=${compareId}`, () => {
    it('should delete compare item', async () => {
      const getresult = await request(app.getHttpServer())
        .delete(`/compare?compareId=${compareId}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(200);
    }, 30000);
  });

  // run test for 2nd user
});
