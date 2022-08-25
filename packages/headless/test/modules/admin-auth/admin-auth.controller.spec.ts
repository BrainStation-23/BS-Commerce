import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { connectTestDatabase, TestTimeout } from '../../test-utility';
import { AppModule } from 'src/app.module';
import {
    createAdminRequest,
    invalidCreateAdminRequestInvalidEmail,
    invalidCreateAdminRequestWithLessThanSixCharactersPassword,
    invalidCreateAdminRequestWithoutEmail,
    invalidCreateAdminRequestWithoutFirstName,
    invalidCreateAdminRequestWithoutLastName,
    invalidCreateAdminRequestWithoutPassword,
    invalidSignInAdminRequestWithoutPassword,
    invalidSignInAdminRequestWithoutUsername,
    invalidSignInData,
    signInData
} from './admin-auth.predefined.data';
import { AuthController } from 'src/modules/auth/rest';
import { ValidationPipe } from 'src/decorators/service.validator';


describe('Initializing... Admin Auth controller testing', () => {
    let app: INestApplication;
    let adminAuthController: AuthController;

    beforeAll(async () => {
        await connectTestDatabase();
        const module: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        adminAuthController = module.get<AuthController>(AuthController);
        app = module.createNestApplication();
        app.useGlobalPipes(new ValidationPipe());
        await app.init();
    });

    afterAll(async () => {
        await Promise.all([
            app.close(),
        ])
    })

    describe('adminAuthController is available', () => {
        it('adminAuthController - should be defined', () => {
            expect(adminAuthController).toBeDefined();
        });
    });

    describe('POST /auth/signup [passing valid req body]', () => {
        it('should return 201 and and return created admin response data', async () => {
            const result = await request(app.getHttpServer())
                .post('/auth/signup')
                .send(createAdminRequest)
                .expect((res) => {
                    expect(res.statusCode).toBe(201)
                    expect(res.body.data.message).toEqual('USER_CREATED_SUCCESSFUL');
                    expect(res.body.error).toBe(undefined);
                });
        }, TestTimeout);
    });

    describe('POST /auth/signup [passing invalid data as same email]', () => {
        it('should error message with 400 bad request', async () => {
            return await request(app.getHttpServer())
                .post('/auth/signup')
                .send({ ...createAdminRequest, email: 'ismail61@gmail.com' })
                .expect((res) => {
                    expect(res.statusCode).toBe(400);
                    expect(res.body.error).toEqual('USER_ALREADY_EXITS');
                    expect(res.body.errors).toBe(null);
                });
        }, TestTimeout);
    });

    describe('POST /auth/signup [passing data without first name]', () => {
        it('should error message with 422 bad request(Unprocessable Entity)', async () => {
            return await request(app.getHttpServer())
                .post('/auth/signup')
                .send(invalidCreateAdminRequestWithoutFirstName)
                .expect((res) => {
                    expect(res.statusCode).toBe(422);
                    expect(res.body.errors).toEqual({ firstName: ['firstName must be a string', 'firstName should not be empty'] });
                });
        }, TestTimeout);
    });

    describe('POST /auth/signup [passing data without last name]', () => {
        it('should error message with 422 bad request(Unprocessable Entity)', async () => {
            return await request(app.getHttpServer())
                .post('/auth/signup')
                .send(invalidCreateAdminRequestWithoutLastName)
                .expect((res) => {
                    expect(res.statusCode).toBe(422);
                    expect(res.body.errors).toEqual({ lastName: ["lastName must be a string", "lastName should not be empty"] });
                });
        }, TestTimeout);
    });

    describe('POST /auth/signup [passing data without email]', () => {
        it('should error message with 422 bad request(Unprocessable Entity)', async () => {
            return await request(app.getHttpServer())
                .post('/auth/signup')
                .send(invalidCreateAdminRequestWithoutEmail)
                .expect((res) => {
                    expect(res.statusCode).toBe(422);
                    expect(res.body.errors).toEqual({ email: ["email must be an email", "email must be a string", "email should not be empty"] });
                });
        }, TestTimeout);
    });

    describe('POST /auth/signup [passing invalid email]', () => {
        it('should error message with 422 bad request(Unprocessable Entity)', async () => {
            return await request(app.getHttpServer())
                .post('/auth/signup')
                .send(invalidCreateAdminRequestInvalidEmail)
                .expect((res) => {
                    expect(res.statusCode).toBe(422);
                    expect(res.body.errors).toEqual({ email: ["email must be an email"] });
                });
        }, TestTimeout);
    });

    describe('POST /auth/signup [passing data without password]', () => {
        it('should error message with 422 bad request(Unprocessable Entity)', async () => {
            return await request(app.getHttpServer())
                .post('/auth/signup')
                .send(invalidCreateAdminRequestWithoutPassword)
                .expect((res) => {
                    expect(res.statusCode).toBe(422);
                    expect(res.body.errors).toEqual({ password: ["Password is too short. Minimal length is 6 characters", "password must be a string", "password should not be empty"] });
                });
        }, TestTimeout);
    });

    describe('POST /auth/signup [passing data with password but password length less than 6 characters]', () => {
        it('should error message with 422 bad request(Unprocessable Entity)', async () => {
            return await request(app.getHttpServer())
                .post('/auth/signup')
                .send(invalidCreateAdminRequestWithLessThanSixCharactersPassword)
                .expect((res) => {
                    expect(res.statusCode).toBe(422);
                    expect(res.body.errors).toEqual({ password: ["Password is too short. Minimal length is 6 characters"] });
                });
        }, TestTimeout);
    });

    describe('POST /auth/signin', () => {
        let jwtToken: string

        describe('authentication', () => {
            it('authenticates user with valid credentials and provides a jwt token', async () => {
                const response = await request(app.getHttpServer())
                    .post('/auth/signin')
                    .send(signInData)
                    .expect(200)

                jwtToken = response.body.data.token;
                // jwt regex
                expect(jwtToken).toMatch(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/);
            }, TestTimeout)

            it('fails to authenticate user with an incorrect password/username', async () => {
                return await request(app.getHttpServer())
                    .post('/auth/signin')
                    .send(invalidSignInData)
                    .expect((res) => {
                        expect(res.statusCode).toBe(400);
                        expect(res.body.error).toEqual('INVALID_CREDENTIALS');
                        expect(res.body.errors).toBe(null);
                    });
            }, TestTimeout)

            it('fails to authenticate user without passing username', async () => {
                return await request(app.getHttpServer())
                    .post('/auth/signin')
                    .send(invalidSignInAdminRequestWithoutUsername)
                    .expect((res) => {
                        expect(res.statusCode).toBe(422);
                        expect(res.body.errors).toEqual({ username: ["username must be a string", "username should not be empty"] });
                    });
            }, TestTimeout)

            it('fails to authenticate user without passing password', async () => {
                return await request(app.getHttpServer())
                    .post('/auth/signin')
                    .send(invalidSignInAdminRequestWithoutPassword)
                    .expect((res) => {
                        expect(res.statusCode).toBe(422);
                        expect(res.body.errors).toEqual({ password: ["INVALID_CREDENTIALS", "password must be a string"] });
                    });
            }, TestTimeout)
        })
    })
});