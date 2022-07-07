import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { TagsService } from '../services';
import {
  GetTagsErrorResponseDto,
  GetTagsSuccessResponseDto
} from '../dto';

@Controller('tags')
@ApiTags('Tags API')
export class TagsController {
  constructor(private tagsService: TagsService) { }

  @Get()
  @ApiResponse({
    description: 'Get All Tags Success Response',
    type: GetTagsSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Get All Tags Error Response',
    type: GetTagsErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async getTags(@Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.tagsService.getTags({});
    res.status(code);
    return { code, ...response };
  }
}