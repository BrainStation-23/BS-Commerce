import { CreateManufacturerRequest, CreateManufacturerErrorResponse, CreateManufacturerSuccessResponse, DescriptiveError, CreateManufacturerSuccessMessages } from 'models';
import { CreateManufacturerErrorMessages } from 'models'
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, MinLength, ValidateNested } from "class-validator";
import { ManufacturerDto } from './manufacturer.dto';
import { ManufacturerSeoDto } from './manufacturerSeo.dto';
import { HttpStatus } from '@nestjs/common';

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
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    code: number;

    @ApiProperty({
        example: CreateManufacturerErrorMessages.MANUFACTURER_NOT_CREATED_SUCCESSFULLY,
        examples: [CreateManufacturerErrorMessages.MANUFACTURER_ALREADY_EXISTS, CreateManufacturerErrorMessages.MANUFACTURER_NOT_CREATED_SUCCESSFULLY]
    })
    error: CreateManufacturerErrorMessages.MANUFACTURER_ALREADY_EXISTS | CreateManufacturerErrorMessages.MANUFACTURER_NOT_CREATED_SUCCESSFULLY;

    @ApiProperty()
    errors: DescriptiveError;
}

class ManufacturerDataDto {
    @ApiProperty()
    @ValidateNested({each: true})
    manufacturer: ManufacturerDto;

    @ApiProperty({ example: CreateManufacturerSuccessMessages.MANUFACTURER_CREATED_SUCCESSFULLY })
    message: string | any;
}
export class CreateManufacturerSuccessResponseDto implements CreateManufacturerSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    code: number;

    @ApiProperty()
    @ValidateNested({each: true})
    data: ManufacturerDataDto
    
}



export type CreateManufacturerResponseDto = CreateManufacturerErrorResponseDto | CreateManufacturerSuccessResponseDto