import { HttpException, HttpStatus, PipeTransform } from '@nestjs/common';

export class ObjectValidationPipe implements PipeTransform {
  transform(value: any) {
    if (value.info.name === '' || value.info.name === undefined)
      throw new HttpException(
        'Name is required and cannot be empty',
        HttpStatus.BAD_REQUEST,
      );

    return value;
  }
}
