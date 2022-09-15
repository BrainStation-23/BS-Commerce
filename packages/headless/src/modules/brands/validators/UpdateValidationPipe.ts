import { HttpException, HttpStatus, PipeTransform } from '@nestjs/common';

export class UpdateValidationPipe implements PipeTransform {
  transform(value: any) {
    if (value.info && value.info.name)
      throw new HttpException(
        'Name must not be updated',
        HttpStatus.BAD_REQUEST,
      );

    return value;
  }
}
