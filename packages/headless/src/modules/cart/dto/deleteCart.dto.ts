import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsObject, IsString } from "class-validator";
import { deleteCartErrorMessage, deleteCartErrorResponse, deleteCartRequest, deleteCartSuccessResponse, DeleteMessage, Message } from "models";

export class deleteCartRequestDto implements deleteCartRequest {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    cartId: string;
}

export class DeleteMessageDto implements  DeleteMessage{
    @ApiProperty({
        example:Message.REMOVE_CART_SUCCESSFULLY,
    })
    message: Message;
}
export class deleteCartSuccessResponseDto implements deleteCartSuccessResponse {
    @ApiProperty()
    @IsNumber()
    code: number;

    @ApiProperty({type: DeleteMessageDto })
    @Type(()=> DeleteMessageDto)
    @IsObject()
    data: DeleteMessageDto;
}

export class deleteCartErrorResponseDto implements deleteCartErrorResponse {
    @ApiProperty({
        default: HttpStatus.BAD_REQUEST,
    })
    code: number;

    @ApiProperty({
        example: deleteCartErrorMessage.CAN_NOT_REMOVE_CART,
    })
    error: deleteCartErrorMessage;

    @ApiProperty()
    errors: string[];
}