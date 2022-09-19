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
import { createOrderRequest, InvalidReOrderQuery, reOrderQuery } from './test.data';
import { OrderCustomerController } from 'src/modules/order/rest/customer.controller';

describe('Initializing Order Customer controller testing', () => {
  let app: INestApplication;
  let orderId: string;

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

    module.get<OrderCustomerController>(OrderCustomerController);
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
        orderId = res.body.data.orderId;
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

  it('/REORDER [INVALID ORDER ID]', async () => {
    return await request(app.getHttpServer())
      .post('/customer/order/reOrder')
      .set('Authorization', `Bearer ${token}`)
      .send(InvalidReOrderQuery)
      .expect(400)
  });

  it('/REORDER [VALID DATA, ALL FALSE]', async () => {
    return await request(app.getHttpServer())
      .post('/customer/order/reOrder')
      .set('Authorization', `Bearer ${token}`)
      .send(reOrderQuery)
      .expect(res => {
        try{
          expect(res.body.error).toBe('NO CART WITH USER ID')
        }catch{
            try {
              expect(res.body.data.message).toBe("THESE ITEMS ARE NOT AVAILABLE RIGHT NOW")
            }
            catch{
                try{
                  expect(res.body.data.message).toBe("SOME PRODUCTS ARE NOT AVAILABLE. DO YOU WISH TO CONTINUE?")
                }catch{
                  expect(res.body.data.message).toBe("YOUR ITEMS IN THE CART WILL BE REPLACED. DO YOU WANT TO CONTINUE?")
                }
            }
        }
      })
  });

  it('GET ORDER LIST BY USER ID, NO QUERY PARAMETER', async () => {
    return await request(app.getHttpServer())
    .get('/customer/order')
    .set('Authorization', `Bearer ${token}`)
    .send({})
    .expect(res => {
      expect(res.body.data).toMatchObject({
        userId: expect.any(String),
        orderInfo: expect.arrayContaining([
          expect.objectContaining({
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
            _id: expect.any(String),
            orderId: expect.any(String),
            userId: expect.any(String),
            shippingMethod: expect.any(String),
            paymentMethod: expect.any(String),
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
            orderedDate: expect.any(String)
          })
        ])
      })
    })
  });

  it('GET ORDER LIST BY USER ID, WITH SORT FIELD', async () => {
    return await request(app.getHttpServer())
    .get('/customer/order')
    .set('Authorization', `Bearer ${token}`)
    .send({ sortField: "orderedDate"})
    .expect(res => {
      expect(res.body.data).toMatchObject({
        userId: expect.any(String),
        orderInfo: expect.arrayContaining([
          expect.objectContaining({
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
            _id: expect.any(String),
            orderId: expect.any(String),
            userId: expect.any(String),
            shippingMethod: expect.any(String),
            paymentMethod: expect.any(String),
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
            orderedDate: expect.any(String)
          })
        ])
      })
    })

  });

  it('GET ORDER LIST BY USER ID, WITH SORT TYPE', async () => {
    return await request(app.getHttpServer())
    .get('/customer/order')
    .set('Authorization', `Bearer ${token}`)
    .send({ sortType: "asc"})
    .expect(res => {
      expect(res.body.data).toMatchObject({
        userId: expect.any(String),
        orderInfo: expect.arrayContaining([
          expect.objectContaining({
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
            _id: expect.any(String),
            orderId: expect.any(String),
            userId: expect.any(String),
            shippingMethod: expect.any(String),
            paymentMethod: expect.any(String),
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
            orderedDate: expect.any(String)
          })
        ])
      })
    })
  });

  it('GET ORDER LIST BY USER ID, WITH BOTH SORTING PARAMS', async () => {
    return await request(app.getHttpServer())
    .get('/customer/order')
    .set('Authorization', `Bearer ${token}`)
    .send({ sortType: "asc", sortField: "orderedDate"})
    .expect(res => {
      expect(res.body.data).toMatchObject({
        userId: expect.any(String),
        orderInfo: expect.arrayContaining([
          expect.objectContaining({
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
            _id: expect.any(String),
            orderId: expect.any(String),
            userId: expect.any(String),
            shippingMethod: expect.any(String),
            paymentMethod: expect.any(String),
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
            orderedDate: expect.any(String)
          })
        ])
      })
    })
  });

  it('GET ORDER LIST BY ORDER ID', async () => {
    return await request(app.getHttpServer())
    .get(`/customer/order/${orderId}`)
    .set('Authorization', `Bearer ${token}`)
    .expect(res => {
      expect(res.body.data).toMatchObject({
        _id: expect.any(String),
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
            orderedDate: expect.any(String)
      })
    })
  });

  it('GET ORDER LIST BY ORDER ID WITH WRONG ORDER ID', async () => {
  return await request(app.getHttpServer())
  .get(`/customer/order/553456gfbfcb`)
  .set('Authorization', `Bearer ${token}`)
  .expect(400)
  .expect(err =>{
    expect(err.body.error).toBe('No order found')
    expect(err.body.errors).toBe(null)
  })
  });

  it('GET ORDER LIST BY USER ID WITH WRONG TOKEN', async () => {
    return await request(app.getHttpServer())
    .get(`/customer/order/553456gfbfcb`)
    .set('Authorization', `Bearer ${token.replace('e', 'y')}`)
    .expect(401)
  });

});
