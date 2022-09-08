import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
import {
    UpdateCustomerRequestBody,
    UpdateCustomerErrorResponse,
    UpdateCustomerSuccessResponse,
    UpdateCustomerErrorMessages
} from '@bs-commerce/models';
import { CustomerInformationDto } from './customer.dto';

export class UpdateCustomerDto implements UpdateCustomerRequestBody {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    name?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    phone?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    email?: string;
}

export class UpdateCustomerErrorResponseDto implements UpdateCustomerErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({
        example: UpdateCustomerErrorMessages.CAN_NOT_UPDATE_CUSTOMER_INFORMATION,
    })
    @IsString()
    error: UpdateCustomerErrorMessages;

    @ApiProperty()
    @IsArray()
    errors: string[];
}

export class UpdateCustomerSuccessResponseDto implements UpdateCustomerSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    @IsNumber()
    code: number;

    @ApiProperty()
    @IsObject()
    data: CustomerInformationDto;
}