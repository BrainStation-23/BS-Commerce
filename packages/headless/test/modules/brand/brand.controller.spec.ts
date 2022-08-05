import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { connectTestDatabase, getDemoUserToken, testUserId, testUsername } from '../../test-utility';
import { AppModule } from 'src/app.module';
import { CreateBrandRequestDto } from 'src/modules/brands/rest/dto/createBrandDto';
import { GetAllBrandsDto } from '../../../src/modules/brands/rest/dto/getAllBrandsDto';
import { UpdateBrandRequestdto } from 'src/modules/brands/rest/dto/updateBrandDto';
import { BrandController } from 'src/modules/brands/rest/brand.controller';
import { Brand } from 'src/entity/brand';
import { BrandDto } from 'src/modules/brands/rest/dto/brandDto';


describe('Initializing Brand controller testing', () => {
    let app: INestApplication;
    let controller: BrandController;
    
    let brandId: string = "ed1b4494-875b-40c3-853c-dfc0776ccd62";
    let brandName: string = 'Samsung';
    const invalidBrandName: string = '45454';
    const invalidBrandId: string = '343434sfsdfsd';
    const token = getDemoUserToken(testUserId, testUsername, 'admin').token;

    const brand: BrandDto = {
        id: "37456834756345",
        info:{
            name: "Harley Davidson",
            description: "This is a motorBike and it belongs to USA based Harley Company",
            allowToSelectPageSize: true,
            published: true,
            displayOrder: 101,
            pageSizeOptions: [1,2]
        },
        meta: {
            keywords: "Davidson",
            description: "motorbike brand",
            title: "MotorBike 500cc",
            SEFN: "500cc"
        }
    }

    const createBrandRequest: CreateBrandRequestDto = {
        info: {
            name: "Suzuki Gixer Fi Abs",
            description: "This is a motorBike and it belongs to Suzuki Company",
            allowToSelectPageSize: true,
            published: true,
            displayOrder: 101,
            pageSizeOptions: [1, 2]
        },
        meta: {
            keywords: "Gixer",
            description: "motorbike brand",
            title: "MotorBike 165cc",
            SEFN: "165cc"
        },
    };

    const updateBrandRequest: UpdateBrandRequestdto = {
        meta: { keywords: "Gixer" }
    }

    const invalidUpdateBrandRequestWithName = {
        info: { name: "Nokia" }
    }

    const invalidUpdateBrandRequestWithoutObject = {
       keywords: "keywords"   
    }

    const invalidCreateBrandRequestWithoutName = {
        info: {
            description: "This is a motorBike and it belongs to USA based Harley Company",
            allowToSelectPageSize: true,
            published: true,
            displayOrder: 101,
            pageSizeOptions: [1, 2]
        },
        meta: {
            keywords: "Davidson",
            description: "motorbike brand",
            title: "MotorBike 500cc",
            SEFN: "500cc"
        },
    }

    const invalidCreateBrandRequestTypes = {
        info: {
            name: "Harley Davidson",
            description: "This is a motorBike and it belongs to USA based Harley Company",
            allowToSelectPageSize: 343434,//should be boolean
            published: 3434,//should be boolean
            displayOrder: true,
            pageSizeOptions: [1, 2]
        },
        meta: {
            keywords: "Davidson",
            description: "motorbike brand",
            title: "MotorBike 500cc",
            SEFN: "500cc"
        },
    }

    const invalidCreateBrandRequestWithoutInfoObj = {
        name: "Harley Davidson",
        meta: {
            keywords: "Davidson",
            description: "motorbike brand",
            title: "MotorBike 500cc",
            SEFN: "500cc"
        },
    }

    const createBrandRequestInvalidName = {
        info: {
            name: "Suzuki Gixer Fi Abs"
        },
        meta: {
            keywords: "Davidson"
        }
    };

    beforeAll(async () => {
        await connectTestDatabase();
        const module: TestingModule = await Test.createTestingModule({
            imports: [AppModule]
        })
        .compile();

        controller = module.get<BrandController>(BrandController);
        app = module.createNestApplication();
        await app.init();
    });

    afterAll(async () => {
        // remove test databse collection if required
        // await removeTestCollection('brands');
        await app.close();
    });

    it(`/GET All BRANDS`, async () => {
        return await request(app.getHttpServer())
        .get('/brands')
        .expect(res => {
            expect(res.statusCode).toBe(200);
            try{
                expect(res.body.data).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            id: expect.any(String),
                            info: {
                                name: expect.any(String),
                                description: expect.any(String),
                                allowToSelectPageSize: expect.any(Boolean),
                                published: expect.any(Boolean),
                                displayOrder: expect.any(Number),
                                pageSizeOptions: expect.any(Array)
                            },
                            meta: {
                                keywords: expect.any(String),
                                description: expect.any(String),
                                title: expect.any(String),
                                SEFN: expect.any(String)
                            }
                        })
                    ])
                );
            }catch{
                expect(res.body.data).toEqual([])
            }
           
        })
    });

    it('/POST CREATE NEW BRAND [VALID DATA]', async () => {
        const result = await request(app.getHttpServer())
        .post('/brands/create')
        .set('Authorization', `Bearer ${token}`)
        .send(createBrandRequest)
        .expect((res)=> {
            expect(res.statusCode).toBe(201);
            expect(res.body.data).toMatchObject({
                id: expect.any(String),
                info: {
                    name: expect.any(String),
                    description: expect.any(String),
                    allowToSelectPageSize: expect.any(Boolean),
                    published: expect.any(Boolean),
                    displayOrder: expect.any(Number),
                    pageSizeOptions: expect.any(Array)
                },
                meta: {
                    keywords: expect.any(String),
                    description: expect.any(String),
                    title: expect.any(String),
                    SEFN: expect.any(String)
                }
            })
        });

        brandId = result.body.data.id;
        brandName = result.body.data.info.name;
    });

    it('/POST CREATE NEW BRAND [INVALID DATA TYPES INVALID]',async () => {
        return await request(app.getHttpServer())
        .post('/brands/create')
        .set('Authorization', `Bearer ${token}`)
        .send(invalidCreateBrandRequestTypes)
        .expect(500)
    });

    it('/POST CREATE NEW BRAND [INVALID DATA INFO OBJ MISSING]',async () => {
        return await request(app.getHttpServer())
        .post('/brands/create')
        .set('Authorization', `Bearer ${token}`)
        .send(invalidCreateBrandRequestWithoutInfoObj)
        .expect(500)
    });

    it('/POST CREATE NEW BRAND [INVALID DATA, NAME MISSING]',async () => {
        return await request(app.getHttpServer())
        .post('/brands/create')
        .set('Authorization', `Bearer ${token}`)
        .send(invalidCreateBrandRequestWithoutName)
        .expect(400)
    });

    it('/POST CREATE NEW BRAND [INVALID DATA, NAME ALREADY EXISTS]',async () => {
        return await request(app.getHttpServer())
        .post('/brands/create')
        .set('Authorization', `Bearer ${token}`)
        .send(createBrandRequestInvalidName)
        .expect(400)
    });

    it('/GET BRAND WITH ID [VALID ID]', async () => {
        return await request(app.getHttpServer())
        .get(`/brands/${brandId}`)
        .expect(res => {
            expect(res.statusCode).toBe(200)
            expect(res.body.data).toMatchObject({
                id: expect.any(String),
                info: {
                    name: expect.any(String),
                    description: expect.any(String),
                    allowToSelectPageSize: expect.any(Boolean),
                    published: expect.any(Boolean),
                    displayOrder: expect.any(Number),
                    pageSizeOptions: expect.any(Array)
                },
                meta: {
                        keywords: expect.any(String),
                        description: expect.any(String),
                        title: expect.any(String),
                        SEFN: expect.any(String)
                }
            })
        })
    });

    it('/GET BRAND WITH NAME [VALID NAME]', async () => {
        return await request(app.getHttpServer())
        .get(`/brands/brandName/${brandName}`)
        .expect(res => {
            expect(res.statusCode).toBe(200)
            expect(res.body.data).toMatchObject({
                id: expect.any(String),
                info: {
                    name: expect.any(String),
                    description: expect.any(String),
                    allowToSelectPageSize: expect.any(Boolean),
                    published: expect.any(Boolean),
                    displayOrder: expect.any(Number),
                    pageSizeOptions: expect.any(Array)
                },
                meta: {
                        keywords: expect.any(String),
                        description: expect.any(String),
                        title: expect.any(String),
                        SEFN: expect.any(String)
                }
            })
        })
    });

    it('/GET BRAND WITH NAME [INVALID NAME]', async () => {
        return await request(app.getHttpServer())
        .get(`/brands/brandName/${invalidBrandName}`)
        .expect(400)
    });

    it('/GET BRAND WITH ID [INVALID ID]', async () => {
        return await request(app.getHttpServer())
        .get(`/brands/${invalidBrandId}`)
        .expect(400)
    });
    
    it('/PATCH UPDATE BRAND WITH ID [VALID ID]', async () => {
        return await request(app.getHttpServer())
        .patch(`/brands/${brandId}`)
        .set('Authorization', `Bearer ${token}`)
        .send(updateBrandRequest)
        .expect(res => {
            expect(res.statusCode).toBe(200)
            expect(res.body.data).toMatchObject({
                id: expect.any(String),
                info: {
                    name: expect.any(String),
                    description: expect.any(String),
                    allowToSelectPageSize: expect.any(Boolean),
                    published: expect.any(Boolean),
                    displayOrder: expect.any(Number),
                    pageSizeOptions: expect.any(Array)
                },
                meta: {
                        keywords: expect.any(String),
                        description: expect.any(String),
                        title: expect.any(String),
                        SEFN: expect.any(String)
                }
            })
            })
    });

    it('/patch UPDATE BRAND [INVALID ID]', async () => {
        return await request(app.getHttpServer())
        .patch(`/brands/${invalidBrandId}`)
        .set('Authorization', `Bearer ${token}`)
        .send(updateBrandRequest)
        .expect(400)
    });

     it('/patch UPDATE BRAND [BAD REQUEST, NAME CANNOT BE UPDATED]', async () => {
        return await request(app.getHttpServer())
        .patch(`/brands/${brandId}`)
        .set('Authorization', `Bearer ${token}`)
        .send(invalidUpdateBrandRequestWithName)
        .expect(400)
    });

    it('/patch UPDATE BRAND [INVALID DATA, OBJ MISSING]', async () => {
        return await request(app.getHttpServer())
        .patch(`/brands/${brandId}`)
        .set('Authorization', `Bearer ${token}`)
        .send(invalidUpdateBrandRequestWithoutObject)
        .expect(400)
    });

	it('/DELETE BRAND WITH ID [VALID ID]', async () => {
        return await request(app.getHttpServer())
        .delete(`/brands/${brandId}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(res => {
            expect(res.statusCode).toBe(200)
            expect(res.body.data).toMatchObject({
                id: expect.any(String),
                info: {
                    name: expect.any(String),
                    description: expect.any(String),
                    allowToSelectPageSize: expect.any(Boolean),
                    published: expect.any(Boolean),
                    displayOrder: expect.any(Number),
                    pageSizeOptions: expect.any(Array)
                },
                meta: {
                        keywords: expect.any(String),
                        description: expect.any(String),
                        title: expect.any(String),
                        SEFN: expect.any(String)
                }
            })
         })
    });

    it('DELETE BRAND [INVALID ID]', async () => {
        return await request(app.getHttpServer())
        .delete(`/brands/${invalidBrandId}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(400)
    });

});

