import { Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { MediaService } from '../services';
import { ApiFile } from '../decorators/file.decorator';
import { UploadFileErrorResponseDto, UploadFileSuccessResponseDto } from '../dto';

@Controller('media')
@ApiTags('Media API')
export class MediaController {
  constructor(private mediaService: MediaService) { }

  @Post('upload')
  @ApiFile('file', true, {})
  @ApiResponse({
    description: 'Upload File Success Response',
    type: UploadFileSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Upload File Error Response',
    type: UploadFileErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async upload(@Res({ passthrough: true }) res: Response, @Req() req: Request) {
    const { code, ...response } = await this.mediaService.upload(req);
    res.status(code);
    return { code, ...response };
  }
}