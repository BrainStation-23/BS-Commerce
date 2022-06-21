import { Controller, HttpStatus, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { Response } from 'express';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { MediaService } from '../services';
import { ApiFile } from '../decorators/file.decorator';
import { fileMimetypeFilter } from '../config/mimetype.filter';
import { UploadFileErrorResponseDto, UploadFileSuccessResponseDto } from '../dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('media')
@ApiTags('Media API')
export class MediaController {
  constructor(private mediaService: MediaService) { }

  @Post('upload')
  @ApiFile('file', true, { fileFilter: fileMimetypeFilter('image') })
  @UseInterceptors(
    FileInterceptor('file',{ dest: 'src/public' })
  )
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
  async upload(@UploadedFile() file: any, @Res({ passthrough: true }) res: Response) {
    console.log(file);
  }
}