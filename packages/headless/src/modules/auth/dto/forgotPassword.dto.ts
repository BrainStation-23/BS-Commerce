import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';
import type { ForgotPasswordErrorResponse, ForgotPasswordRequest, ForgotPasswordSuccessResponse, ForgotMessageResponse } from 'models'

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
  @ApiProperty()
  code: number;

  @ApiProperty()
  error: 'CANT\'T_GET_USER' | 'CANT\'T_UPDATE_USER_PASSWORD' | 'SIGNED_UP_USING_YOUR_LOCAL_ACCOUNT';

  @ApiProperty()
  errors: string[];
}

export class ForgotPasswordSuccessResponseDto implements ForgotPasswordSuccessResponse {
  @ApiProperty()
  code: number;

  @ApiProperty()
  data: MessageDto;
}
