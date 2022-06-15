import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsObject, IsString } from 'class-validator';


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

export class UploadFileMessage {
    @ApiProperty({ example: UploadFileSuccessMessages.FILE_UPLOADED_SUCCESSFUL })
    @IsString()
    message: UploadFileSuccessMessages.FILE_UPLOADED_SUCCESSFUL;
}

export class UploadFileSuccessResponseDto implements UploadFileSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    @IsNumber()
    code: number;

    @ApiProperty()
    @IsObject()
    data: UploadFileMessage;
}