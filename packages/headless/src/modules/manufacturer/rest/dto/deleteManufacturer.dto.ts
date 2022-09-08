import {
  DescriptiveError,
  UpdateManufacturerRequest,
  DeleteManufacturerErrorResponse,
  DeleteManufacturerErrorMessages,
  DeleteManufacturerSuccessMessages,
  DeleteManufacturerSuccessResponse,
} from '@bs-commerce/models';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { ManufacturerDto } from './manufacturer.dto';
import { ManufacturerSeoDto } from './manufacturerSeo.dto';
import { HttpStatus } from '@nestjs/common';

export class DeleteManufacturerErrorResponseDto
  implements DeleteManufacturerErrorResponse
{
  @ApiProperty({ default: HttpStatus.BAD_REQUEST })
  code: number;

  @ApiProperty({
    example: DeleteManufacturerErrorMessages.MANUFACTURER_NOT_FOUND,
    examples: [
      DeleteManufacturerErrorMessages.MANUFACTURER_NOT_FOUND,
      DeleteManufacturerErrorMessages.MANUFACTURER_NOT_DELETED,
    ],
  })
  error:
    | DeleteManufacturerErrorMessages.MANUFACTURER_NOT_FOUND
    | DeleteManufacturerErrorMessages.MANUFACTURER_NOT_DELETED;

  @ApiProperty()
  errors: DescriptiveError;
}

class ManufacturerDataDto {
  @ApiProperty()
  @ValidateNested({ each: true })
  manufacturer: ManufacturerDto;

  @ApiProperty({
    example:
      DeleteManufacturerSuccessMessages.MANUFACTURER_DELETED_SUCCESSFULLY,
  })
  message: string | any;
}
export class DeleteManufacturerSuccessResponseDto
  implements DeleteManufacturerSuccessResponse
{
  @ApiProperty({ default: HttpStatus.OK })
  code: number;

  @ApiProperty()
  @ValidateNested({ each: true })
  data: ManufacturerDataDto;
}

export type DeleteManufacturerResponseDto =
  | DeleteManufacturerErrorResponseDto
  | DeleteManufacturerSuccessResponseDto;
