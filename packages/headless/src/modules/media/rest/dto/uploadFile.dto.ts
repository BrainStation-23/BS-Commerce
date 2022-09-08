import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsObject } from 'class-validator';
import { UploadFileErrorMessages, UploadFileErrorResponse, UploadFileSuccessResponse } from '@bs-commerce/models';


export class UploadFileErrorResponseDto implements UploadFileErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({
        example: UploadFileErrorMessages.CAN_NOT_UPLOAD_FILE
    })
    error: UploadFileErrorMessages;

    @ApiProperty()
    @IsArray()
    errors: string[];
}

export class UploadFileDto {
    @ApiProperty()
    url: string;
}

export class UploadFileSuccessResponseDto implements UploadFileSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    @IsNumber()
    code: number;

    @ApiProperty()
    @IsObject()
    data: UploadFileDto;
}