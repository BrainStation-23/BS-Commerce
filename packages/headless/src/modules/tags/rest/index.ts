import { Body, Controller, Get, HttpStatus, Post, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TagsService } from '../services';
import {
  CreateTagErrorResponseDto,
  CreateTagRequestBodyDto,
  CreateTagSuccessResponseDto,
  GetTagsErrorResponseDto,
  GetTagsSuccessResponseDto
} from './dto';
import { RolesGuard } from 'src/guards/auth.guard';

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

  @UseGuards(new RolesGuard(['admin']))
  @ApiBearerAuth()
  @Post()
  @ApiResponse({
    description: 'Create Tag Success Response',
    type: CreateTagSuccessResponseDto,
    status: HttpStatus.CREATED
  })
  @ApiResponse({
    description: 'Create Tag Error Response',
    type: CreateTagErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async createTag(@Body() data: CreateTagRequestBodyDto, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.tagsService.createTag(data);
    res.status(code);
    return { code, ...response };
  }
}