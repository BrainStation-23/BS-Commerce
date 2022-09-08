import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsArray,
  IsObject,
} from 'class-validator';
import {
  ForgotPasswordErrorResponse,
  ForgotPasswordRequest,
  ForgotPasswordSuccessResponse,
  ForgotMessageResponse,
  ForgotPasswordErrorMessages,
} from '@bs-commerce/models';

export class ForgotPasswordDto implements ForgotPasswordRequest {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  username: string;
}

export class ChangePasswordMessageDto implements ForgotMessageResponse {
  @ApiProperty()
  @IsString()
  message: string;
}

export class ForgotPasswordErrorResponseDto
  implements ForgotPasswordErrorResponse
{
  @ApiProperty({ default: HttpStatus.BAD_REQUEST })
  @IsNumber()
  code: number;

  @ApiProperty({
    example: ForgotPasswordErrorMessages.CAN_NOT_UPDATE_USER_PASSWORD,
    examples: [
      ForgotPasswordErrorMessages.CAN_NOT_GET_USER,
      ForgotPasswordErrorMessages.CAN_NOT_UPDATE_USER_PASSWORD,
      ForgotPasswordErrorMessages.SIGNED_UP_USING_YOUR_LOCAL_ACCOUNT,
    ],
  })
  @IsString()
  error: ForgotPasswordErrorMessages;

  @ApiProperty()
  @IsArray()
  errors: string[];
}

export class ForgotPasswordSuccessResponseDto
  implements ForgotPasswordSuccessResponse
{
  @ApiProperty({ default: HttpStatus.OK })
  @IsNumber()
  code: number;

  @ApiProperty()
  @IsObject()
  data: ChangePasswordMessageDto;
}
