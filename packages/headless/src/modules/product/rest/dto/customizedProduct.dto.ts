import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
    IsArray,
    IsNumber,
    IsObject,
    IsOptional,
    IsString
} from "class-validator";
import {
    CustomizedProducts,
    GetCustomizedProductsErrorMessages,
    GetCustomizedProductsErrorResponse,
    GetCustomizedProductsQuery,
    GetCustomizedProductsSuccessResponse,
    GetCustomizedProductsTagsEnum,
    Product,
} from "models";
import { ProductDto } from "./product.dto";


export class GetCustomizedProductsQueryDto implements GetCustomizedProductsQuery {
    @ApiProperty({ required: false, type: Number, })
    @Type(() => Number)
    @IsOptional()
    @IsNumber()
    skip?: number;

    @ApiProperty({ required: false, type: Number })
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    limit?: number;
}

export class CustomizedProductsDto implements CustomizedProducts {
    @ApiProperty({type:[ProductDto] })
    @Type(() => ProductDto)
    [GetCustomizedProductsTagsEnum.BRANDS_YOU_ARE_LOOKING_FOR]: ProductDto[];
}

export class GetCustomizedProductsErrorResponseDto implements GetCustomizedProductsErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({ example: GetCustomizedProductsErrorMessages.CAN_NOT_GET_CUSTOMIZED_PRODUCTS })
    @IsString()
    error: GetCustomizedProductsErrorMessages;

    @ApiProperty()
    @IsArray()
    errors: string[];
}

export class GetCustomizedProductsSuccessResponseDto implements GetCustomizedProductsSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    @IsNumber()
    code: number;

    @ApiProperty({ type: CustomizedProductsDto })
    @IsObject()
    data: CustomizedProductsDto;
}