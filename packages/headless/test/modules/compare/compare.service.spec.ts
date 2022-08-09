import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from 'src/app.module';
import { CompareService } from 'src/modules/compare/services';
import {
  connectTestDatabase,
  TestProductId,
  TestCustomerId,
} from '../../test-utility';

const userId = TestCustomerId;
const productId = TestProductId;

describe('Initializing... compare service testing', () => {
  let app: INestApplication;
  let service: CompareService;
  beforeAll(async () => {
    await connectTestDatabase();

    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    service = module.get<CompareService>(CompareService);
    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    // remove test database collection if required
    // await removeTestCollection('compares');
    await app.close();
  });

  describe('testing POST /compare', () => {
    it('should return compare object', async () => {
      const response = await service.addItemToCompare(userId, productId);
      expect(response.code).toBe(200);
    });
  });

  describe('GET /compare', () => {
    it('should return compare object', async () => {
      const response = await service.getCompareByUserId(userId);
      expect(response.code).toBe(200);
    });
  });
});
