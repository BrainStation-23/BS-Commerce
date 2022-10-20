import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import {
  GetAllStoreBranchErrorMessages,
  GetAllStoreBranchErrorResponse,
  GetAllStoreBranchQuery,
  GetAllStoreBranchSuccessResponse,
} from 'models';
import { StoreBranchDto } from './storeBranch.dto';

export class GetAllStoreBranchQueryDto implements GetAllStoreBranchQuery {
  @ApiProperty({ required: false, type: Number })
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  skip: number;

  @ApiProperty({ required: false, type: Number })
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  limit: number;
}

export class GetAllStoreBranchSuccessResponseDto
  implements GetAllStoreBranchSuccessResponse
{
  @ApiProperty({ default: HttpStatus.OK })
  @IsNumber()
  code: number;

  @ApiProperty({ type: [StoreBranchDto] })
  @Type(() => StoreBranchDto)
  @IsObject()
  data: StoreBranchDto[];
}

export class GetAllStoreBranchErrorResponseDto
  implements GetAllStoreBranchErrorResponse
{
  @ApiProperty({ default: HttpStatus.BAD_REQUEST })
  @IsNumber()
  code: number;

  @ApiProperty({
    example: GetAllStoreBranchErrorMessages.CAN_NOT_GET_ALL_STORE_BRANCH,
  })
  @IsString()
  error: GetAllStoreBranchErrorMessages;

  @ApiProperty()
  @IsArray()
  errors: string[];
}
