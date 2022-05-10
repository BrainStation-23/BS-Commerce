import { HttpStatus, Injectable } from "@nestjs/common";
import * as Joi from 'joi';
import { Response } from "express";
import * as crypto from 'crypto';

import { BrandCreateSchema } from './../validators/brand.create.validator';
import { Helper } from 'src/helper/helper.interface';
import { ServiceErrorResponse, ServiceSuccessResponse } from 'src/helper/serviceResponse/service.response.interface';
import { Brand } from 'src/entity/brand';
import { BrandRepository } from './../repositories/index';
import { validateParams } from 'src/decorators/service.validator';

@Injectable()

export class BrandService{
    constructor( 
        private brandRepo: BrandRepository,
        private helper: Helper     
    ){}

    @validateParams({ schema: BrandCreateSchema})
    async createBrand( brand: Brand ): Promise<ServiceErrorResponse | ServiceSuccessResponse>{
        const doesBrandExist = await this.brandRepo.getBrandByName(brand.info.name);
        if(doesBrandExist){
            return this.helper.serviceResponse.errorResponse('Brand already exists', null, HttpStatus.BAD_REQUEST);
        }
        else{
            const newBrand = await this.brandRepo.createBrand(brand);
            if (!newBrand) return this.helper.serviceResponse.errorResponse('Could not create brand', null, HttpStatus.INTERNAL_SERVER_ERROR);
             
            return this.helper.serviceResponse.successResponse(newBrand); 
        }
    }
   
    @validateParams({ schema: Joi.number().label('Skip') }, { schema: Joi.number().label('Limit') })
    async getAllBrands(skip?: number, limit?: number): Promise<ServiceErrorResponse | ServiceSuccessResponse>{
        const allBrands = await this.brandRepo.getAllBrands(skip, limit);
        return this.helper.serviceResponse.successResponse(allBrands);
    } 

    @validateParams({ schema: Joi.string().required().label('id') })
    async updateBrandById(brandId: string, brandFeatures: Brand): Promise<ServiceErrorResponse | ServiceSuccessResponse>{
        const updatedBrand= await this.brandRepo.updateBrandById(brandId, brandFeatures);

        return this.helper.serviceResponse.successResponse(updatedBrand);
    }

    @validateParams({ schema: Joi.string().required().label('id') })
    async getBrandById(brandId: string): Promise<ServiceErrorResponse | ServiceSuccessResponse>{
        const foundBrand = await this.brandRepo.getBrandById(brandId);

        return this.helper.serviceResponse.successResponse(foundBrand);
    }

    @validateParams({ schema: Joi.string().required().label('id') })
    async deleteBrandById(brandId: string): Promise<ServiceErrorResponse | ServiceSuccessResponse>{
        const deletedBrand = await this.brandRepo.deleteBrandById(brandId);

        return this.helper.serviceResponse.successResponse(deletedBrand);
    }
    
}