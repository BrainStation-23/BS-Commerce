import { 
  AllBranchByStoreId, 
  Branch, 
  GetAllBranchByStoreIdErrorMessage, 
  GetAllBranchByStoreIdErrorResponse, 
  GetAllBranchByStoreIdSuccessResponse 
} from 'models';
import { IsArray, IsBoolean, IsNotEmpty, IsObject, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { HttpStatus } from '@nestjs/common';

import { BranchDto } from './branch.dto';

export class AllBranchByStoreIdDto implements AllBranchByStoreId {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  store: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  branchList: BranchDto[];
}

export class GetAllBranchByStoreIdSuccessResponseDto implements GetAllBranchByStoreIdSuccessResponse{
  @ApiProperty({ default: HttpStatus.OK })
  code: number;

  @ApiProperty()
  data: AllBranchByStoreIdDto;
}

export class GetAllBranchByStoreIdErrorResponseDto implements GetAllBranchByStoreIdErrorResponse {
  @ApiProperty({ default: HttpStatus.BAD_REQUEST })
  code?: number;

  @ApiProperty()
  error:
    | GetAllBranchByStoreIdErrorMessage.CANNOT_GET_BRANCHES
    | GetAllBranchByStoreIdErrorMessage.INVALID_STORE_ID;

  @ApiProperty()
  errors: string[];
}

export type CreateBranchResponseDto =
  | GetAllBranchByStoreIdErrorResponseDto
  | GetAllBranchByStoreIdSuccessResponseDto;
