import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from 'src/app.module';
import { ValidationPipe } from 'src/decorators/service.validator';
import { TagsController } from 'src/modules/tags/rest';
import {
  connectTestDatabase,
  GetDemoUserToken,
  TestAdminId,
  TestAdminUsername,
  TestTimeout,
} from '../../test-utility';
import * as request from 'supertest';
import {
  CreateTagRequest,
  CreateTagRequestWithoutName,
} from './tags.predefined.data';
const token = GetDemoUserToken(TestAdminId, TestAdminUsername, 'admin').token;
const timeout = TestTimeout;

describe('Initializing... Tag Controller Testing', () => {
  let app: INestApplication;
  let tagsController: TagsController;

  beforeAll(async () => {
    await connectTestDatabase();
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    tagsController = module.get<TagsController>(TagsController);
    app = module.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  afterAll(async () => {
    await Promise.all([app.close()]);
  });

  describe('tagsController is available', () => {
    it('tagsController - should be defined', () => {
      expect(tagsController).toBeDefined();
    });
  });

  describe('GET /tags', () => {
    it(
      'should return 200 and and return tags response data',
      async () => {
        return await request(app.getHttpServer())
          .get('/tags')
          .expect((res) => {
            if (res.body.data.length === 0) {
              expect(res.statusCode).toBe(200);
              expect(res.body.data.length).toEqual(0);
              expect(res.body.error).toBe(undefined);
            } else {
              expect(res.statusCode).toBe(200);
              expect(res.body.data.length).toEqual(expect.any(Number));
              expect(res.body.data).toEqual(
                expect.arrayContaining([
                  expect.objectContaining({
                    id: expect.any(String),
                    name: expect.any(String),
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String),
                  }),
                ]),
              );
              expect(res.body.error).toBe(undefined);
            }
          });
      },
      timeout,
    );
  });

  describe('POST /tags [passing with token & passing with valid data]', () => {
    it('should return 201 and and return created tag response data', async () => {
      return await request(app.getHttpServer())
        .post('/tags')
        .set('Authorization', `Bearer ${token}`)
        .send(CreateTagRequest)
        .expect((res) => {
          expect(res.statusCode).toBe(201);
          expect(res.body.data).not.toBe(null);
          expect(res.body.error).toBe(undefined);
        });
    }, 30000);
  });

  describe('POST /tags [passing with token & passing with valid data & this data already exists]', () => {
    it('should return 201 and and return created tag response data', async () => {
      return await request(app.getHttpServer())
        .post('/tags')
        .set('Authorization', `Bearer ${token}`)
        .send(CreateTagRequest)
        .expect((res) => {
          expect(res.statusCode).toBe(400);
          expect(res.body.error).toEqual('TAG_NAME_EXISTS');
        });
    }, 30000);
  });

  describe('POST /tags [passing without token]', () => {
    it('fails to authenticate admin and should return 401', async () => {
      return await request(app.getHttpServer())
        .post('/tags')
        .send(CreateTagRequest)
        .expect(401);
    });
  });

  describe('POST /tags [passing invalid token]', () => {
    it('fails to authenticate admin and should return 401', async () => {
      return await request(app.getHttpServer())
        .post('/tags')
        .send(CreateTagRequest)
        .set('Authorization', `Bearer ${token.replace('e', 'y')}`)
        .expect(401);
    });
  });

  describe('POST /tags [passing with token & passing without tag name]', () => {
    it(
      'should error message with 422 bad request(Unprocessable Entity)',
      async () => {
        return await request(app.getHttpServer())
          .post('/tags')
          .send(CreateTagRequestWithoutName)
          .set('Authorization', `Bearer ${token}`)
          .expect((res) => {
            expect(res.statusCode).toBe(422);
            expect(res.body.errors).toEqual({
              name: ['name should not be empty', 'name must be a string'],
            });
          });
      },
      timeout,
    );
  });
});
