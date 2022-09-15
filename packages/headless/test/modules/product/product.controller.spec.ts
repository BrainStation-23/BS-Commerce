import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import {
  connectTestDatabase,
  GetDemoUserToken,
  insertAdmins,
  insertProducts,
  TestAdminId,
  TestAdminUsername,
  TestTimeout,
} from '../../test-utility';
import { AppModule } from 'src/app.module';
import { ValidationPipe } from 'src/decorators/service.validator';
import {
  existingFriendlyPageNameProductRequest,
  existingFriendlyPageNameUpdateProductRequest,
  existingSKUProductRequest,
  existingSKUUpdateProductRequest,
  invalidProductId,
  invalidProductRequest,
  invalidProductSKU,
  invalidProductURl,
  invalidUpdatedProductsUsingBrandId,
  invalidUpdateProductRequest,
  validProductId,
  validProductRequest,
  validProductSKU,
  validProductURl,
  validUpdatedProductsUsingBrandId,
  validUpdateProductRequest,
} from './product.predefined.data';
import { ProductController } from 'src/modules/product/rest';
const token = GetDemoUserToken(TestAdminId, TestAdminUsername, 'admin').token;

describe('Initializing... Product Controller Testing', () => {
  let app: INestApplication;
  let productController: ProductController;
  let productId: string;

  beforeAll(async () => {
    await connectTestDatabase();
    await insertProducts();
    await insertAdmins();

    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    productController = module.get<ProductController>(ProductController);
    app = module.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  afterAll(async () => {
    await Promise.all([app.close()]);
  });

  describe('productController is available', () => {
    it('productController - should be defined', () => {
      expect(productController).toBeDefined();
    });
  });

  // Customer
  describe('GET /customer/products [get all products(condition)]', () => {
    describe('get all products [passing without condition]', () => {
      it(
        'should return products response data and status code 200',
        async () => {
          return await request(app.getHttpServer())
            .get('/customer/products')
            .expect((res) => {
              expect(res.statusCode).toBe(200);
              expect(res.body.data).not.toBe(null);
            });
        },
        TestTimeout,
      );
    });

    describe('get all products [passing with condition]', () => {
      it(
        'should return products response data and status code 200',
        async () => {
          return await request(app.getHttpServer())
            .get(
              `/customer/products?categoryId=4f336ccd-e172-44b6-b5c1-15b61c3ef000`,
            )
            .expect((res) => {
              expect(res.statusCode).toBe(200);
              expect(res.body.data).not.toBe(null);
              expect(res.body.error).toBe(undefined);
            });
        },
        TestTimeout,
      );
    });
  });

  describe('GET /customer/product/:url [get single product by url]', () => {
    describe('get single product by url [passing invalid url]', () => {
      it(
        'should error message with 400 bad request',
        async () => {
          return await request(app.getHttpServer())
            .get(`/customer/product/${invalidProductURl}`)
            .expect((res) => {
              expect(res.statusCode).toBe(400);
              expect(res.body.error).toEqual('CAN_NOT_GET_PRODUCT');
              expect(res.body.errors).toBe(null);
            });
        },
        TestTimeout,
      );
    });

    describe('get single product by url [passing valid url]', () => {
      it(
        'should return products response data and status code 200',
        async () => {
          return await request(app.getHttpServer())
            .get(`/customer/product/${validProductURl}`)
            .expect((res) => {
              expect(res.statusCode).toBe(200);
              expect(res.body.data).not.toBe(null);
              expect(res.body.error).toBe(undefined);
            });
        },
        TestTimeout,
      );
    });
  });

  describe('GET /customer/products/:productId [get single product by productId]', () => {
    describe('get single product by productId [passing invalid productId]', () => {
      it(
        'should error message with 400 bad request',
        async () => {
          return await request(app.getHttpServer())
            .get(`/customer/products/${invalidProductId}`)
            .expect((res) => {
              expect(res.statusCode).toBe(400);
              expect(res.body.error).toEqual('CAN_NOT_GET_PRODUCT');
              expect(res.body.errors).toBe(null);
            });
        },
        TestTimeout,
      );
    });

    describe('get single product by productId [passing valid productId]', () => {
      it(
        'should return products response data and status code 200',
        async () => {
          return await request(app.getHttpServer())
            .get(`/customer/products/${validProductId}`)
            .expect((res) => {
              expect(res.statusCode).toBe(200);
              expect(res.body.data).not.toBe(null);
              expect(res.body.error).toBe(undefined);
            });
        },
        TestTimeout,
      );
    });
  });

  // Admin
  describe('GET /products/count [get all products(skip & limit)]', () => {
    describe('get all products [passing without token]', () => {
      it(
        'fails to authenticate admin and should return 401',
        async () => {
          return await request(app.getHttpServer())
            .get('/products')
            .expect(401);
        },
        TestTimeout,
      );
    });

    describe('get all products  [passing wrong token]', () => {
      it(
        'fails to authenticate admin and should return 401',
        async () => {
          return await request(app.getHttpServer())
            .get('/products')
            .set('Authorization', `Bearer ${token.replace('e', 'y')}`)
            .expect(401);
        },
        TestTimeout,
      );
    });

    describe('get all products [passing valid token]', () => {
      it(
        'should return products response data and status code 200',
        async () => {
          return await request(app.getHttpServer())
            .get(`/products?slip=1`)
            .set('Authorization', `Bearer ${token}`)
            .expect((res) => {
              expect(res.statusCode).toBe(200);
              expect(res.body.data).not.toBe(null);
              expect(res.body.error).toBe(undefined);
            });
        },
        TestTimeout,
      );
    });
  });

  describe('GET /products/count [get products count]', () => {
    describe('get products count [passing without token]', () => {
      it(
        'fails to authenticate admin and should return 401',
        async () => {
          return await request(app.getHttpServer())
            .get('/products/count')
            .expect(401);
        },
        TestTimeout,
      );
    });

    describe('get products count [passing wrong token]', () => {
      it(
        'fails to authenticate admin and should return 401',
        async () => {
          return await request(app.getHttpServer())
            .get('/products/count')
            .set('Authorization', `Bearer ${token.replace('e', 'y')}`)
            .expect(401);
        },
        TestTimeout,
      );
    });

    describe('get products count [passing right token & valid token]', () => {
      it(
        'should return products response data and status code 200',
        async () => {
          return await request(app.getHttpServer())
            .get(`/products/count`)
            .set('Authorization', `Bearer ${token}`)
            .expect((res) => {
              expect(res.statusCode).toBe(200);
              expect(res.body.data).toEqual(
                expect.objectContaining({
                  count: expect.any(Number),
                }),
              );
              expect(res.body.error).toBe(undefined);
            });
        },
        TestTimeout,
      );
    });
  });

  describe('GET /products/sku/:sku [get single product by sku]', () => {
    describe('get single product by sku [passing without token]', () => {
      it(
        'fails to authenticate admin and should return 401',
        async () => {
          return await request(app.getHttpServer())
            .get(`/products/sku/${validProductSKU}`)
            .expect(401);
        },
        TestTimeout,
      );
    });

    describe('get single product by sku [passing wrong token]', () => {
      it(
        'fails to authenticate admin and should return 401',
        async () => {
          return await request(app.getHttpServer())
            .get(`/products/sku/${validProductSKU}`)
            .set('Authorization', `Bearer ${token.replace('e', 'y')}`)
            .expect(401);
        },
        TestTimeout,
      );
    });

    describe('get single product by sku [passing right token & invalid product sku]', () => {
      it(
        'should error message with 400 bad request',
        async () => {
          return await request(app.getHttpServer())
            .get(`/products/sku/${invalidProductSKU}`)
            .set('Authorization', `Bearer ${token}`)
            .expect((res) => {
              expect(res.statusCode).toBe(400);
              expect(res.body.error).toEqual('CAN_NOT_GET_PRODUCT');
              expect(res.body.errors).toBe(null);
            });
        },
        TestTimeout,
      );
    });

    describe('get single product by sku [passing right token & valid product sku]', () => {
      it(
        'should return wishlist response data and status code 200',
        async () => {
          return await request(app.getHttpServer())
            .get(`/products/sku/${validProductSKU}`)
            .set('Authorization', `Bearer ${token}`)
            .expect((res) => {
              expect(res.statusCode).toBe(200);
              expect(res.body.data).not.toBe(null);
            });
        },
        TestTimeout,
      );
    });
  });

  describe('GET /products/condition [get all products(condition)]', () => {
    describe('get all products(condition) [passing without token]', () => {
      it(
        'fails to authenticate admin and should return 401',
        async () => {
          return await request(app.getHttpServer())
            .get(`/products/condition`)
            .expect(401);
        },
        TestTimeout,
      );
    });

    describe('get all products(condition) [passing wrong token]', () => {
      it(
        'fails to authenticate admin and should return 401',
        async () => {
          return await request(app.getHttpServer())
            .get(`/products/condition`)
            .set('Authorization', `Bearer ${token.replace('e', 'y')}`)
            .expect(401);
        },
        TestTimeout,
      );
    });

    describe('get all products(condition) [passing right token & without condition]', () => {
      it(
        'should return products response data and status code 200',
        async () => {
          return await request(app.getHttpServer())
            .get('/products/condition')
            .set('Authorization', `Bearer ${token}`)
            .expect((res) => {
              expect(res.statusCode).toBe(200);
              expect(res.body.data).not.toBe(null);
            });
        },
        TestTimeout,
      );
    });

    describe('get all products(condition) [passing right token & with condition]', () => {
      it(
        'should return products response data and status code 200',
        async () => {
          return await request(app.getHttpServer())
            .get(
              `/products/condition?categoryId=4f336ccd-e172-44b6-b5c1-15b61c3ef000`,
            )
            .set('Authorization', `Bearer ${token}`)
            .expect((res) => {
              expect(res.statusCode).toBe(200);
              expect(res.body.data).not.toBe(null);
              expect(res.body.error).toBe(undefined);
            });
        },
        TestTimeout,
      );
    });
  });

  describe('GET /products/:productId [get single product by productId]', () => {
    describe('get single product by productId [passing without token]', () => {
      it(
        'fails to authenticate admin and should return 401',
        async () => {
          return await request(app.getHttpServer())
            .get(`/products/${validProductId}`)
            .expect(401);
        },
        TestTimeout,
      );
    });

    describe('get single product by productId [passing wrong token]', () => {
      it(
        'fails to authenticate admin and should return 401',
        async () => {
          return await request(app.getHttpServer())
            .get(`/products/${validProductId}`)
            .set('Authorization', `Bearer ${token.replace('e', 'y')}`)
            .expect(401);
        },
        TestTimeout,
      );
    });

    describe('get single product by productId [passing invalid productId]', () => {
      it(
        'should error message with 400 bad request',
        async () => {
          return await request(app.getHttpServer())
            .get(`/products/${invalidProductId}`)
            .set('Authorization', `Bearer ${token}`)
            .expect((res) => {
              expect(res.statusCode).toBe(400);
              expect(res.body.error).toEqual('CAN_NOT_GET_PRODUCT');
              expect(res.body.errors).toBe(null);
            });
        },
        TestTimeout,
      );
    });

    describe('get single product by productId [passing valid productId]', () => {
      it(
        'should return products response data and status code 200',
        async () => {
          return await request(app.getHttpServer())
            .get(`/products/${validProductId}`)
            .set('Authorization', `Bearer ${token}`)
            .expect((res) => {
              expect(res.statusCode).toBe(200);
              expect(res.body.data).not.toBe(null);
              expect(res.body.error).toBe(undefined);
            });
        },
        TestTimeout,
      );
    });
  });

  describe('POST /product [add product request]', () => {
    describe('add product request [passing without token & with valid req.body]', () => {
      it(
        'fails to authenticate customer and should return 401',
        async () => {
          return await request(app.getHttpServer())
            .post('/product')
            .send(validProductRequest)
            .expect(401);
        },
        TestTimeout,
      );
    });

    describe('add product request [passing wrong token & with valid req.body]', () => {
      it(
        'fails to authenticate customer and should return 401',
        async () => {
          return await request(app.getHttpServer())
            .post('/product')
            .send(validProductRequest)
            .set('Authorization', `Bearer ${token.replace('e', 'y')}`)
            .expect(401);
        },
        TestTimeout,
      );
    });

    describe('add product request [passing right token & with invalid req.body]', () => {
      it(
        'should error message with 422 bad request(Unprocessable Entity)',
        async () => {
          return await request(app.getHttpServer())
            .post('/product')
            .set('Authorization', `Bearer ${token}`)
            .send(invalidProductRequest)
            .expect((res) => {
              expect(res.statusCode).toBe(422);
            });
        },
        TestTimeout,
      );
    });

    describe('add product request [passing right token & with existing sku]', () => {
      it(
        'should error message with 400 bad request',
        async () => {
          return await request(app.getHttpServer())
            .post('/product')
            .set('Authorization', `Bearer ${token}`)
            .send(existingSKUProductRequest)
            .expect((res) => {
              expect(res.statusCode).toBe(400);
              expect(res.body.error).toEqual('PRODUCT_SKU_MATCH');
              expect(res.body.errors).toBe(null);
            });
        },
        TestTimeout,
      );
    });

    describe('add product request [passing right token & with existing friendlyPageName]', () => {
      it(
        'should error message with 400 bad request',
        async () => {
          return await request(app.getHttpServer())
            .post('/product')
            .set('Authorization', `Bearer ${token}`)
            .send(existingFriendlyPageNameProductRequest)
            .expect((res) => {
              expect(res.statusCode).toBe(400);
              expect(res.body.error).toEqual(
                'PRODUCT_FRIENDLY_PAGE_NAME_MATCH',
              );
              expect(res.body.errors).toBe(null);
            });
        },
        TestTimeout,
      );
    });

    describe('add product request [passing right token & with valid req.body]', () => {
      it(
        'should return product response data and status code 201',
        async () => {
          const result: any = await request(app.getHttpServer())
            .post('/product')
            .set('Authorization', `Bearer ${token}`)
            .send(validProductRequest)
            .expect((res) => {
              expect(res.statusCode).toBe(201);
              expect(res.body.data).not.toBe(null);
            });
          if (result.body.data && result.body.data.id) {
            productId = result.body.data.id;
          }
        },
        TestTimeout,
      );
    });
  });

  describe('PATCH /products/brand [update multiple products using brandId]', () => {
    describe('update multiple products using brandId [passing without token]', () => {
      it(
        'fails to authenticate customer and should return 401',
        async () => {
          return await request(app.getHttpServer())
            .patch('/products/brand')
            .send(validUpdatedProductsUsingBrandId)
            .expect(401);
        },
        TestTimeout,
      );
    });

    describe('update multiple products using brandId [passing wrong token]', () => {
      it(
        'fails to authenticate customer and should return 401',
        async () => {
          return await request(app.getHttpServer())
            .patch('/products/brand')
            .send(validUpdatedProductsUsingBrandId)
            .set('Authorization', `Bearer ${token.replace('e', 'y')}`)
            .expect(401);
        },
        TestTimeout,
      );
    });

    describe('update multiple products using brandId [passing invalid req body & right token]', () => {
      it(
        'should error message with 422 bad request(Unprocessable Entity)',
        async () => {
          return await request(app.getHttpServer())
            .patch('/products/brand')
            .send(invalidUpdatedProductsUsingBrandId)
            .set('Authorization', `Bearer ${token}`)
            .expect((res) => {
              expect(res.statusCode).toBe(422);
            });
        },
        TestTimeout,
      );
    });

    describe('update multiple products using brandId [passing valid req body & right token]', () => {
      it(
        'should return wishlist response data and status code 200',
        async () => {
          return await request(app.getHttpServer())
            .patch('/products/brand')
            .send(validUpdatedProductsUsingBrandId)
            .set('Authorization', `Bearer ${token}`)
            .expect((res) => {
              expect(res.statusCode).toBe(200);
              expect(res.body.data).not.toBe(null);
            });
        },
        TestTimeout,
      );
    });
  });

  describe('PATCH /products/:productId [update a product by productId]', () => {
    describe('update a product by productId [passing without token]', () => {
      it(
        'fails to authenticate customer and should return 401',
        async () => {
          return await request(app.getHttpServer())
            .patch(`/products/${productId}`)
            .send(validUpdateProductRequest)
            .expect(401);
        },
        TestTimeout,
      );
    });

    describe('update a product by productId [passing wrong token]', () => {
      it(
        'fails to authenticate customer and should return 401',
        async () => {
          return await request(app.getHttpServer())
            .patch(`/products/${productId}`)
            .send(validUpdateProductRequest)
            .set('Authorization', `Bearer ${token.replace('e', 'y')}`)
            .expect(401);
        },
        TestTimeout,
      );
    });

    describe('update a product by productId [passing invalid req body & right token]', () => {
      it(
        'should error message with 422 bad request(Unprocessable Entity)',
        async () => {
          return await request(app.getHttpServer())
            .patch(`/products/${productId}`)
            .send(invalidUpdateProductRequest)
            .set('Authorization', `Bearer ${token}`)
            .expect((res) => {
              expect(res.statusCode).toBe(422);
            });
        },
        TestTimeout,
      );
    });

    describe('update a product by productId [passing valid req body & invalid productId & right token]', () => {
      it(
        'should error message with 400 bad request',
        async () => {
          return await request(app.getHttpServer())
            .patch(`/products/${'edf' + productId}`)
            .send(validUpdateProductRequest)
            .set('Authorization', `Bearer ${token}`)
            .expect((res) => {
              expect(res.statusCode).toBe(400);
              expect(res.body.error).toEqual('CAN_NOT_GET_PRODUCT');
              expect(res.body.errors).toBe(null);
            });
        },
        TestTimeout,
      );
    });

    describe('update a product by productId [passing valid req body(existing product sku) & right token]', () => {
      it(
        'should error message with 400 bad request',
        async () => {
          return await request(app.getHttpServer())
            .patch(`/products/${productId}`)
            .send(existingSKUUpdateProductRequest)
            .set('Authorization', `Bearer ${token}`)
            .expect((res) => {
              expect(res.statusCode).toBe(400);
              expect(res.body.error).toEqual('PRODUCT_SKU_MATCH');
              expect(res.body.errors).toBe(null);
            });
        },
        TestTimeout,
      );
    });

    describe('update a product by productId [passing valid req body(existing other products friendlyPageName) & right token]', () => {
      it(
        'should error message with 400 bad request',
        async () => {
          return await request(app.getHttpServer())
            .patch(`/products/${productId}`)
            .send(existingFriendlyPageNameUpdateProductRequest)
            .set('Authorization', `Bearer ${token}`)
            .expect((res) => {
              expect(res.statusCode).toBe(400);
              expect(res.body.error).toEqual(
                'PRODUCT_FRIENDLY_PAGE_NAME_MATCH',
              );
              expect(res.body.errors).toBe(null);
            });
        },
        TestTimeout,
      );
    });

    describe('update a product by productId [passing valid req body & valid productId & right token]', () => {
      it(
        'should return wishlist response data and status code 200',
        async () => {
          return await request(app.getHttpServer())
            .patch(`/products/${productId}`)
            .send(validUpdateProductRequest)
            .set('Authorization', `Bearer ${token}`)
            .expect((res) => {
              expect(res.statusCode).toBe(200);
              expect(res.body.data).not.toBe(null);
            });
        },
        TestTimeout,
      );
    });
  });

  describe('DELETE /products/:productId [delete a product by productId]', () => {
    describe('delete a product by productId [passing without token]', () => {
      it(
        'fails to authenticate customer and should return 401',
        async () => {
          return await request(app.getHttpServer())
            .delete(`/products/${productId}`)
            .expect(401);
        },
        TestTimeout,
      );
    });

    describe('delete a product by productId [passing wrong token]', () => {
      it(
        'fails to authenticate customer and should return 401',
        async () => {
          return await request(app.getHttpServer())
            .delete(`/products/${productId}`)
            .set('Authorization', `Bearer ${token.replace('e', 'y')}`)
            .expect(401);
        },
        TestTimeout,
      );
    });

    describe('delete a product by productId [passing invalid productId]', () => {
      it(
        'should error message with 400 bad request',
        async () => {
          return await request(app.getHttpServer())
            .delete(`/products/${'edf' + productId}`)
            .set('Authorization', `Bearer ${token}`)
            .expect((res) => {
              expect(res.statusCode).toBe(400);
              expect(res.body.error).toEqual('CAN_NOT_DELETE_PRODUCT');
              expect(res.body.errors).toBe(null);
            });
        },
        TestTimeout,
      );
    });

    describe('delete a product by productId [passing valid productId]', () => {
      it(
        'should return wishlist response data and status code 200',
        async () => {
          return await request(app.getHttpServer())
            .delete(`/products/${productId}`)
            .set('Authorization', `Bearer ${token}`)
            .expect((res) => {
              expect(res.statusCode).toBe(200);
              expect(res.body.data).toEqual(
                expect.objectContaining({
                  message: expect.any(String),
                }),
              );
              expect(res.body.error).toBe(undefined);
            });
        },
        TestTimeout,
      );
    });
  });
});
