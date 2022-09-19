import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from 'src/app.module';
import {
  connectTestDatabase,
  GetDemoUserToken,
  TestAdminId,
  TestAdminUsername,
} from '../../test-utility';
import { OrderAdminController } from 'src/modules/order/rest/admin.controlller';
import { changeStatusBody, InvalidChangeStatusBody } from './test.data';

describe('Initializing Order Customer controller testing', () => {
    let app: INestApplication;
    let orderId: string = '173137531326110';
    let invalidOrderId: string = '173137ddd26110';

    const response = {
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
                displayOrder: expect.any(Number),
            }),
            ]),
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
        orderedDate: expect.any(String),
    };
    const token = GetDemoUserToken(TestAdminId, TestAdminUsername, 'admin').token;

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

    it('/GET ORDER ENUMS', async () => {
        return await request(app.getHttpServer())
        .get('/admin/order/enums')
        .set('Authorization', `Bearer ${token}`)
        .expect((res) => {
            expect(res.status).toBe(200)
            expect(res.body.data).toMatchObject({
                orderStatusEnums: {
                    Pending: expect.any(String),
                    Processing: expect.any(String),
                    Completed: expect.any(String),
                    Cancelled: expect.any(String)
                },
                paymentStatusEnums: {
                    Pending: expect.any(String),
                    Paid: expect.any(String),
                    Cancelled: expect.any(String)
                },
                shippingStatusEnum: {
                    NotYetShipped: expect.any(String),
                    PartiallyShipped: expect.any(String),
                    Shipped: expect.any(String),
                    Delivered: expect.any(String)
                }
            })
        });
    });

    it('/GET ORDER STATISTICS', async () => {
        return await request(app.getHttpServer())
        .get('/admin/order/statistics')
        .set('Authorization', `Bearer ${token}`)
        .expect((res) => {
            expect(res.status).toBe(200)
            expect(res.body.data).toMatchObject({
                _id: expect.any(String),
                todayTotal: expect.any(Number),
                weekTotal: expect.any(Number),
                monthTotal: expect.any(Number),
                yearTotal: expect.any(Number),
                allTimeTotal: expect.any(Number)
            })
        });
    });

    it('/GET INCOMPLETE ORDER STATISTICS', async () => {
        return await request(app.getHttpServer())
        .get('/admin/order/incomplete/statistics')
        .set('Authorization', `Bearer ${token}`)
        .expect((res) => {
            expect(res.status).toBe(200)
            expect(res.body.data).toMatchObject({
                orderPendingTotal: expect.any(Number),
                orderPendingCount: expect.any(Number),
                paymentPendingTotal: expect.any(Number),
                paymentPendingCount: expect.any(Number),
                shippingPendingTotal: expect.any(Number),
                shippingPendingCount: expect.any(Number)
            })
        });
    });

    it('/GET ORDER LIST WITHOUT QUERY PARAMS', async () => {
        return await request(app.getHttpServer())
        .get('/admin/order/orderList')
        .set('Authorization', `Bearer ${token}`)
        .send({})
        .expect(res => {
            expect(res.statusCode).toBe(200);
            expect(res.body.data).toMatchObject({
                orders: expect.arrayContaining([
                    expect.objectContaining(response)
                ])
            });
        })
    });

    it('/GET ORDER LIST WITHOUT QUERY PARAMS', async () => {
        return await request(app.getHttpServer())
        .get('/admin/order/orderList')
        .set('Authorization', `Bearer ${token}`)
        .send({shippingStatus: "Pending"})
        .expect(res => {
            expect(res.statusCode).toBe(200);
            expect(res.body.data).toMatchObject({
                orders: expect.arrayContaining([
                    expect.objectContaining(response)
                ])
            });
        })
    });

    it('GET ORDER LIST BY ORDER ID', async () => {
    return await request(app.getHttpServer())
      .get(`/admin/order/${orderId}`)
      .set('Authorization', `Bearer ${token}`)
      .expect((res) => {
        expect(res.body.data).toMatchObject(response);
      });
    });

    it('ERROR GET ORDER LIST BY [INVALID ORDER ID]', async () => {
        return await request(app.getHttpServer())
          .get(`/admin/order/${invalidOrderId}`)
          .set('Authorization', `Bearer ${token}`)
          .expect(400)
    });

    it('PATCH CHANGE STATUS TYPES OF ORDER', async () => {
        return await request(app.getHttpServer())
          .patch(`/admin/order/change-status`)
          .set('Authorization', `Bearer ${token}`)
          .send(changeStatusBody)
          .expect((res) => {
            expect(res.body.data).toMatchObject(response);
          });
    });

    it('ERROR PATCH CHANGE STATUS TYPES OF ORDER [INVALID ORDER ID]', async () => {
        return await request(app.getHttpServer())
          .patch(`/admin/order/change-status`)
          .set('Authorization', `Bearer ${token}`)
          .send(InvalidChangeStatusBody)
          .expect(400);
    });
});
