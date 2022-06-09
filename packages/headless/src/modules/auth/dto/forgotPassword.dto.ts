import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';
import {
  ForgotPasswordErrorResponse,
  ForgotPasswordRequest,
  ForgotPasswordSuccessResponse,
  ForgotMessageResponse,
  ForgotPasswordErrorMessages,
} from 'models'

export class ForgotPasswordDto implements ForgotPasswordRequest {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  username: string;
}

export class MessageDto implements ForgotMessageResponse {
  @ApiProperty()
  message: string;
}

export class ForgotPasswordErrorResponseDto implements ForgotPasswordErrorResponse {
  @ApiProperty({ default: HttpStatus.BAD_REQUEST })
  code: number;

  @ApiProperty({
    example: ForgotPasswordErrorMessages.CAN_NOT_UPDATE_USER_PASSWORD,
    examples: [ForgotPasswordErrorMessages.CAN_NOT_GET_USER, ForgotPasswordErrorMessages.CAN_NOT_UPDATE_USER_PASSWORD, ForgotPasswordErrorMessages.SIGNED_UP_USING_YOUR_LOCAL_ACCOUNT]
  })
  error: ForgotPasswordErrorMessages;

  @ApiProperty()
  errors: string[];
}

export class ForgotPasswordSuccessResponseDto implements ForgotPasswordSuccessResponse {
  @ApiProperty({ default: HttpStatus.OK })
  code: number;

  @ApiProperty()
  data: MessageDto;
}
