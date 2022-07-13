import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { connectTestDatabase, getDemoUserToken } from '../../test-utility';
import { AppModule } from 'src/app.module';
import { ValidationPipe } from 'src/decorators/service.validator';
import { UserController } from 'src/modules/user/rest';
import { AdminId, updateAdminWithNewAddress, updateAdminWithNewAddressMissingData, updateAdminWithOldAddress, updateAdminWithoutAddress, Username } from './admin.predefined.data';
const token = getDemoUserToken(AdminId, Username, 'admin').token;

describe('Initializing... Admin Auth controller testing', () => {
    let app: INestApplication;
    let adminController: UserController;

    beforeAll(async () => {
        await connectTestDatabase();
        const module: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        adminController = module.get<UserController>(UserController);
        app = module.createNestApplication();
        app.useGlobalPipes(new ValidationPipe());
        await app.init();
    });

    afterAll(async () => {
        await Promise.all([
            app.close(),
        ])
    })

    describe('adminController is available', () => {
        it('adminController - should be defined', () => {
            expect(adminController).toBeDefined();
        });
    });

    describe('GET /user [passing without token]', () => {
        it('fails to authenticate user and should return 401', async () => {
            return await request(app.getHttpServer())
                .get('/user')
                .expect(401);
        });
    });

    describe('GET /user [passing with wrong token]', () => {
        it('fails to authenticate user and should return 401', async () => {
            return await request(app.getHttpServer())
                .get('/user')
                .set('Authorization', `Bearer ${token.replace('e', 'y')}`)
                .expect(401);
        }, 30000);
    });

    describe('GET /user [passing with right token]', () => {
        it('return admin response data and should return 200', async () => {
            return await request(app.getHttpServer())
                .get('/user')
                .set('Authorization', `Bearer ${token}`)
                .expect((res) => {
                    expect(res.statusCode).toBe(200);
                    expect(res.body.data).not.toBe(null);
                })
        }, 30000);
    });

    describe('GET /user [passing with right token & update user info]', () => {
        describe('update user personal information without address', () => {
            it('should return admin response data and status code 200', async () => {
                return await request(app.getHttpServer())
                    .patch('/user')
                    .set('Authorization', `Bearer ${token}`)
                    .send(updateAdminWithoutAddress)
                    .expect((res) => {
                        expect(res.statusCode).toBe(200);
                        expect(res.body.data).not.toBe(null);
                    })
            }, 30000);
        });

        describe('update user information & add user new address(all required data)', () => {
            it('should return admin response data and status code 200', async () => {
                return await request(app.getHttpServer())
                    .patch('/user')
                    .set('Authorization', `Bearer ${token}`)
                    .send(updateAdminWithNewAddress)
                    .expect((res) => {
                        expect(res.statusCode).toBe(200);
                        expect(res.body.data).not.toBe(null);
                    })
            }, 30000);
        });

        describe('update user information & update user old address(all required data)', () => {
            it('should return admin response data and status code 200', async () => {
                return await request(app.getHttpServer())
                    .patch('/user')
                    .set('Authorization', `Bearer ${token}`)
                    .send(updateAdminWithOldAddress)
                    .expect((res) => {
                        expect(res.statusCode).toBe(200);
                        expect(res.body.data).not.toBe(null);
                    })
            }, 30000);
        });

        describe('update user information & add user new address(required data missing)', () => {
            it('should error message with 422 bad request(Unprocessable Entity)', async () => {
                return await request(app.getHttpServer())
                    .patch('/user')
                    .set('Authorization', `Bearer ${token}`)
                    .send(updateAdminWithNewAddressMissingData)
                    .expect((res) => {
                        expect(res.statusCode).toBe(422);
                    })
            }, 30000);
        });
    });
});