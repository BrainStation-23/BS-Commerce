import { HttpStatus, Injectable } from "@nestjs/common";
import { Response } from "express";
import * as crypto from 'crypto';

import { BrandCreateSchema } from './../validators/brand.create.validator';
import { Helper } from 'src/helper/helper.interface';
import { ServiceErrorResponse, ServiceSuccessResponse } from 'src/helper/serviceResponse/service.response.interface';
import { Brand } from 'src/entity/brand';
import { BrandRepository } from './../repositories/index';
import { CreateBrandRequestDto, CreateBrandResponseDto } from './../dto/createBrandDto';
import { ErrorMessage } from "models";

@Injectable()

export class BrandService{
    constructor( 
        private brandRepo: BrandRepository,
        private helper: Helper     
    ){}

    async createBrand( brand: CreateBrandRequestDto ): Promise<CreateBrandResponseDto>{
        
        // if( brand.info.name == undefined ) return { error: ErrorMessage.NAME_REQUIRED, errors: null, code: HttpStatus.BAD_REQUEST}
        // if( brand.info.name == "" ) return { error: ErrorMessage.NAME_BE_VALID, errors: null, code: HttpStatus.BAD_REQUEST}
        // else{
            const doesBrandExist = await this.brandRepo.getBrandByName(brand.info.name);
            if(doesBrandExist) return { error: ErrorMessage.BRAND_ALREADY_EXISTS, errors: null, code: HttpStatus.BAD_REQUEST};
            else {
                const newBrand = await this.brandRepo.createBrand(brand);
                if (!newBrand) return { error: ErrorMessage.CANNOT_CREATE_BRAND, errors: null, code: HttpStatus.INTERNAL_SERVER_ERROR };
                 
                return { code: HttpStatus.CREATED, data: newBrand }; 
            }    
        // }
    }
   
    async getAllBrands(skip?: number, limit?: number): Promise<ServiceErrorResponse | ServiceSuccessResponse>{
        const allBrands = await this.brandRepo.getAllBrands(skip, limit);
        if(!allBrands) return this.helper.serviceResponse.errorResponse('Could not get brands', null, HttpStatus.INTERNAL_SERVER_ERROR);
        
        return this.helper.serviceResponse.successResponse(allBrands, HttpStatus.OK);
    } 

    async updateBrandById(brandId: string, brandFeatures: Brand): Promise<ServiceErrorResponse | ServiceSuccessResponse>{
        const updatedBrand = await this.brandRepo.updateBrandById(brandId, brandFeatures);
        if(!updatedBrand) return this.helper.serviceResponse.errorResponse('Could not update brand', null, HttpStatus.BAD_REQUEST);

        return this.helper.serviceResponse.successResponse(updatedBrand, HttpStatus.OK);
    }

    async getBrandById(brandId: string): Promise<ServiceErrorResponse | ServiceSuccessResponse>{
        const foundBrand = await this.brandRepo.getBrandById(brandId);
        if(!foundBrand) return this.helper.serviceResponse.errorResponse('Could not get brand', null, HttpStatus.BAD_REQUEST);

        return this.helper.serviceResponse.successResponse(foundBrand, HttpStatus.OK);
    }

    async deleteBrandById(brandId: string): Promise<ServiceErrorResponse | ServiceSuccessResponse>{
        const deletedBrand = await this.brandRepo.deleteBrandById(brandId);
        if(!deletedBrand) return this.helper.serviceResponse.errorResponse('Could not delete brand', null, HttpStatus.BAD_REQUEST);

        return this.helper.serviceResponse.successResponse(deletedBrand, HttpStatus.OK);
    }  
}