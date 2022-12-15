import { HttpStatus, Injectable } from '@nestjs/common';
import { coreConfig } from 'config/core';
import {
  UploadFileErrorMessages,
  UploadFileResponse,
} from '@bs-commerce/models';
import { Helper } from '../../../helper/helper.interface';

@Injectable()
export class MediaService {
  constructor(private helper: Helper) {}

  async upload(req: any): Promise<UploadFileResponse> {
    if (req.fileExtensionValidationError)
      return this.helper.serviceResponse.errorResponse(
        UploadFileErrorMessages.UNSUPPORTED_MIMETYPE,
        null,
        HttpStatus.BAD_REQUEST,
      );
    if (!req.file)
      return this.helper.serviceResponse.errorResponse(
        UploadFileErrorMessages.PROVIDE_FILE,
        null,
        HttpStatus.BAD_REQUEST,
      );
    return this.helper.serviceResponse.successResponse(
      { url: `${coreConfig.baseUrl}/${req.file.path}` },
      HttpStatus.OK,
    );
  }
}
