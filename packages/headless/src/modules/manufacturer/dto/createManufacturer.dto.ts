import type { CreateManufacturerRequest, CreateManufacturerErrorResponse, CreateManufacturerSuccessResponse, DescriptiveError } from 'models';
import {CreateManufacturerErrorMessages} from 'models'
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, MinLength, ValidateNested } from "class-validator";
import { ManufacturerDto } from './manufacturer.dto';
import { ManufacturerSeoDto } from './manufacturerSeo.dto';

export class CreateManufacturerDto implements CreateManufacturerRequest {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    description?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    picture?: string;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    isPublished?: boolean;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    displayOrder?: number;

    @ApiProperty()
    @IsOptional()
    @ValidateNested({ each: true })
    @IsObject()
    seo?: ManufacturerSeoDto
}

export class CreateManufacturerErrorResponseDto implements CreateManufacturerErrorResponse {
    @ApiProperty()
    code: number;

    @ApiProperty()
    error: CreateManufacturerErrorMessages.MANUFACTURER_ALREADY_EXISTS | CreateManufacturerErrorMessages.MANUFACTURER_NOT_CREATED_SUCCESSFULLY;

    @ApiProperty()
    errors: DescriptiveError;
}

export class CreateManufacturerSuccessResponseDto implements CreateManufacturerSuccessResponse {
    @ApiProperty()
    code: number;

    @ApiProperty()
    data: ManufacturerDto;
}

export type CreateManufacturerResponseDto = CreateManufacturerErrorResponseDto | CreateManufacturerSuccessResponseDto