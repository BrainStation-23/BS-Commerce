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
import { createOrderRequest } from './test.data';

describe('Initializing Order Customer controller testing', () => {
  let app: INestApplication;

  const token = GetDemoUserToken(
    TestCustomerId,
    TestCustomerEmail,
    'customer',
  ).token;
  
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
      .post('/customer/order/')
      .set('Authorization', `Bearer ${token}`)
      .send(createOrderRequest)
      .expect((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body.data).toMatchObject({
          orderId: expect.any(String),
          userId: expect.any(String),
          billingAddress: {
            firstName: expect.any(String),
            lastName: expect.any(String),
            email: expect.any(String),
            addressLine1: expect.any(String),
            addressLine2: expect.any(String),
            city: expect.any(String),
            country: expect.any(String) ,
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
            country: expect.any(String) ,
            postCode: expect.any(String),
            phoneNumber: expect.any(String),
          },
          shippingMethod: expect.any(String),
          paymentMethod: expect.any(String),
          orderedDate: expect.any(String),
          orderStatus: expect.any(String),
          shippingStatus: expect.any(String),
          paymentStatus: expect.any(String),
          products: expect.arrayContaining([
            expect.objectContaining({
              productId: expect.any(String),
              name: expect.any(String),
              price: expect.any(Number),
              quantity: expect.any(Number),
              sku: expect.any(String),
              totalPrice: expect.any(Number),
              photos: expect.arrayContaining([
                expect.objectContaining({
                  url: expect.any(String),
                  id: expect.any(String),
                  title: expect.any(String),
                  alt: expect.any(String),
                  displayOrder: expect.any(Number) 
                })
              ])
            }),
          ]),
          productCost: expect.any(Number),
          shippingCost: expect.any(Number),
          totalCost: expect.any(Number),
          stripeToken: expect.any(String),
          stripeCustomerId: expect.any(String),
          stripeChargeId: expect.any(String),
          paypalPaymentId: expect.any(String),
          paypalRedirectUrl: expect.any(String),
        });
      });
  });

  it('/REORDER [VALID DATA]', async () => {
    
  });
});
