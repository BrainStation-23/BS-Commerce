import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { createMock } from '@golevelup/ts-jest';
import * as request from 'supertest';

import { connectTestDatabase } from '../../test-utility';
import { AppModule } from 'src/app.module';
import { CreateBrandRequestDto } from 'src/modules/brands/dto/createBrandDto';
import { GetAllBrandsDto } from './../../../src/modules/brands/dto/getAllBrandsDto';
import { UpdateBrandRequestdto } from 'src/modules/brands/dto/updateBrandDto';
import { BrandController } from 'src/modules/brands/rest/brand.controller';
import { Brand } from 'src/entity/brand';
import { BrandDto } from 'src/modules/brands/dto/brandDto';


describe('Initializing Brand controller testing', () => {
    let app: INestApplication;
    let controller: BrandController;
    
    let brandId: string;
    const invalidBrandId: string = '343434sfsdfsd';

    const brand: BrandDto = {
        id: "37456834756345",
        info:{
            name: "Harley Davidson 879dvdvdvgdfvgdffgfdv87",
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
        id: '34343432sdfsdf3sf',
        info: {
            name: "tujhe becheeeeaini",
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
    };

    const updateBrandRequest: UpdateBrandRequestdto = {
        info: {
            name: "matroi update korlam",
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
        }
    }

    const invalidBrandRequestWithoutName = {
        id: '34343432sdfsdf3sf',
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

    const invalidBrandRequestTypes = {
        id: '34343432sdfsdf3sf',
        info: {
            name: "tujhe becheeeeaini",
            description: "This is a motorBike and it belongs to USA based Harley Company",
            allowToSelectPageSize: 343434,
            published: 3434,
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

    const invalidBrandRequestWithoutInfoObj = {
        id: '34343432sdfsdf3sf',
        meta: {
            keywords: "Davidson",
            description: "motorbike brand",
            title: "MotorBike 500cc",
            SEFN: "500cc"
        },
    }

    const brandRequestInvalidName = {
        info: {
            name: "ut",
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
        }
    };

    beforeAll(async () => {
        await connectTestDatabase();
        const module: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
            providers: [{ 
                provide: BrandController, 
                useValue: createMock<BrandController>()
            }],
        })
        .compile();

        controller = module.get<BrandController>(BrandController);
        app = module.createNestApplication();
        await app.init();
    });

    afterAll(async () => {
        // remove test databse collection if required
        // await removeTestCollection('compares');
        await app.close();
    });

  
    it(`/GET All BRANDS`, async () => {
        return await request(app.getHttpServer())
        .get('/brands')
        .expect(res => {
            expect(res.statusCode).toBe(200);
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
        })
    });

    it('/POST CREATE NEW BRAND [VALID DATA]', async () => {
        const result = await request(app.getHttpServer())
        .post('/brands/create')
        .send(createBrandRequest)
        .expect((res)=> {
            expect(res.statusCode).toBe(201)
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
    });

    it('/POST CREATE NEW BRAND [INVALID DATA TYPES INVALID]',async () => {
        return await request(app.getHttpServer())
        .post('/brands/create')
        .send(invalidBrandRequestTypes)
        .expect(500)
    });
    
    it('/POST CREATE NEW BRAND [INVALID DATA INFO OBJ MISSING]',async () => {
        return await request(app.getHttpServer())
        .post('/brands/create')
        .send(invalidBrandRequestWithoutInfoObj)
        .expect(500)
    });

    it('/POST CREATE NEW BRAND [INVALID DATA, NAME MISSING]',async () => {
        return await request(app.getHttpServer())
        .post('/brands/create')
        .send(invalidBrandRequestWithoutName)
        .expect(400)
    });

    it('/POST CREATE NEW BRAND [INVALID DATA, NAME ALREADY EXISTS]',async () => {
        return await request(app.getHttpServer())
        .post('/brands/create')
        .send(brandRequestInvalidName)
        .expect(400)
    });

    it('/GET BRAND WITH ID [VALID ID]', async () => {
        return await request(app.getHttpServer())
        .get(`/brands/${brandId}`)
        .expect(res => {
            console.log(res.body.data);
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

    it('/GET BRAND WITH ID [INVALID ID]', async () => {
        return await request(app.getHttpServer())
        .get(`/brands/${invalidBrandId}`)
        .expect(400)
    });
    
    it('/PUT UPDATE BRAND WITH ID [VALID ID]', async () => {
            return await request(app.getHttpServer())
            .put(`/brands/${brandId}`)
            // .put(`/brands/830c3e19-4210-4465-9d4c-167ce18099b0`)
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

    it('/PUT UPDATE BRAND [INVALID ID]', async () => {
            return await request(app.getHttpServer())
            .put(`/brands/${invalidBrandId}`)
            .send(updateBrandRequest)
            .expect(400)
    });

     it('/PUT UPDATE BRAND [INVALID NAME, BRAND NAME ALREADY EXISTS]', async () => {
            return await request(app.getHttpServer())
            .put(`/brands/${brandId}`)
            .send(brandRequestInvalidName)
            .expect(400)
    });

    it('/PUT UPDATE BRAND [INVALID DATA, INFO OBJ MISSING]', async () => {
        return await request(app.getHttpServer())
        .put(`/brands/${brandId}`)
        .send(invalidBrandRequestWithoutInfoObj)
        .expect(500)
    });

    it('/PUT UPDATE BRAND [INVALID DATA, NAME MISSING OR EMPTY]', async () => {
        return await request(app.getHttpServer())
        .put(`/brands/${brandId}`)
        .send(invalidBrandRequestWithoutName)
        .expect(400)
    });


	it('/DELETE BRAND WITH ID [VALID ID]', async () => {
        return await request(app.getHttpServer())
        .delete(`/brands/${brandId}`)
        .expect(res => {
            console.log(res.body.data);
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
            .delete(`/brands/${brandId}`)
            .expect(400)
    });

});

