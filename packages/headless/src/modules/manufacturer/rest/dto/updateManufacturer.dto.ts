import { DescriptiveError, UpdateManufacturerRequest, UpdateManufacturerErrorResponse, UpdateManufacturerErrorMessages, UpdateManufacturerSuccessMessages, UpdateManufacturerSuccessResponse } from 'models';
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, MinLength, ValidateNested } from "class-validator";
import { ManufacturerDto } from './manufacturer.dto';
import { ManufacturerSeoDto } from './manufacturerSeo.dto';
import { HttpStatus } from '@nestjs/common';

export class UpdateManufacturerDto implements UpdateManufacturerRequest {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @IsOptional()
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

export class UpdateManufacturerErrorResponseDto implements UpdateManufacturerErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    code: number;

    @ApiProperty({
        example: UpdateManufacturerErrorMessages.MANUFACTURER_NOT_FOUND,
        examples: [UpdateManufacturerErrorMessages.MANUFACTURER_NOT_UPDATED]
    })
    error: UpdateManufacturerErrorMessages.MANUFACTURER_NOT_FOUND | UpdateManufacturerErrorMessages.MANUFACTURER_NOT_UPDATED;

    @ApiProperty()
    errors: DescriptiveError;
}

class ManufacturerDataDto {
    @ApiProperty()
    @ValidateNested({each: true})
    manufacturer: ManufacturerDto;

    @ApiProperty({ example: UpdateManufacturerSuccessMessages.MANUFACTURER_UPDATED_SUCCESSFULLY })
    message: string | any;
}
export class UpdateManufacturerSuccessResponseDto implements UpdateManufacturerSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    code: number;

    @ApiProperty()
    @ValidateNested({each: true})
    data: ManufacturerDataDto
    
}

export type UpdateManufacturerResponseDto = UpdateManufacturerErrorResponseDto | UpdateManufacturerSuccessResponseDto