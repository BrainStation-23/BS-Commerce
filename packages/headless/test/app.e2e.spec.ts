import { INestApplication } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { CompareSchema } from 'src/database/mongodb/compare/compare.model';
import {
  AddToCompareDto,
  CompareResponseDto,
} from 'src/modules/compare/dto/compare.dto';
import { CompareRepository } from 'src/modules/compare/repositories';
import { CompareService } from 'src/modules/compare/services';

const userId = '76e9c15f-6816-439c-9a4f-e2fc902ffbf4';
const productId = '76e9c15f-6816-439c-9a4f-e2fc902ffbf5';
const compareDto: AddToCompareDto = { productId };
const compareResDto: CompareResponseDto = {
  items: [{ productId }],
  userId,
  id: '',
};

const mockCompareRepository = {
  createCompare: jest.fn(),
  addItemToCompare: jest.fn(),
  getCompareByUserId: jest.fn(),
};

describe('Initializing... (e2e)', () => {
  let app: INestApplication;
  let service: CompareService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/bs-commerce-test'),
        MongooseModule.forFeature([
          { name: 'Compare', schema: CompareSchema, collection: 'compares' },
        ]),
      ],
      providers: [
        CompareService,
        {
          provide: CompareRepository,
          useValue: mockCompareRepository,
        },
      ],
    }).compile();

    service = module.get<CompareService>(CompareService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('add to compare', async () => {
    const result = await service
      .addItemToCompare(userId, productId)
      .then((e) => e)
      .catch((err) => console.log(err));
    console.log(result);
    // expect(result.code).toEqual(200);
  });

  // it('/api/compare', async () => {
  //   const result = await request(app.getHttpServer())
  //     .get('/compare')
  //     .set(
  //       'Authorization',
  //       'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZjYTNkY2E0LTcxNTctNDQwMC1iMDQ1LWE3OWZiOTg5NzcxNiIsInVzZXJuYW1lIjoidGVzdDFAbWFpbC5jb20iLCJsb2dJblRpbWUiOjE2NTQ2NzM1MTU5MDMsImlhdCI6MTY1NDY3MzUxNSwiZXhwIjoxNjU0NzU5OTE1fQ.1OvKPZIbkYTUCo6mA9N4R90KF6M3IEWsR_nEuWr_ZVU',
  //     )
  //     .expect(200);

  //   console.log(result);
  // }, 30000);
});
