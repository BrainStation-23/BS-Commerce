import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UploadFileErrorMessages, UploadFileResponse } from 'models';
import { Helper } from 'src/helper/helper.interface';

@Injectable()
export class MediaService {
  constructor(private helper: Helper) { }

  async upload(req: any, baseUrl: string): Promise<UploadFileResponse> {
    if (req.fileExtensionValidationError) return this.helper.serviceResponse.errorResponse(UploadFileErrorMessages.UNSUPPORTED_MIMETYPE, null, HttpStatus.BAD_REQUEST);
    if (!req.file) return this.helper.serviceResponse.errorResponse(UploadFileErrorMessages.PROVIDE_FILE, null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse({ url: `${baseUrl}/${req.file.path}` }, HttpStatus.OK);
  }
}