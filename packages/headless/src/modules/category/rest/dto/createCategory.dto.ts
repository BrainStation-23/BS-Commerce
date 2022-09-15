import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import {
  createCategoryErrorMessage,
  createCategoryErrorResponse,
  createCategoryRequest,
  createCategorySuccessResponse,
} from '@bs-commerce/models';
import { CategoryDto, CategoryMetaDto, PhotoDto } from './category.dto';
import { ValidateNested as CustomValidator } from 'src/decorators/service.validator';
import { Type } from 'class-transformer';
export class createCategoryRequestDto implements createCategoryRequest {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  parentSlug?: string;

  @ApiProperty({ type: PhotoDto })
  @Type(() => PhotoDto)
  @CustomValidator(PhotoDto)
  @IsOptional()
  @IsObject()
  photo?: PhotoDto;

  @ApiProperty()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  showOnHomePage?: boolean;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  includeInTopMenu?: boolean;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  allowToSelectPageSize?: boolean;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  published?: boolean;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  displayOrder?: number;

  @ApiProperty({ type: CategoryMetaDto })
  @Type(() => CategoryMetaDto)
  @CustomValidator(CategoryMetaDto)
  @IsOptional()
  @IsObject()
  meta?: CategoryMetaDto;
}

export class createCategorySuccessResponseDto
  implements createCategorySuccessResponse
{
  @ApiProperty()
  @IsNumber()
  code: number;

  @ApiProperty({ type: CategoryDto })
  @Type(() => CategoryDto)
  @ValidateNested()
  @IsObject()
  data: CategoryDto;
}

export class createCategoryErrorResponseDto
  implements createCategoryErrorResponse
{
  @ApiProperty({
    default: HttpStatus.INTERNAL_SERVER_ERROR,
  })
  code: number;

  @ApiProperty({
    example: createCategoryErrorMessage.CAN_NOT_CREATE_CATEGORY,
    examples: [createCategoryErrorMessage.CAN_NOT_CREATE_CATEGORY],
  })
  error: createCategoryErrorMessage;

  @ApiProperty()
  errors: string[];
}
