import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsObject, IsString, ValidateNested } from "class-validator";
import { getCategoryErrorMessage, getCategoryErrorResponse, getCategoryRequest, getCategorySuccessResponse } from "models";
import { ValidateNested as CustomValidator } from 'src/decorators/service.validator';
import { CategoryDto } from "./category.dto";

export class getCategoryRequestDto implements getCategoryRequest {
    @ApiProperty()
    @IsString()
    categoryId: string;
}
export class getCategorySuccessResponseDto implements getCategorySuccessResponse {
    @ApiProperty()
    @IsNumber()
    code: number;

    @ApiProperty({type: CategoryDto})
    @CustomValidator(CategoryDto)
    @ValidateNested()
    @IsObject()
    data: CategoryDto;
}

export class getCategoryErrorResponseDto implements getCategoryErrorResponse {
    @ApiProperty({
        default: HttpStatus.BAD_REQUEST,
    })
    code: number;

    @ApiProperty({
        example: getCategoryErrorMessage.CAN_NOT_GET_CATEGORY_BY_ID,
        examples: [getCategoryErrorMessage.CAN_NOT_GET_CATEGORY_BY_ID],
    })
    error: getCategoryErrorMessage;

    @ApiProperty()
    errors: string[];
}