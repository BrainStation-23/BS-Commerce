import { GetManufacturersErrorResponse, GetManufacturersSuccessResponse, DescriptiveError, GetManufacturersQuery, } from '@bs-commerce/models';
import { GetManufacturersErrorMessages, GetManufacturersSuccessMessages } from '@bs-commerce/models'
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, ValidateNested } from "class-validator";
import { ManufacturerDto } from './manufacturer.dto';
import { HttpStatus } from '@nestjs/common';
import { Type } from 'class-transformer';

export class GetManufacturersQueryDto implements GetManufacturersQuery {
    @ApiProperty({ required: false, type: Number, })
    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    skip?: number;

    @ApiProperty({ required: false, type: Number })
    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    limit?: number;
}

export class GetManufacturersErrorResponseDto implements GetManufacturersErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    code: number;

    @ApiProperty({
        example: GetManufacturersErrorMessages.MANUFACTURERS_NOT_FOUND,
        examples: [GetManufacturersErrorMessages.MANUFACTURERS_NOT_FOUND]
    })
    error: GetManufacturersErrorMessages.MANUFACTURERS_NOT_FOUND;

    @ApiProperty()
    errors: DescriptiveError;
}

class ManufacturersDataDto {
    @ApiProperty({type: [ManufacturerDto]})
    @ValidateNested({ each: true })
    manufacturers: ManufacturerDto[];

    @ApiProperty()
    @ValidateNested({ each: true })
    total: number;

    @ApiProperty({ example: GetManufacturersSuccessMessages.MANUFACTURERS_LOADED_SUCCESSFULLY })
    message: GetManufacturersSuccessMessages.MANUFACTURERS_LOADED_SUCCESSFULLY;
}
export class GetManufacturersSuccessResponseDto implements GetManufacturersSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    code: number;

    @ApiProperty()
    @ValidateNested({ each: true })
    data: ManufacturersDataDto

}

export type GetManufacturersResponseDto = GetManufacturersErrorResponseDto | GetManufacturersSuccessResponseDto