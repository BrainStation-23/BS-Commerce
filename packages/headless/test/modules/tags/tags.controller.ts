import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from 'src/app.module';
import { ValidationPipe } from 'src/decorators/service.validator';
import { TagsController } from 'src/modules/tags/rest';
import { connectTestDatabase, getDemoUserToken, testUserId } from 'test/test-utility';
import * as request from 'supertest';
const token = getDemoUserToken(testUserId, testUsername, 'admin').token;

describe('Initializing... Tag Controller Testing', () => {
    let app: INestApplication;
    let tagsController: TagsController;

    beforeAll(async () => {
        await connectTestDatabase();
        const module: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        tagsController = module.get<TagsController>(TagsController);
        app = module.createNestApplication();
        app.useGlobalPipes(new ValidationPipe());
        await app.init();
    });

    afterAll(async () => {
        await Promise.all([
            app.close(),
        ])
    })

    describe('tagsController is available', () => {
        it('tagsController - should be defined', () => {
            expect(tagsController).toBeDefined();
        });
    });

    describe('GET /tags [passing valid req body]', () => {
        it('should return 200 and and return tags response data', async () => {
            return await request(app.getHttpServer())
                .get('/tags')
                .expect((res) => {
                    if (res.body.data.length === 0) {
                        expect(res.statusCode).toBe(200)
                        expect(res.body.data.length).toEqual(0);
                        expect(res.body.error).toBe(undefined);
                    } else {
                        expect(res.statusCode).toBe(200);
                        expect(res.body.data.length).toEqual(expect.any(Number));
                        expect(res.body.data).toEqual(
                            expect.arrayContaining([
                                expect.objectContaining({
                                    id: expect.any(String),
                                    name: expect.any(String),
                                    createdAt: expect.any(String),
                                    updatedAt: expect.any(String),
                                }),
                            ]),
                        );
                        expect(res.body.error).toBe(undefined);
                    }
                });
        }, 30000);
    });

    describe('POST /tags [passing without token]', () => {
        it('fails to authenticate user and should return 401', async () => {
            return await request(app.getHttpServer())
                .get('/tags')
                .expect(401);
        });
    });

    describe('GET /user [passing with right token & valid req body]', () => {
        it('return created tag response data and should return 201', async () => {
            return await request(app.getHttpServer())
                .get('/user')
                .set('Authorization', `Bearer ${token}`)
                .expect((res) => {
                    expect(res.statusCode).toBe(200);
                    expect(res.body.data).not.toBe(null);
                })
        }, 30000);
    });

    describe('PATCH /user [passing with right token & update admin info]', () => {
        describe('update admin personal information without address', () => {
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

        describe('update admin information & add user new address(all required data)', () => {
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

        describe('update admin information & update user old address(all required data)', () => {
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

        describe('update admin information & add user new address(required data missing)', () => {
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

    describe('PATCH /user/password [passing with right token & change admin password]', () => {

        describe('change admin password with incorrect current password', () => {
            it('should error message with 400 bad request', async () => {
                return await request(app.getHttpServer())
                    .patch('/user/password')
                    .set('Authorization', `Bearer ${token}`)
                    .send(IncorrectCurrentChangePasswordRequest)
                    .expect((res) => {
                        expect(res.statusCode).toBe(400);
                        expect(res.body.error).toEqual('CURRENT_PASSWORD_IS_INCORRECT');
                        expect(res.body.errors).toBe(null);
                    });
            }, 30000);
        });

        describe('change admin password with valid current password & new password length less than 6 characters', () => {
            it('should error message with 422 bad request(Unprocessable Entity)', async () => {
                return await request(app.getHttpServer())
                    .patch('/user/password')
                    .set('Authorization', `Bearer ${token}`)
                    .send(ChangePasswordRequestWithLessThanSixCharactersNewPassword)
                    .expect((res) => {
                        expect(res.statusCode).toBe(422);
                        expect(res.body.errors).toEqual({ newPassword: ['newPassword must be longer than or equal to 6 characters'] });
                    });
            }, 30000);
        });

        describe('change admin password with valid current password & empty new password', () => {
            it('should error message with 422 bad request(Unprocessable Entity)', async () => {
                return await request(app.getHttpServer())
                    .patch('/user/password')
                    .set('Authorization', `Bearer ${token}`)
                    .send(ChangePasswordRequestWithoutNewPassword)
                    .expect((res) => {
                        expect(res.statusCode).toBe(422);
                        expect(res.body.errors).toEqual({ newPassword: ['newPassword must be longer than or equal to 6 characters', 'newPassword must be a string', 'newPassword should not be empty'] });
                    });
            }, 30000);
        });

        describe('change admin password with valid current password & new password', () => {
            it('should return  statusCode 200 and and return change password response data', async () => {
                return await request(app.getHttpServer())
                    .patch('/user/password')
                    .set('Authorization', `Bearer ${token}`)
                    .send(ValidCurrentChangePasswordRequest)
                    .expect((res) => {
                        expect(res.statusCode).toBe(200)
                        expect(res.body.data.message).toEqual('CHANGE_PASSWORD_SUCCESSFUL');
                        expect(res.body.error).toBe(undefined);
                    });
            }, 30000);
        });
    });
});