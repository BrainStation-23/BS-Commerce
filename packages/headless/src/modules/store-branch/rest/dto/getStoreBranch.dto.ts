import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
} from 'class-validator';
import {
  GetStoreBranchErrorMessages,
  GetStoreBranchErrorResponse,
  GetStoreBranchSuccessResponse,
} from 'models';
import { StoreBranchDto } from './storeBranch.dto';

export class GetStoreBranchRequestDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  branchId: string;
}

export class GetStoreBranchSuccessResponseDto
  implements GetStoreBranchSuccessResponse
{
  @ApiProperty({ default: HttpStatus.OK })
  @IsNumber()
  code: number;

  @ApiProperty({ type: StoreBranchDto })
  @IsObject()
  data: StoreBranchDto;
}

export class GetStoreBranchErrorResponseDto
  implements GetStoreBranchErrorResponse
{
  @ApiProperty({ default: HttpStatus.BAD_REQUEST })
  @IsNumber()
  code: number;

  @ApiProperty({
    example: GetStoreBranchErrorMessages.CAN_NOT_GET_STORE_BRANCH,
  })
  @IsString()
  error: GetStoreBranchErrorMessages;

  @ApiProperty()
  @IsArray()
  errors: string[];
}
