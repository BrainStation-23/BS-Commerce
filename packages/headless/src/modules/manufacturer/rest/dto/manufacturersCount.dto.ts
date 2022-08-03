import {
  DescriptiveError,
  GetManufacturersCountErrorResponse,
  GetManufacturersCountErrorMessages,
  GetManufacturersCountSuccessMessages,
  GetManufacturersCountSuccessResponse,
} from 'models';
import { ApiProperty } from '@nestjs/swagger';
import { HttpStatus } from '@nestjs/common';

export class ManufacturersCountErrorResponseDto
  implements GetManufacturersCountErrorResponse
{
  @ApiProperty({ default: HttpStatus.BAD_REQUEST })
  code: number;

  @ApiProperty({
    example: GetManufacturersCountErrorMessages.MANUFACTURERS_NOT_FOUND,
    examples: [GetManufacturersCountErrorMessages.MANUFACTURERS_NOT_FOUND],
  })
  error: GetManufacturersCountErrorMessages.MANUFACTURERS_NOT_FOUND;

  @ApiProperty()
  errors: DescriptiveError;
}

class ManufacturersCountDataDto {
  @ApiProperty()
  count: number;

  @ApiProperty({
    example:
      GetManufacturersCountSuccessMessages.MANUFACTURERS_COUNT_LOADED_SUCCESSFULLY,
    examples: [
      GetManufacturersCountSuccessMessages.MANUFACTURERS_COUNT_LOADED_SUCCESSFULLY,
      GetManufacturersCountSuccessMessages.MANUFACTURER_IS_EMPTY,
    ],
  })
  message: GetManufacturersCountSuccessMessages.MANUFACTURERS_COUNT_LOADED_SUCCESSFULLY;
}

export class ManufacturersCountSuccessResponseDto
  implements GetManufacturersCountSuccessResponse
{
  @ApiProperty({ default: HttpStatus.OK })
  code: number;

  @ApiProperty()
  data: ManufacturersCountDataDto;
}

export type GetManufacturersCountResponseDto =
  | ManufacturersCountSuccessResponseDto
  | ManufacturersCountErrorResponseDto;
