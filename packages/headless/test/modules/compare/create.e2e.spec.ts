import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from 'src/app.module';
import { AddToCompareDto } from 'src/modules/compare/dto/compare.dto';
import { CompareService } from 'src/modules/compare/services';
import {
  connectTestDatabase,
  testProductId,
  testTimeout,
  testUserId,
} from '../../test-utility';

// const token = getDemoUserToken(testUserId, testUsername).token;
const timeout = testTimeout;
const userId = testUserId;
const productId = testProductId;
const compareDto: AddToCompareDto = { productId };

describe('Initializing... (e2e)', () => {
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
    // remove test databse collection if required
    // await removeTestCollection('compares');
    await app.close();
  });

  describe('testing POST /compare', () => {
    it('should return compare object', async () => {
      const response = await service.addItemToCompare(userId, productId);
      console.log({ response });
    });
  });
});
