import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from 'src/app.module';
import { AddToCompareDto } from 'src/modules/compare/dto/compare.dto';
import { CompareController } from 'src/modules/compare/rest';
import * as request from 'supertest';
import {
  connectTestDatabase,
  GetDemoCustomerToken,
  TestProductId,
  TestTimeout,
  TestCustomerId,
  TestCustomerEmail,
} from '../../test-utility';

const token = GetDemoCustomerToken(TestCustomerId, 'customer', TestCustomerEmail).token;
const timeout = TestTimeout;
const productId = TestProductId;
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
    // remove test database collection if required
    // await removeTestCollection('compares');
    await app.close();
  });

  describe('GET /compare - without token', () => {
    it('should return 403', async () => {
      return await request(app.getHttpServer())
        .get('/compare')
        .expect(403);
    }, timeout);
  });

  describe('GET /compare with wrong token', () => {
    it('should return 403', async () => {
      return await request(app.getHttpServer())
        .get('/compare')
        .set('Authorization', `Bearer ${token.replace('e', 'y')}`)
        .expect(403);
    }, timeout);
  });

  describe('POST /compare [passing invalid req body]', () => {
    it('should not save and return error', async () => {
      return await request(app.getHttpServer())
        .post('/compare')
        .set('Authorization', `Bearer ${token}`)
        .send({ product: '1dca45d8-b6d1-4767-9edb-6c9578913ca3' })
        .expect(400);
    }, timeout);
  });

  describe('POST /compare [passing valid data]', () => {
    it('should save and return compare object', async () => {
      return await request(app.getHttpServer())
        .post('/compare')
        .send(compareDto)
        .set('Authorization', `Bearer ${token}`)
        .expect(200);
    }, timeout);
  });

  describe('GET /compare [by user id]', () => {
    it('should return compare object', async () => {
      const getResult = await request(app.getHttpServer())
        .get('/compare')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);
      compareId = getResult.body.data.id;
    }, timeout);
  });

  describe(`GET /compare/${compareId} [by compare id]`, () => {
    it('should return compare object', async () => {
      const getResult = await request(app.getHttpServer())
        .get(`/compare/${compareId}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(200);
      compareId = getResult.body.data.id;
    }, timeout);
  });

  describe(`DELETE /compare/item?productId=${productId}`, () => {
    it('should delete compare item', async () => {
      return await request(app.getHttpServer())
        .delete(`/compare/item?productId=${productId}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(200);
    }, timeout);
  });

  describe('DELETE /compare/allitems ', () => {
    it('should delete compare item', async () => {
      return await request(app.getHttpServer())
        .delete('/compare/allitems')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);
    }, timeout);
  });

  describe(`DELETE /compare?compareId=${compareId}`, () => {
    it('should delete compare item', async () => {
      return await request(app.getHttpServer())
        .delete(`/compare?compareId=${compareId}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(200);
    }, timeout);
  });
});
