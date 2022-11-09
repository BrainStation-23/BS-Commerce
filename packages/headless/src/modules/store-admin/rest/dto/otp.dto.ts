import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { SendOtpRequest } from '@bs-commerce/models';

export class MfaOtpDto implements SendOtpRequest {
  @ApiProperty({ required: false, example: 'sadmin@mail.com' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ required: false, example: '8801512001122' })
  @IsOptional()
  @IsString()
  @MaxLength(15, { message: 'Enter valid phone number' })
  phone?: string;

  @ApiProperty({ required: true, example: '12345678' })
  @IsString()
  @MinLength(8)
  password: string;
}

export class MfaVerifyOtpDto {
  @ApiProperty({ required: false, example: 'sadmin@mail.com' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ required: false, example: '8801512001122' })
  @IsOptional()
  @IsString()
  @MaxLength(15, { message: 'Enter valid phone number' })
  phone?: string;

  @ApiProperty({ required: true, example: '' })
  @IsString()
  id: string;

  @ApiProperty({ required: true, example: '1234' })
  @IsNumber()
  otp: number;
}
