import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { connectTestDatabase, GetDemoCustomerToken, TestTimeout, } from '../../test-utility';
import { AppModule } from 'src/app.module';
import { ValidationPipe } from 'src/decorators/service.validator';
import {
    CustomerId,
    CustomerEmail,
    updateCustomerValidData,
    updateCustomerInvalidData,
    validAddress,
    invalidAddress,
    missingDataAddress,
} from './customer.predefined.data';
import { CustomerController } from 'src/modules/customer/rest';
const token = GetDemoCustomerToken(CustomerId, 'customer', CustomerEmail).token;

describe('Initializing... Customer controller testing', () => {
    let app: INestApplication;
    let customerController: CustomerController;
    let addressId: string;

    beforeAll(async () => {
        await connectTestDatabase();
        const module: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        customerController = module.get<CustomerController>(CustomerController);
        app = module.createNestApplication();
        app.useGlobalPipes(new ValidationPipe());
        await app.init();
    });

    afterAll(async () => {
        await Promise.all([
            app.close(),
        ])
    })

    describe('CustomerController is available', () => {
        it('CustomerController - should be defined', () => {
            expect(customerController).toBeDefined();
        });
    });

    describe('GET /customer [passing without token]', () => {
        it('fails to authenticate customer and should return 401', async () => {
            return await request(app.getHttpServer())
                .get('/customer')
                .expect(401);
        });
    });

    describe('GET /customer [passing with wrong token]', () => {
        it('fails to authenticate customer and should return 401', async () => {
            return await request(app.getHttpServer())
                .get('/customer')
                .set('Authorization', `Bearer ${token.replace('e', 'y')}`)
                .expect(401);
        }, TestTimeout);
    });

    describe('GET /customer [passing with right token]', () => {
        it('return customer response data and should return 200', async () => {
            return await request(app.getHttpServer())
                .get('/customer')
                .set('Authorization', `Bearer ${token}`)
                .expect((res) => {
                    expect(res.statusCode).toBe(200);
                    expect(res.body.data).not.toBe(null);
                })
        }, TestTimeout);
    });

    describe('PATCH /customer [passing with right token & update customer info & address]', () => {

        describe('update customer personal information [passing without token]', () => {
            it('fails to authenticate customer and should return 401', async () => {
                return await request(app.getHttpServer())
                    .patch('/customer')
                    .send(updateCustomerValidData)
                    .expect(401);
            });
        });

        describe('update customer personal information [passing invalid data]', () => {
            it('should error message with 422 bad request(Unprocessable Entity)', async () => {
                return await request(app.getHttpServer())
                    .patch('/customer')
                    .set('Authorization', `Bearer ${token}`)
                    .send(updateCustomerInvalidData)
                    .expect((res) => {
                        expect(res.statusCode).toBe(422);
                        expect(res.body.data).toBe(undefined);
                    })
            }, TestTimeout);
        });

        describe('update customer personal information [passing valid data]', () => {
            it('should return customer response data and status code 200', async () => {
                return await request(app.getHttpServer())
                    .patch('/customer')
                    .set('Authorization', `Bearer ${token}`)
                    .send(updateCustomerValidData)
                    .expect((res) => {
                        expect(res.statusCode).toBe(200);
                        expect(res.body.data).not.toBe(null);
                    })
            }, TestTimeout);
        });

        describe('add customer new address(all required data)', () => {
            it('should return customer response data and status code 200', async () => {
                const result: any = await request(app.getHttpServer())
                    .put('/customer/add-address')
                    .set('Authorization', `Bearer ${token}`)
                    .send(validAddress)
                    .expect((res) => {
                        expect(res.statusCode).toBe(200);
                        expect(res.body.data).not.toBe(null);
                    })
                if (result.body.data && result.body.data.addresses && result.body.data.addresses.length) {
                    addressId = result.body.data.addresses[0].id;
                }
            }, TestTimeout);
        });

        describe('update customer address(all required data)', () => {
            it('should return customer response data and status code 200', async () => {
                return await request(app.getHttpServer())
                    .patch(`/customer/update-address/${addressId}`)
                    .set('Authorization', `Bearer ${token}`)
                    .send(validAddress)
                    .expect((res) => {
                        console.log(addressId)
                        expect(res.statusCode).toBe(200);
                        expect(res.body.data).not.toBe(null);
                    })
            }, TestTimeout);
        });

        describe('add customer new address(required data missing)', () => {
            it('should error message with 422 bad request(Unprocessable Entity)', async () => {
                return await request(app.getHttpServer())
                    .put('/customer/add-address')
                    .set('Authorization', `Bearer ${token}`)
                    .send(missingDataAddress)
                    .expect((res) => {
                        expect(res.statusCode).toBe(422);
                        expect(res.body.data).toBe(undefined);
                    })
            }, TestTimeout);
        });

        describe('update customer address(required data data type mismatch)', () => {
            it('should error message with 422 bad request(Unprocessable Entity)', async () => {
                return await request(app.getHttpServer())
                    .patch(`/customer/update-address/${addressId}`)
                    .set('Authorization', `Bearer ${token}`)
                    .send(invalidAddress)
                    .expect((res) => {
                        expect(res.statusCode).toBe(422);
                        expect(res.body.data).toBe(undefined);
                    })
            }, TestTimeout);
        });

        describe('delete customer address(all required data)', () => {
            it('should return customer response data and status code 200', async () => {
                return await request(app.getHttpServer())
                    .delete(`/customer/delete-address/${addressId}`)
                    .set('Authorization', `Bearer ${token}`)
                    .expect((res) => {
                        expect(res.statusCode).toBe(200);
                        expect(res.body.data).not.toBe(null);
                    })
            }, TestTimeout);
        });
    });
});