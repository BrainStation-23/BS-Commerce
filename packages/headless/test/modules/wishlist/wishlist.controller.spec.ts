import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import {
    connectTestDatabase,
    GetDemoCustomerToken,
    GetDemoUserToken,
    insertAdmins,
    insertCustomers,
    insertProducts,
    TestAdminId,
    TestAdminUsername,
    TestCustomerEmail,
    TestCustomerId,
    TestTimeout,
} from '../../test-utility';
import { AppModule } from 'src/app.module';
import { ValidationPipe } from 'src/decorators/service.validator';
import {
    changePasswordRequestWithLessThanSixCharactersNewPassword,
    changePasswordRequestWithoutNewPassword,
    incorrectCurrentChangePasswordRequest,
    invalidWishlistItem,
    updateAdminWithNewAddress,
    updateAdminWithNewAddressMissingData,
    updateAdminWithOldAddress,
    updateAdminWithoutAddress,
    validCurrentChangePasswordRequest,
    validWishlistItem,
} from './wishlist.predefined.data';
import { WishListController } from 'src/modules/wishlist/rest';
const token = GetDemoCustomerToken(TestCustomerId, 'customer', TestCustomerEmail).token;

describe('Initializing... Wishlist controller testing', () => {
    let app: INestApplication;
    let wishlistController: WishListController;
    let addressId: string;

    beforeAll(async () => {

        await connectTestDatabase();
        await insertCustomers();
        await insertProducts();

        const module: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        wishlistController = module.get<WishListController>(WishListController);
        app = module.createNestApplication();
        app.useGlobalPipes(new ValidationPipe());
        await app.init();
    });

    afterAll(async () => {
        await Promise.all([
            app.close(),
        ])
    })

    describe('wishlistController is available', () => {
        it('wishlistController - should be defined', () => {
            expect(wishlistController).toBeDefined();
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
        }, TestTimeout);
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
        }, TestTimeout);
    });

    describe('POST /wishlist [add to a wishlist of a product.]', () => {

        describe('add to a wishlist of a product [passing without token]', () => {
            it('fails to authenticate customer and should return 401', async () => {
                return await request(app.getHttpServer())
                    .post('/wishlist')
                    .expect(401);
            }, TestTimeout);
        });

        describe('add to a wishlist of a product [passing wrong token]', () => {
            it('fails to authenticate customer and should return 401', async () => {
                return await request(app.getHttpServer())
                    .post('/wishlist')
                    .set('Authorization', `Bearer ${token.replace('e', 'y')}`)
                    .expect(401);
            }, TestTimeout);
        });

        describe('add to a wishlist of a product [passing invalid req body]', () => {
            it('should error message with 422 bad request(Unprocessable Entity)', async () => {
                return await request(app.getHttpServer())
                    .post('/wishlist')
                    .set('Authorization', `Bearer ${token}`)
                    .send(invalidWishlistItem)
                    .expect((res) => {
                        expect(res.statusCode).toBe(422);
                    })
            }, TestTimeout);
        });

        describe('add to a wishlist of a product [passing valid req body]', () => {
            it('should return admin response data and status code 200', async () => {
                return await request(app.getHttpServer())
                    .post('/wishlist')
                    .set('Authorization', `Bearer ${token}`)
                    .send(validWishlistItem)
                    .expect((res) => {
                        expect(res.statusCode).toBe(200);
                        expect(res.body.data).not.toBe(null);
                    })
            }, TestTimeout);
        });
    });

    describe('GET /wishlist [get customer wishlist]', () => {

        describe('get customer wishlist [passing without token]', () => {
            it('fails to authenticate customer and should return 401', async () => {
                return await request(app.getHttpServer())
                    .post('/wishlist')
                    .expect(401);
            }, TestTimeout);
        });

        describe('get customer wishlist [passing wrong token]', () => {
            it('fails to authenticate customer and should return 401', async () => {
                return await request(app.getHttpServer())
                    .post('/wishlist')
                    .set('Authorization', `Bearer ${token.replace('e', 'y')}`)
                    .expect(401);
            }, TestTimeout);
        });

        describe('add to a wishlist of a product [passing invalid req body]', () => {
            it('should error message with 422 bad request(Unprocessable Entity)', async () => {
                return await request(app.getHttpServer())
                    .post('/wishlist')
                    .set('Authorization', `Bearer ${token}`)
                    .send(invalidWishlistItem)
                    .expect((res) => {
                        expect(res.statusCode).toBe(422);
                    })
            }, TestTimeout);
        });

        describe('add to a wishlist of a product [passing valid req body]', () => {
            it('should return admin response data and status code 200', async () => {
                return await request(app.getHttpServer())
                    .post('/wishlist')
                    .set('Authorization', `Bearer ${token}`)
                    .send(validWishlistItem)
                    .expect((res) => {
                        expect(res.statusCode).toBe(200);
                        expect(res.body.data).not.toBe(null);
                    })
            }, TestTimeout);
        });
    });
});