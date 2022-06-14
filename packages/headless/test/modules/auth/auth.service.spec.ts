import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from 'src/app.module';
import { CreateUserDto, SignInDataDto } from 'src/modules/auth/dto/auth.dto';
import { AuthService } from 'src/modules/auth/services';
import {
  connectTestDatabase,
  signInDemoUser,
  signUpDemoUser,
  testProductId,
  testTimeout,
  testUserId,
} from '../../test-utility';

// const token = getDemoUserToken(testUserId, testUsername).token;
const timeout = testTimeout;
const userId = testUserId;
const productId = testProductId;
const signUpUser: CreateUserDto = signUpDemoUser();
const signInUser: SignInDataDto = signInDemoUser();

describe('Initializing... auth service testing', () => {
  let app: INestApplication;
  let service: AuthService;
  beforeAll(async () => {
    await connectTestDatabase();

    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    service = module.get<AuthService>(AuthService);
    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    // remove test databse collection if required
    // await removeTestCollection('compares');
    await app.close();
  });

  //   describe('Creating a new user....', () => {
  //     it('should return user object', async () => {
  //       const response = await service.signUp(signUpUser);
  //       expect(response.code).toEqual(201);
  //     });
  //   });
  describe('Signing in user....', () => {
    it('should return token object', async () => {
      const response = await service.signIn(signInUser);
      //   console.log({ response });
      expect(response.code).toEqual(200);
    });
  });
});
