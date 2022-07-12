import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { connectTestDatabase } from '../../test-utility';
import { AppModule } from 'src/app.module';
import {
    createAdminRequest,
    invalidCreateAdminRequestInvalidEmail,
    invalidCreateAdminRequestWithLessThanSixCharactersPassword,
    invalidCreateAdminRequestWithoutEmail,
    invalidCreateAdminRequestWithoutFirstName,
    invalidCreateAdminRequestWithoutLastName,
    invalidCreateAdminRequestWithoutPassword
} from './admin-auth.predefined.data';
import { AuthController } from 'src/modules/auth/rest';
import { ValidationPipe } from 'src/decorators/service.validator';


describe('Initializing... Admin Auth controller testing', () => {
    let app: INestApplication;
    let adminAuthController: AuthController;
    let adminId: string;

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
            adminId = result.body.data.id;
        }, 30000);
    });

    describe('POST /auth/signup [passing invalid data as same email]', () => {
        it('should error message with 400 bad request', async () => {
            await request(app.getHttpServer())
                .post('/auth/signup')
                .send({ ...createAdminRequest, email: 'ismail61@gmail.com' })
                .expect((res) => {
                    expect(res.statusCode).toBe(400);
                    expect(res.body.error).toEqual('USER_ALREADY_EXITS');
                    expect(res.body.errors).toBe(null);
                });
        }, 30000);
    });

    describe('POST /auth/signup [passing data without first name]', () => {
        it('should error message with 422 bad request(Unprocessable Entity)', async () => {
            await request(app.getHttpServer())
                .post('/auth/signup')
                .send(invalidCreateAdminRequestWithoutFirstName)
                .expect((res) => {
                    expect(res.statusCode).toBe(422);
                    expect(res.body.errors).toEqual({ firstName: ['firstName must be a string', 'firstName should not be empty'] });
                });
        }, 30000);
    });

    describe('POST /auth/signup [passing data without last name]', () => {
        it('should error message with 422 bad request(Unprocessable Entity)', async () => {
            await request(app.getHttpServer())
                .post('/auth/signup')
                .send(invalidCreateAdminRequestWithoutLastName)
                .expect((res) => {
                    expect(res.statusCode).toBe(422);
                    expect(res.body.errors).toEqual({ lastName: ["lastName must be a string", "lastName should not be empty"] });
                });
        }, 30000);
    });

    describe('POST /auth/signup [passing data without email]', () => {
        it('should error message with 422 bad request(Unprocessable Entity)', async () => {
            await request(app.getHttpServer())
                .post('/auth/signup')
                .send(invalidCreateAdminRequestWithoutEmail)
                .expect((res) => {
                    expect(res.statusCode).toBe(422);
                    expect(res.body.errors).toEqual({ email: ["email must be an email", "email must be a string", "email should not be empty"] });
                });
        }, 30000);
    });

    describe('POST /auth/signup [passing invalid email]', () => {
        it('should error message with 422 bad request(Unprocessable Entity)', async () => {
            await request(app.getHttpServer())
                .post('/auth/signup')
                .send(invalidCreateAdminRequestInvalidEmail)
                .expect((res) => {
                    expect(res.statusCode).toBe(422);
                    expect(res.body.errors).toEqual({ email: ["email must be an email"] });
                });
        }, 30000);
    });

    describe('POST /auth/signup [passing data without password]', () => {
        it('should error message with 422 bad request(Unprocessable Entity)', async () => {
            await request(app.getHttpServer())
                .post('/auth/signup')
                .send(invalidCreateAdminRequestWithoutPassword)
                .expect((res) => {
                    expect(res.statusCode).toBe(422);
                    expect(res.body.errors).toEqual({ password: ["Password is too short. Minimal length is 6 characters", "password must be a string", "password should not be empty"] });
                });
        }, 30000);
    });

    describe('POST /auth/signup [passing data with password but password length less than 6 characters]', () => {
        it('should error message with 422 bad request(Unprocessable Entity)', async () => {
            await request(app.getHttpServer())
                .post('/auth/signup')
                .send(invalidCreateAdminRequestWithLessThanSixCharactersPassword)
                .expect((res) => {
                    expect(res.statusCode).toBe(422);
                    expect(res.body.errors).toEqual({ password: ["Password is too short. Minimal length is 6 characters"] });
                });
        }, 30000);
    });

    /* describe('Authentication', () => {
        let jwtToken: string

        describe('AuthModule', () => {
            // assume test data includes user test@example.com with password 'password'
            it('authenticates user with valid credentials and provides a jwt token', async () => {
                const response = await request(app.getHttpServer())
                    .post('/auth/login')
                    .send({ email: 'test@example.com', password: 'password' })
                    .expect(200)

                // set jwt token for use in subsequent tests
                jwtToken = response.body.accessToken
                expect(jwtToken).toMatch(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/) // jwt regex
            })

            it('fails to authenticate user with an incorrect password', async () => {
                const response = await request(app.getHttpServer())
                    .post('/auth/login')
                    .send({ email: 'test@example.com', password: 'wrong' })
                    .expect(401)

                expect(response.body.accessToken).not.toBeDefined()
            })

            // assume test data does not include a nobody@example.com user
            it('fails to authenticate user that does not exist', async () => {
                const response = await request(app.getHttpServer())
                    .post('/auth/login')
                    .send({ email: 'nobody@example.com', password: 'test' })
                    .expect(401)

                expect(response.body.accessToken).not.toBeDefined()
            })
        })
    }) */
});