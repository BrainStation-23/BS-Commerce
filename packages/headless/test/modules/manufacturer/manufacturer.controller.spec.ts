import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from 'src/app.module';
import { CreateManufacturerDto } from 'src/modules/manufacturer/rest/dto';
import { ManufacturerController } from 'src/modules/manufacturer/rest/manufacturer.controller';

import * as request from 'supertest';
import {
  connectTestDatabase,
  getDemoUserToken,
  testTimeout,
  testUserId,
  testUsername,
} from '../../test-utility';

const token = getDemoUserToken(testUserId, testUsername, 'admin').token;

const timeout = testTimeout;
const userId = testUserId;

const ManufacturerDto: CreateManufacturerDto = {
  name: 'Manufacturer Test 1',
  description: 'Test 1 description...',
  picture: 'pic.png',
  isPublished: true,
  displayOrder: 0,
  seo: {
    metaKeyword: 'manu3',
    metaDescription: 'metaDescription',
    metaTitle: 'metaTitle',
    SEFN: 'SEFN',
  },
};

const invalidReqBodyWithNestedObject = {
  name: 'test 1',
  seo: {
    metaKeyword: 123,
  },
};

const mockController = {
  // getAllManufacturers: jest.fn(),
};

describe('Initializing... Manufactrurer controller testing', () => {
  let app: INestApplication;
  let controller: ManufacturerController;
  let manufacturerId: string;

  beforeAll(async () => {
    await connectTestDatabase();

    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [
        {
          provide: ManufacturerController,
          useValue: mockController,
        },
      ],
    }).compile();

    controller = module.get<ManufacturerController>(ManufacturerController);
    app = module.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  afterAll(async () => {
    // remove test databse collection if required
    await app.close();
  });

  describe('GET /manufacturers - without token', () => {
    it('should return 403', async () => {
      return await request(app.getHttpServer())
        .get('/manufacturers')
        .expect(401);
    });
  });

  describe('GET /manufacturers with wrong token', () => {
    it('should return 403', async () => {
      return await request(app.getHttpServer())
        .get('/manufacturers')
        .set('Authorization', `Bearer ${token.replace('e', 'y')}`)
        .expect(401);
    }, 30000);
  });

  describe('GET /manufacturers with valid token', () => {
    it('should return 200', async () => {
      return await request(app.getHttpServer())
        .get('/manufacturers')
        .set('Authorization', `Bearer ${token}`)
        .expect((res) => {
          if (res.body.data.manufacturers.length === 0) {
            expect(res.statusCode).toBe(200);
            expect(res.body.data.manufacturers.length).toEqual(0);
            expect(res.body.data.message).toEqual('MANUFACTURER_IS_EMPTY');
            expect(res.body.data.total).toEqual(0);
          } else {
            expect(res.statusCode).toBe(200);
            expect(res.body.data.message).toEqual(
              'MANUFACTURERS_LOADED_SUCCESSFULLY',
            );
            expect(res.body.data.total).toEqual(expect.any(Number));
            expect(res.body.data.manufacturers).toEqual(
              expect.arrayContaining([
                expect.objectContaining({
                  _id: expect.any(String),
                  id: expect.any(String),
                  name: expect.any(String),
                  description: expect.any(String),
                  displayOrder: expect.any(Number),
                  isPublished: expect.any(Boolean),
                  picture: expect.any(String),
                  seo: expect.objectContaining({
                    SEFN: expect.any(String),
                    metaDescription: expect.any(String),
                    metaKeyword: expect.any(String),
                    metaTitle: expect.any(String),
                  }),
                  createdAt: expect.any(String),
                  updatedAt: expect.any(String),
                }),
              ]),
            );
          }
        });
    }, 30000);
  });

  describe('GET /manufacturers with valid token including queries as skip and limit', () => {
    it('should return 200', async () => {
      return await request(app.getHttpServer())
        .get('/manufacturers?skip=1&limit=3')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);
    }, 30000);
  });

  describe('GET /manufacturersCount with valid token', () => {
    it('should return 200', async () => {
      return await request(app.getHttpServer())
        .get('/manufacturers/count')
        .set('Authorization', `Bearer ${token}`)
        .expect((res) => {
          if (res.body.data.count === 0) {
            expect(res.statusCode).toBe(200);
            expect(res.body.data.count).toEqual(0);
            expect(res.body.data.message).toEqual('MANUFACTURER_IS_EMPTY');
          } else if (res.body.data.count > 0) {
            expect(res.statusCode).toBe(200);
            expect(res.body.data.message).toEqual(
              'MANUFACTURERS_COUNT_LOADED_SUCCESSFULLY',
            );
            expect(res.body.data.count).toEqual(expect.any(Number));
            expect(res.body.data.manufacturers).toEqual(
                expect.objectContaining({
                  count: expect.any(Number),
                  message: expect.any(String)
                }),
            );
          } else {
            expect(res.statusCode).toBe(400);
            expect(res.body.data.message).toEqual('MANUFACTURERS_NOT_FOUND');
          }
        });
    }, 30000);
  });

  describe('POST /manufacturers/create [passing invalid req body]', () => {
    it('should not save and return error message with 400 bad request', async () => {
      return await request(app.getHttpServer())
        .post('/manufacturers/create')
        .send({ name: 123 })
        .set('Authorization', `Bearer ${token}`)
        .expect((res) => {
          expect(res.statusCode).toBe(400);
          expect(res.body.message).toEqual(
            expect.arrayContaining([
              'name must be longer than or equal to 3 characters',
              'name must be a string',
            ]),
          );
        });
    }, 30000);
  });

  describe('POST /manufacturers/create [passing invalid req body]', () => {
    it('should not save and return error message with 400 bad request', async () => {
      return await request(app.getHttpServer())
        .post('/manufacturers/create')
        .send({ abc: 'abc' })
        .set('Authorization', `Bearer ${token}`)
        .expect((res) => {
          expect(res.statusCode).toBe(400);
          expect(res.body.message).toEqual(
            expect.arrayContaining([
              'name must be longer than or equal to 3 characters',
              'name should not be empty',
              'name must be a string',
            ]),
          );
        });
    }, 30000);
  });

  describe('POST /manufacturers/create [passing invalid req body on nested object]', () => {
    it('should not save and return error message with 400 bad request', async () => {
      return await request(app.getHttpServer())
        .post('/manufacturers/create')
        .send(invalidReqBodyWithNestedObject)
        .set('Authorization', `Bearer ${token}`)
        .expect((res) => {
          expect(res.statusCode).toBe(400);
          expect(res.body.message).toEqual(
            expect.arrayContaining([
              'seo.metaKeyword must be longer than or equal to 3 characters',
              'seo.metaKeyword must be a string',
            ]),
          );
        });
    }, 30000);
  });

  describe('POST /manufacturers/create [passing invalid data as same name]', () => {
    it('should not save and return error message with 400 bad request', async () => {
      return await request(app.getHttpServer())
        .post('/manufacturers/create')
        .send({ ...ManufacturerDto, name: 'Same Manufacturer' })
        .set('Authorization', `Bearer ${token}`)
        .expect((res) => {
          expect(res.statusCode).toBe(400);
          expect(res.body.error).toEqual('MANUFACTURER_ALREADY_EXISTS');
          expect(res.body.errors).toBe(null);
        });
    }, 30000);
  });

  describe('POST /manufacturers/create [passing valid data]', () => {
    it('should save and return manufacturer response data', async () => {
      return await request(app.getHttpServer())
        .post('/manufacturers/create')
        .send(ManufacturerDto)
        .set('Authorization', `Bearer ${token}`)
        .expect((res) => {
          expect(res.statusCode).toBe(200);
          expect(res.body.data.manufacturer).toMatchObject(ManufacturerDto);
          expect(res.body.data.message).toEqual(
            'MANUFACTURER_CREATED_SUCCESSFULLY',
          );

          manufacturerId = res.body.data.manufacturer.id;
        });
    }, 30000);
  });

  describe(`GET /manufacturers/${manufacturerId} [by manufacturer id]`, () => {
    it('should return manufacturer object with 200 status code', async () => {
      return await request(app.getHttpServer())
        .get(`/manufacturers/${manufacturerId}`)
        .set('Authorization', `Bearer ${token}`)
        .expect((res) => {
          expect(res.statusCode).toBe(200);
          expect(res.body.data.manufacturer).toMatchObject(ManufacturerDto);
          expect(res.body.data.message).toEqual(
            'MANUFACTURER_LOADED_SUCCESSFULLY',
          );
        });
    }, 30000);
  });

  describe(`GET /manufacturers/0ace6388-bce8-4417-86b1-15240b8a381c [by wrong manufacturer id]`, () => {
    it('should return error with 400 status code', async () => {
      return await request(app.getHttpServer())
        .get(`/manufacturers/0ace6388-bce8-4417-86b1-15240b8a381c`)
        .set('Authorization', `Bearer ${token}`)
        .expect((res) => {
          expect(res.statusCode).toBe(400);
          expect(res.body.error).toEqual('MANUFACTURER_NOT_FOUND');
          expect(res.body.errors).toBe(null);
        });
    }, 30000);
  });

  describe(`PATCH /manufacturers/${manufacturerId} [by manufacturer id]`, () => {
    it('should return manufacturer object with 200 status code', async () => {
      const toBeUpdated = { name: 'updated manufacturer' };

      return await request(app.getHttpServer())
        .patch(`/manufacturers/${manufacturerId}`)
        .send(toBeUpdated)
        .set('Authorization', `Bearer ${token}`)
        .expect((res) => {
          expect(res.statusCode).toBe(200);
          expect(res.body.data.manufacturer).toMatchObject({
            ...ManufacturerDto,
            ...toBeUpdated,
          });
          expect(res.body.data.message).toEqual(
            'MANUFACTURER_UPDATED_SUCCESSFULLY',
          );
        });
    }, 30000);
  });

  describe(`PATCH /manufacturers/${undefined} [by undefined data as manufacturer id]`, () => {
    it('should return error with 400 status code', async () => {
      const toBeUpdated = { name: 'updated manufacturer' };

      return await request(app.getHttpServer())
        .patch(`/manufacturers/${undefined}`)
        .send(toBeUpdated)
        .set('Authorization', `Bearer ${token}`)
        .expect(400);
    }, 30000);
  });

  describe(`DELETE /manufacturers/${manufacturerId} [by manufacturer id]`, () => {
    it('should return manufacturer object with 200 status code', async () => {
      return await request(app.getHttpServer())
        .delete(`/manufacturers/${manufacturerId}`)
        .set('Authorization', `Bearer ${token}`)
        .expect((res) => {
          expect(res.statusCode).toBe(200);
          // expect(res.body.data.manufacturer).toMatchObject(ManufacturerDto)
          expect(res.body.data.message).toEqual(
            'MANUFACTURER_DELETED_SUCCESSFULLY',
          );
        });
    }, 30000);
  });

  describe(`DELETE /manufacturers/${undefined} [by undefined data as manufacturer id]`, () => {
    it('should return error with 400 status code', async () => {
      return await request(app.getHttpServer())
        .delete(`/manufacturers/${undefined}`)
        .set('Authorization', `Bearer ${token}`)
        .expect((res) => {
          expect(res.statusCode).toBe(400);
          expect(res.body.error).toEqual('MANUFACTURER_NOT_FOUND');
          expect(res.body.errors).toBe(null);
        });
    }, 30000);
  });

  describe(`DELETE /manufacturers/0ace6388-bce8-4417-86b1-15240b8a381c [by wrong manufacturer id]`, () => {
    it('should return error with 400 status code', async () => {
      return await request(app.getHttpServer())
        .delete(`/manufacturers/0ace6388-bce8-4417-86b1-15240b8a381c`)
        .set('Authorization', `Bearer ${token}`)
        .expect((res) => {
          expect(res.statusCode).toBe(400);
          expect(res.body.error).toEqual('MANUFACTURER_NOT_FOUND');
          expect(res.body.errors).toBe(null);
        });
    }, 30000);
  });
});
