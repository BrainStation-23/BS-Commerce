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
  StoreBranchStatus,
  UpdateBranchStatusParams,
  UpdateBranchStatusErrorMessage,
  UpdateBranchStatusErrorResponse,
  UpdateBranchStatusRequestBody,
  UpdateBranchStatusSuccessMessage,
  UpdateBranchStatusSuccessResponse,
} from 'models';

export class UpdateBranchStatusRequestBodyDto
  implements UpdateBranchStatusRequestBody
{
  @ApiProperty({
    example: StoreBranchStatus.APPROVED,
  })
  @IsNotEmpty()
  @IsString()
  status: StoreBranchStatus;
}

export class UpdateBranchStatusParamsDto implements UpdateBranchStatusParams {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  branchId: string;
}

export class StatusSuccessMessage {
  @ApiProperty({
    example: UpdateBranchStatusSuccessMessage.SUCCESSFULLY_APPROVED,
  })
  @IsString()
  message: UpdateBranchStatusSuccessMessage;
}

export class UpdateBranchStatusSuccessResponseDto
  implements UpdateBranchStatusSuccessResponse
{
  @ApiProperty({ default: HttpStatus.OK })
  @IsNumber()
  code: number;

  @ApiProperty()
  @IsObject()
  data: StatusSuccessMessage;
}

export class UpdateBranchStatusErrorResponseDto
  implements UpdateBranchStatusErrorResponse
{
  @ApiProperty({ default: HttpStatus.BAD_REQUEST })
  @IsNumber()
  code: number;

  @ApiProperty({
    example: UpdateBranchStatusErrorMessage.CAN_NOT_UPDATE_BRANCH_STATUS,
  })
  @IsString()
  error: UpdateBranchStatusErrorMessage;

  @ApiProperty()
  @IsArray()
  errors: string[];
}
