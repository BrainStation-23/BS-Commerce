import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from 'src/app.module';
import {
  connectTestDatabase,
  GetDemoUserToken,
  TestCustomerEmail,
  TestCustomerId,
} from '../../test-utility';
import { OrderAdminController } from 'src/modules/order/rest/admin.controlller';

describe('Initializing Order Customer controller testing', () => {
  let app: INestApplication;

  const token = GetDemoUserToken(
    TestCustomerId,
    TestCustomerEmail,
    'customer',
  ).token;
  const createOrderRequest = {
    shippingCost: 100,
    billingAddress: {
      firstName: 'test',
      lastName: 'test',
      email: 'test@mail.com',
      addressLine1: 'test',
      addressLine2: 'test',
      city: 'test',
      country: 'test',
      postCode: '3421',
      phoneNumber: '01314998877',
    },
    shippingAddress: {
      firstName: 'test',
      lastName: 'test',
      email: 'test@mail.com',
      addressLine1: 'test',
      addressLine2: 'test',
      city: 'test',
      country: 'test',
      postCode: '3421',
      phoneNumber: '01314998877',
    },
    shippingMethod: 'test',
    paymentMethod: 'test',
    productCost: 100,
    products: [
      {
        productId: 'ae134fdb-ea49-4355-af54-977a97bc6020',
        name: 'test',
        price: 100,
        quantity: 2,
        sku: 'string',
      },
    ],
    stripeToken: '',
    stripeCustomerId: '',
    stripeChargeId: '',
    paypalPaymentId: '',
    paypalRedirectUrl: '',
  };
  beforeAll(async () => {
    await connectTestDatabase();
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    module.get<OrderAdminController>(OrderAdminController);
    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    // remove test database collection if required
    // await removeTestCollection('compares');
    await app.close();
  });

  it('/POST CREATE NEW ORDER [VALID DATA]', async () => {
    return await request(app.getHttpServer())
      .post('customer/order/')
      .set('Authorization', `Bearer ${token}`)
      .send(createOrderRequest)
      .expect((res) => {
        expect(res.statusCode).toBe(201);
        expect(res.body.data).toMatchObject({
          shippingCost: expect.any(Number),
          billingAddress: {
            firstName: expect.any(String),
            lastName: expect.any(String),
            email: expect.any(String),
            addressLine1: expect.any(String),
            addressLine2: expect.any(String),
            city: expect.any(String),
            country: expect.any(String),
            postCode: expect.any(String),
            phoneNumber: expect.any(String),
          },
          shippingAddress: {
            firstName: expect.any(String),
            lastName: expect.any(String),
            email: expect.any(String),
            addressLine1: expect.any(String),
            addressLine2: expect.any(String),
            city: expect.any(String),
            country: expect.any(String),
            postCode: expect.any(String),
            phoneNumber: expect.any(String),
          },
          shippingMethod: expect.any(String),
          paymentMethod: expect.any(String),
          productCost: expect.any(Number),
          products: expect.arrayContaining([
            expect.objectContaining({
              productId: expect.any(String),
              name: expect.any(String),
              price: expect.any(Number),
              quantity: expect.any(Number),
              sku: expect.any(String),
            }),
          ]),
          stripeToken: expect.any(String),
          stripeCustomerId: expect.any(String),
          stripeChargeId: expect.any(String),
          paypalPaymentId: expect.any(String),
          paypalRedirectUrl: expect.any(String),
        });
      });
  });
});
