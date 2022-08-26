import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { connectTestDatabase, insertCustomers, TestCustomerEmail, TestTimeout } from '../../test-utility';
import { AppModule } from 'src/app.module';
import { ValidationPipe } from 'src/decorators/service.validator';
import { CustomerAuthController } from 'src/modules/customer-auth/rest';
import {
    createCustomerRequestWithEmail,
    invalidCreateCustomerRequestWithLessThanSixCharactersPassword,
    invalidCreateCustomerRequestWithoutName,
    invalidCreateCustomerRequestWithoutOTP,
    invalidCreateCustomerRequestWithoutPassword,
    invalidCustomerSignInDataWithEmail,
    invalidCustomerSignInDataWithoutEmail,
    invalidCustomerSignInDataWithoutPassword,
    invalidEmailForCreateCustomerRequest,
    invalidSendOtpRequestWithEmail,
    sendOtpRequestWithEmail,
    validCustomerSignInDataWithEmail,
} from './customer-auth.predefined.data';


describe('Initializing... Customer Auth controller testing', () => {
    let app: INestApplication;
    let customerAuthController: CustomerAuthController;
    let otp: number;

    beforeAll(async () => {
        await connectTestDatabase();
        await insertCustomers()
        const module: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        customerAuthController = module.get<CustomerAuthController>(CustomerAuthController);
        app = module.createNestApplication();
        app.useGlobalPipes(new ValidationPipe());
        await app.init();
    });

    afterAll(async () => {
        await Promise.all([
            app.close(),
        ])
    })

    describe('CustomerAuthController is available', () => {
        it('CustomerAuthController - should be defined', () => {
            expect(customerAuthController).toBeDefined();
        });
    });

    describe('POST /customer/auth/register/send-otp [passing valid req body but this email already exits of a customer]', () => {
        it('should error message with 400 bad request', async () => {
            return await request(app.getHttpServer())
                .post('/customer/auth/register/send-otp')
                .send({ email: TestCustomerEmail })
                .expect((res) => {
                    expect(res.statusCode).toBe(400);
                    expect(res.body.error).toEqual('CUSTOMER_EMAIL_ALREADY_EXITS');
                    expect(res.body.errors).toBe(null);
                });
        }, TestTimeout);
    });

    describe('POST /customer/auth/register/send-otp [passing invalid email]', () => {
        it('should error message with 422 bad request(Unprocessable Entity)', async () => {
            return await request(app.getHttpServer())
                .post('/customer/auth/register/send-otp')
                .send(invalidSendOtpRequestWithEmail)
                .expect((res) => {
                    expect(res.statusCode).toBe(422);
                    expect(res.body.errors).toEqual({ email: ['email must be an email'] });
                });
        }, TestTimeout);
    });

    describe('POST /customer/auth/register/send-otp [passing valid req body]', () => {
        it('should return 200 and and return response data', async () => {
            const result: any = await request(app.getHttpServer())
                .post('/customer/auth/register/send-otp')
                .send(sendOtpRequestWithEmail)
                .expect((res) => {
                    expect(res.statusCode).toBe(200)
                    expect(res.body.data).toMatchObject({
                        message: expect.any(String),
                    })
                    expect(res.body.error).toBe(undefined);
                });
            otp = Number(result.body.data.message.split(' ').pop());
        }, TestTimeout);
    });

    describe('POST /customer/auth/register [passing data without name]', () => {
        it('should error message with 422 bad request(Unprocessable Entity)', async () => {
            return await request(app.getHttpServer())
                .post('/customer/auth/register')
                .send({ ...invalidCreateCustomerRequestWithoutName, otp })
                .expect((res) => {
                    expect(res.statusCode).toBe(422);
                    expect(res.body.errors).toEqual({ name: ['name must be a string', 'name should not be empty'] });
                });
        }, TestTimeout);
    });

    describe('POST /customer/auth/register [passing data without password]', () => {
        it('should error message with 422 bad request(Unprocessable Entity)', async () => {
            return await request(app.getHttpServer())
                .post('/customer/auth/register')
                .send({ ...invalidCreateCustomerRequestWithoutPassword, otp })
                .expect((res) => {
                    expect(res.statusCode).toBe(422);
                    expect(res.body.errors).toEqual({ password: ['Password is too short. Minimal length is 6 characters', 'password must be a string', 'password should not be empty'] });
                });
        }, TestTimeout);
    });

    describe('POST /customer/auth/register [passing data without otp]', () => {
        it('should error message with 422 bad request(Unprocessable Entity)', async () => {
            return await request(app.getHttpServer())
                .post('/customer/auth/register')
                .send(invalidCreateCustomerRequestWithoutOTP)
                .expect((res) => {
                    expect(res.statusCode).toBe(422);
                    expect(res.body.errors).toEqual({ otp: ['otp must be a number conforming to the specified constraints', 'otp should not be empty'] });
                });
        }, TestTimeout);
    });

    describe('POST /customer/auth/register [passing invalid email data]', () => {
        it('should error message with 422 bad request(Unprocessable Entity)', async () => {
            return await request(app.getHttpServer())
                .post('/customer/auth/register')
                .send({ ...invalidEmailForCreateCustomerRequest, otp })
                .expect((res) => {
                    expect(res.statusCode).toBe(422);
                    expect(res.body.errors).toEqual({ email: ['email must be an email'] });
                });
        }, TestTimeout);
    });

    describe('POST /customer/auth/register [passing data with password but password length less than 6 characters]', () => {
        it('should error message with 422 bad request(Unprocessable Entity)', async () => {
            return await request(app.getHttpServer())
                .post('/customer/auth/register')
                .send({ ...invalidCreateCustomerRequestWithLessThanSixCharactersPassword, otp })
                .expect((res) => {
                    expect(res.statusCode).toBe(422);
                    expect(res.body.errors).toEqual({ password: ['Password is too short. Minimal length is 6 characters'] });
                });
        }, TestTimeout);
    });

    describe('POST /customer/auth/register [passing valid data]', () => {
        it('should return 201 and and return response data', async () => {
            return await request(app.getHttpServer())
                .post('/customer/auth/register')
                .send({ ...createCustomerRequestWithEmail, otp })
                .expect((res) => {
                    expect(res.statusCode).toBe(201)
                    expect(res.body.data).toMatchObject({
                        message: expect.any(String),
                    })
                    expect(res.body.error).toBe(undefined);
                });
        }, TestTimeout);
    });

    describe('POST /customer/auth/sign-in', () => {
        let jwtToken: string

        describe('Customer Authentication', () => {
            it('authenticates customer with valid credentials and provides a jwt token', async () => {
                const response = await request(app.getHttpServer())
                    .post('/customer/auth/sign-in')
                    .send(validCustomerSignInDataWithEmail)
                    .expect(200)

                jwtToken = response.body.data.token;
                // jwt regex
                expect(jwtToken).toMatch(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/);
            }, TestTimeout)

            it('fails to authenticate customer with an incorrect password/email', async () => {
                return await request(app.getHttpServer())
                    .post('/customer/auth/sign-in')
                    .send(invalidCustomerSignInDataWithEmail)
                    .expect((res) => {
                        expect(res.statusCode).toBe(400);
                        expect(res.body.error).toEqual('INVALID_CREDENTIALS');
                        expect(res.body.errors).toBe(null);
                    });
            }, TestTimeout)

            it('fails to authenticate customer without passing email', async () => {
                return await request(app.getHttpServer())
                    .post('/customer/auth/sign-in')
                    .send(invalidCustomerSignInDataWithoutEmail)
                    .expect((res) => {
                        expect(res.statusCode).toBe(400);
                        expect(res.body.error).toEqual('INVALID_CREDENTIALS');
                        expect(res.body.errors).toBe(null);
                    });
            }, TestTimeout)

            it('fails to authenticate customer without passing password', async () => {
                return await request(app.getHttpServer())
                    .post('/customer/auth/sign-in')
                    .send(invalidCustomerSignInDataWithoutPassword)
                    .expect((res) => {
                        expect(res.statusCode).toBe(422);
                        expect(res.body.errors).toEqual({ password: ['Password is too short. Minimal length is 6 characters', 'password must be a string', 'password should not be empty'] });
                    });
            }, TestTimeout)
        })
    })
});