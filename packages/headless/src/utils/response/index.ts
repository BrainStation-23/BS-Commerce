import { HttpStatus } from '@nestjs/common';
import {
  DescriptiveError,
  IServiceErrorResponse,
  IServiceSuccessResponse
} from './service.response.interface';

export function successResponse<T>(
  dataType: { new (): T },
  data: T,
  code: number = HttpStatus.OK,
): IServiceSuccessResponse<T> {
  // data = plainToInstance(dataType, data, { excludeExtraneousValues: true });
  return { data, code };
}

export function errorResponse(
  error: string,
  errors: DescriptiveError | null = null,
  code: number = HttpStatus.NOT_FOUND,
): IServiceErrorResponse {
  return { error, errors, code };
}
