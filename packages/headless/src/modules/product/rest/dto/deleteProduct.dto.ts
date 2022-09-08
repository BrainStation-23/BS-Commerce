import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsObject, IsString, } from 'class-validator';
import {
    DeleteProductParams,
    DeleteProductErrorMessages,
    DeleteProductErrorResponse,
    DeleteProductSuccessResponse,
    DeleteProductSuccessMessage,
} from '@bs-commerce/models';

export class DeleteProductParamsDto implements DeleteProductParams {
    @ApiProperty()
    @IsString()
    productId: string;
}

export class DeleteProductErrorResponseDto implements DeleteProductErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({ example: DeleteProductErrorMessages.CAN_NOT_DELETE_PRODUCT, })
    @IsString()
    error: DeleteProductErrorMessages;

    @ApiProperty()
    @IsArray()
    errors: string[];
}

class DeleteProductMessage {
    @ApiProperty({ example: DeleteProductSuccessMessage.PRODUCT_DELETED_SUCCESSFUL })
    @IsString()
    message: DeleteProductSuccessMessage.PRODUCT_DELETED_SUCCESSFUL;
}

export class DeleteProductSuccessResponseDto implements DeleteProductSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    @IsNumber()
    code: number;

    @ApiProperty()
    @IsObject()
    data: DeleteProductMessage;
}