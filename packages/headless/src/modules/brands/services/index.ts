
import { HttpStatus, Injectable } from "@nestjs/common";
import { Response } from "express";
import * as crypto from 'crypto';
import { CreateBrandRequest, CreateBrandResponse, DeleteBrandResponse, ErrorMessage, ErrorMessageDeleteBrand, ErrorMessageGetBrandById, ErrorMessageUpdate, GetAllBrandsResponse, GetBrandByIdResponse, UpdateBrandRequest, UpdateBrandResponse } from "models";

import { Brand } from 'src/entity/brand';
import { BrandRepository } from './../repositories/index';
import { CreateBrandRequestDto, CreateBrandResponseDto } from 'src/modules/brands/dto/createBrandDto';
import { GetAllBrandsResponseDto } from "src/modules/brands/dto/getAllBrandsDto";
import { UpdateBrandRequestdto, UpdateBrandResponseDto } from "src/modules/brands/dto/updateBrandDto";
import { BrandDto } from 'src/modules/brands/dto/brandDto';
import { GetBrandByIdResponseDto } from "src/modules/brands/dto/getBrandByIdDto";
import { DeleteBrandResponseDto } from "src/modules/brands/dto/deleteBrandDto";

@Injectable()

export class BrandService{
    constructor( private brandRepo: BrandRepository ){}

    async createBrand( brand: CreateBrandRequest ): Promise<CreateBrandResponse>{
            const doesBrandExist = await this.brandRepo.getBrandByName(brand.info.name);
            if(doesBrandExist) return { error: ErrorMessage.BRAND_ALREADY_EXISTS, errors: null, code: HttpStatus.BAD_REQUEST};
            else {
                const newBrand = await this.brandRepo.createBrand(brand);
                if (!newBrand) return { error: ErrorMessage.CANNOT_CREATE_BRAND, errors: null, code: HttpStatus.INTERNAL_SERVER_ERROR };
                 
                return { code: HttpStatus.CREATED, data: newBrand }; 
            }    
    }
    
    async getAllBrands(skip?: number, limit?: number): Promise<GetAllBrandsResponse>{
        const allBrands = await this.brandRepo.getAllBrands(skip, limit);
        if(!allBrands) return { error: 'COULD NOT GET THE BRANDS DUE TO SERVER ERROR', errors: null, code: HttpStatus.INTERNAL_SERVER_ERROR };
    
        return { data: allBrands, code: HttpStatus.OK };
    } 

    async updateBrandById(brandId: string, brandFeatures: UpdateBrandRequest): Promise<UpdateBrandResponse>{
        const doesBrandExist = await this.brandRepo.getBrandByName(brandFeatures.info.name);
        if(doesBrandExist) return { error: ErrorMessageUpdate.BRAND_ALREADY_EXISTS, errors: null, code: HttpStatus.BAD_REQUEST};

        const updatedBrand = await this.brandRepo.updateBrandById(brandId, brandFeatures);
        if(!updatedBrand) return {error: ErrorMessageUpdate.INVALID_BRAND_ID, errors: null, code: HttpStatus.BAD_REQUEST};
        
        return { code: HttpStatus.OK, data: updatedBrand};
    }

    async getBrandById(brandId: string): Promise<GetBrandByIdResponse>{
        const foundBrand = await this.brandRepo.getBrandById(brandId);
        if(!foundBrand) return {error: ErrorMessageGetBrandById.INVALID_BRAND_ID, errors: null, code: HttpStatus.BAD_REQUEST };

        return { data: foundBrand, code: HttpStatus.OK };
    }

    async deleteBrandById(brandId: string): Promise<DeleteBrandResponse>{
        const deletedBrand = await this.brandRepo.deleteBrandById(brandId);
        if(!deletedBrand) return  {error: ErrorMessageDeleteBrand.INVALID_BRAND_ID, errors: null, code: HttpStatus.BAD_REQUEST };

        return {data: deletedBrand, code: HttpStatus.OK};
    } 
}