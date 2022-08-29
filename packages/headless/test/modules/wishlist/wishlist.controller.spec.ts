import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import {
    connectTestDatabase,
    GetDemoCustomerToken,
    insertCustomers,
    insertProducts,
    TestCustomerEmail,
    TestCustomerId,
    TestTimeout,
} from '../../test-utility';
import { AppModule } from 'src/app.module';
import { ValidationPipe } from 'src/decorators/service.validator';
import {
    invalidWishlistItem,
    updateValidWishlistItem,
    validWishlistItem,
} from './wishlist.predefined.data';
import { WishListController } from 'src/modules/wishlist/rest';
const token = GetDemoCustomerToken(TestCustomerId, 'customer', TestCustomerEmail).token;

describe('Initializing... Wishlist Controller Testing', () => {
    let app: INestApplication;
    let wishlistController: WishListController;
    let productId: string;
    let wishlistId: string;

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

    describe('POST /wishlist [add to a wishlist of a product.]', () => {
        describe('add to a wishlist of a product [passing without token]', () => {
            it('fails to authenticate customer and should return 401', async () => {
                return await request(app.getHttpServer())
                    .post('/wishlist')
                    .send(validWishlistItem)
                    .expect(401);
            }, TestTimeout);
        });

        describe('add to a wishlist of a product [passing wrong token]', () => {
            it('fails to authenticate customer and should return 401', async () => {
                return await request(app.getHttpServer())
                    .post('/wishlist')
                    .send(validWishlistItem)
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
            it('should return wishlist response data and status code 201', async () => {
                const result: any = await request(app.getHttpServer())
                    .post('/wishlist')
                    .set('Authorization', `Bearer ${token}`)
                    .send(validWishlistItem)
                    .expect((res) => {
                        expect(res.statusCode).toBe(201);
                        expect(res.body.data).not.toBe(null);
                    });
                if (result.body.data && result.body.data.items && result.body.data.items.length) {
                    productId = result.body.data.items[0].productId;
                    wishlistId = result.body.data.id;
                }
            }, TestTimeout);
        });
    });

    describe('GET /wishlist [get customer wishlist]', () => {
        describe('get customer wishlist [passing without token]', () => {
            it('fails to authenticate customer and should return 401', async () => {
                return await request(app.getHttpServer())
                    .get('/wishlist')
                    .expect(401);
            }, TestTimeout);
        });

        describe('get customer wishlist [passing wrong token]', () => {
            it('fails to authenticate customer and should return 401', async () => {
                return await request(app.getHttpServer())
                    .get('/wishlist')
                    .set('Authorization', `Bearer ${token.replace('e', 'y')}`)
                    .expect(401);
            }, TestTimeout);
        });

        describe('get customer wishlist [passing valid token]', () => {
            it('should return wishlist response data and status code 200', async () => {
                return await request(app.getHttpServer())
                    .get('/wishlist')
                    .set('Authorization', `Bearer ${token}`)
                    .expect((res) => {
                        expect(res.statusCode).toBe(200);
                        expect(res.body.data).not.toBe(null);
                    })
            }, TestTimeout);
        });
    });

    describe('PATCH /wishlist/item [update an item of customer wishlist]', () => {
        describe('update an item of wishlist [passing without token]', () => {
            it('fails to authenticate customer and should return 401', async () => {
                return await request(app.getHttpServer())
                    .patch('/wishlist/item')
                    .send(updateValidWishlistItem)
                    .expect(401);
            }, TestTimeout);
        });

        describe('update an item of wishlist [passing wrong token]', () => {
            it('fails to authenticate customer and should return 401', async () => {
                return await request(app.getHttpServer())
                    .patch('/wishlist/item')
                    .send(updateValidWishlistItem)
                    .set('Authorization', `Bearer ${token.replace('e', 'y')}`)
                    .expect(401);
            }, TestTimeout);
        });

        describe('update an item of wishlist [passing invalid req body]', () => {
            it('should error message with 422 bad request(Unprocessable Entity)', async () => {
                return await request(app.getHttpServer())
                    .patch('/wishlist/item')
                    .send(invalidWishlistItem)
                    .set('Authorization', `Bearer ${token}`)
                    .expect((res) => {
                        expect(res.statusCode).toBe(422);
                    })
            }, TestTimeout);
        });

        describe('update an item of wishlist [passing valid req body]', () => {
            it('should return wishlist response data and status code 200', async () => {
                return await request(app.getHttpServer())
                    .patch('/wishlist/item')
                    .send(updateValidWishlistItem)
                    .set('Authorization', `Bearer ${token}`)
                    .expect((res) => {
                        expect(res.statusCode).toBe(200);
                        expect(res.body.data).not.toBe(null);
                    })
            }, TestTimeout);
        });
    });

    describe('DELETE /wishlist/items/:productId [delete an item of customer wishlist]', () => {
        describe('delete an item of wishlist [passing without token]', () => {
            it('fails to authenticate customer and should return 401', async () => {
                return await request(app.getHttpServer())
                    .delete(`/wishlist/items/${productId}`)
                    .expect(401);
            }, TestTimeout);
        });

        describe('delete an item of wishlist [passing wrong token]', () => {
            it('fails to authenticate customer and should return 401', async () => {
                return await request(app.getHttpServer())
                    .delete(`/wishlist/items/${productId}`)
                    .set('Authorization', `Bearer ${token.replace('e', 'y')}`)
                    .expect(401);
            }, TestTimeout);
        });

        describe('delete an item of wishlist [passing invalid wishlist items productId]', () => {
            it('should error message with 400 bad request', async () => {
                return await request(app.getHttpServer())
                    .delete(`/wishlist/items/${'edf' + productId}`)
                    .set('Authorization', `Bearer ${token}`)
                    .expect((res) => {
                        expect(res.statusCode).toBe(400);
                        expect(res.body.error).toEqual('CAN_NOT_DELETE_WISHLIST_ITEM');
                        expect(res.body.errors).toBe(null);
                    })
            }, TestTimeout);
        });

        describe('delete an item of wishlist [passing valid wishlist items productId]', () => {
            it('should return wishlist response data and status code 200', async () => {
                return await request(app.getHttpServer())
                    .delete(`/wishlist/items/${productId}`)
                    .set('Authorization', `Bearer ${token}`)
                    .expect((res) => {
                        expect(res.statusCode).toBe(200);
                        expect(res.body.data).not.toBe(null);
                    })
            }, TestTimeout);
        });
    });

    describe('DELETE /wishlist/allitems [delete all items of customer wishlist]', () => {
        describe('delete all items of wishlist [passing without token]', () => {
            it('fails to authenticate customer and should return 401', async () => {
                return await request(app.getHttpServer())
                    .delete(`/wishlist/allitems`)
                    .expect(401);
            }, TestTimeout);
        });

        describe('delete all items of wishlist [passing wrong token]', () => {
            it('fails to authenticate customer and should return 401', async () => {
                return await request(app.getHttpServer())
                    .delete(`/wishlist/allitems`)
                    .set('Authorization', `Bearer ${token.replace('e', 'y')}`)
                    .expect(401);
            }, TestTimeout);
        });

        describe('delete all items of wishlist [passing valid token]', () => {
            it('should return wishlist response data and status code 200', async () => {
                return await request(app.getHttpServer())
                    .delete(`/wishlist/allitems`)
                    .set('Authorization', `Bearer ${token}`)
                    .expect((res) => {
                        expect(res.statusCode).toBe(200);
                        expect(res.body.data).not.toBe(null);
                    })
            }, TestTimeout);
        });
    });

    describe('DELETE /wishlist/:wishlistId [delete an item of customer wishlist]', () => {
        describe('delete an item of wishlist [passing without token]', () => {
            it('fails to authenticate customer and should return 401', async () => {
                return await request(app.getHttpServer())
                    .delete(`/wishlist/${wishlistId}`)
                    .expect(401);
            }, TestTimeout);
        });

        describe('delete an item of wishlist [passing wrong token]', () => {
            it('fails to authenticate customer and should return 401', async () => {
                return await request(app.getHttpServer())
                    .delete(`/wishlist/${wishlistId}`)
                    .set('Authorization', `Bearer ${token.replace('e', 'y')}`)
                    .expect(401);
            }, TestTimeout);
        });

        describe('delete an item of wishlist [passing invalid wishlistId]', () => {
            it('should error message with 400 bad request', async () => {
                return await request(app.getHttpServer())
                    .delete(`/wishlist/${'edf' + wishlistId}`)
                    .set('Authorization', `Bearer ${token}`)
                    .expect((res) => {
                        expect(res.statusCode).toBe(400);
                        expect(res.body.error).toEqual('CAN_NOT_DELETE_WISHLIST');
                        expect(res.body.errors).toBe(null);
                    })
            }, TestTimeout);
        });

        describe('delete an item of wishlist [passing valid wishlistId]', () => {
            it('should return wishlist response data and status code 200', async () => {
                return await request(app.getHttpServer())
                    .delete(`/wishlist/${wishlistId}`)
                    .set('Authorization', `Bearer ${token}`)
                    .expect((res) => {
                        expect(res.statusCode).toBe(200);
                        expect(res.body.data).not.toBe(null);
                    })
            }, TestTimeout);
        });
    });
});