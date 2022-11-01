import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class OtpResponseDto {
  @ApiProperty()
  @IsString()
  message: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  id?: string;
}
