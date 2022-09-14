import {
  DescriptiveError,
  GetManufacturerErrorResponse,
  GetManufacturerErrorMessages,
  GetManufacturerSuccessMessages,
  UpdateManufacturerSuccessResponse,
} from '@bs-commerce/models';
import { ApiProperty } from '@nestjs/swagger';
import { ValidateNested } from 'class-validator';
import { ManufacturerDto } from './manufacturer.dto';
import { HttpStatus } from '@nestjs/common';

export class GetManufacturerErrorResponseDto
  implements GetManufacturerErrorResponse
{
  @ApiProperty({ default: HttpStatus.BAD_REQUEST })
  code: number;

  @ApiProperty({
    example: GetManufacturerErrorMessages.MANUFACTURER_NOT_FOUND,
    examples: [GetManufacturerErrorMessages.MANUFACTURER_NOT_FOUND],
  })
  error: GetManufacturerErrorMessages.MANUFACTURER_NOT_FOUND;

  @ApiProperty()
  errors: DescriptiveError;
}

class ManufacturerDataDto {
  @ApiProperty()
  @ValidateNested({ each: true })
  manufacturer: ManufacturerDto;

  @ApiProperty({
    example: GetManufacturerSuccessMessages.MANUFACTURER_LOADED_SUCCESSFULLY,
  })
  message: string | any;
}
export class GetManufacturerSuccessResponseDto
  implements UpdateManufacturerSuccessResponse
{
  @ApiProperty({ default: HttpStatus.OK })
  code: number;

  @ApiProperty()
  @ValidateNested({ each: true })
  data: ManufacturerDataDto;
}

export type GetManufacturerResponseDto =
  | GetManufacturerErrorResponseDto
  | GetManufacturerSuccessResponseDto;
