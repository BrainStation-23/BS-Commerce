import { INestApplication } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Connection } from 'mongoose';
import { AppModule } from 'src/app.module';
import { CompareModel } from 'src/database/mongodb/compare/compare.model';
import {
  AddToCompareDto,
  CompareResponseDto,
} from 'src/modules/compare/dto/compare.dto';
import { CompareRepository } from 'src/modules/compare/repositories';
import { CompareController } from 'src/modules/compare/rest';
import { CompareService } from 'src/modules/compare/services';
import * as request from 'supertest';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZjYTNkY2E0LTcxNTctNDQwMC1iMDQ1LWE3OWZiOTg5NzcxNiIsInVzZXJuYW1lIjoidGVzdDFAbWFpbC5jb20iLCJsb2dJblRpbWUiOjE2NTQ3NjAyMDkzNTQsImlhdCI6MTY1NDc2MDIwOSwiZXhwIjoxNjU0ODQ2NjA5fQ.yzx5ePwTmWo4aDAZWp43IQng7RV3Edi5fOBLFjmxffs';

const timeout = 30 * 1000;
const userId = '76e9c15f-6816-439c-9a4f-e2fc902ffbf4';
const productId = '76e9c15f-6816-439c-9a4f-e2fc902ffbf5';
const compareDto: AddToCompareDto = { productId };
const compareResDto: CompareResponseDto = {
  items: [{ productId }],
  userId,
  id: '76e9c15f-6816-439c-9a4f-e2fc902ffbf3',
};

const mockCompareRepository = {
  createCompare: jest.fn().mockResolvedValue(compareResDto),
  addItemToCompare: jest.fn().mockImplementation((val) => console.log({ val })),
  getCompareByUserId: jest.fn().mockResolvedValue(compareResDto),
};

describe('Initializing... (e2e)', () => {
  let app: INestApplication;
  let service: CompareService;
  let controller: CompareController;
  let connection: Connection;

  console.log(CompareModel.name);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      controllers: [CompareController],
      providers: [
        CompareService,
        {
          provide: CompareRepository,
          useValue: mockCompareRepository,
        },
        {
          provide: getModelToken('Compare'),
          useValue: CompareModel,
        },
      ],
    }).compile();

    service = module.get<CompareService>(CompareService);
    controller = module.get<CompareController>(CompareController);

    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(controller).toBeDefined();
  });

  // it(
  //   'add to compare',
  //   async () => {
  //     const result = await service.addItemToCompare(userId, productId);
  //     console.log(result);
  //     expect(result.code).toEqual(200);
  //   },
  //   timeout,
  // );

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
