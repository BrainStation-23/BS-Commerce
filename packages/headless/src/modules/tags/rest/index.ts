import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
  UseGuards
} from '@nestjs/common';
import { Response } from 'express';
import { ApiBearerAuth, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TagsService } from '../services';
import {
  createHomePageTagErrorResponseDto,
  createHomePageTagRequesttDto,
  createHomePageTagSuccessResponseDto,
  CreateTagErrorResponseDto,
  CreateTagRequestBodyDto,
  CreateTagSuccessResponseDto,
  GetTagErrorResponseDto,
  GetTagParamsDto,
  GetTagsErrorResponseDto,
  GetTagsSuccessResponseDto,
  GetTagSuccessResponseDto,
  updateTagErrorResponseDto,
  updateTagParamDto,
  updateTagRequestDto,
  updateTagSuccessResponseDto
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
    const { code, ...response } = await this.tagsService.getTags();
    res.status(code);
    return { code, ...response };
  }

  @Get('/home-page-products-tags')
  @ApiResponse({
    description: 'Get All Home Page Products Tags Success Response',
    type: GetTagsSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Get All Home Page Products Tags Error Response',
    type: GetTagsErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async getHomePageProductsTags(@Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.tagsService.getHomePageProductsTags();
    res.status(code);
    return { code, ...response };
  }

  @UseGuards(new RolesGuard(['admin']))
  @ApiBearerAuth()
  @Patch('home-page-tag/:id')
  @ApiParam({ name: 'id' })
  @ApiResponse({
    description: 'Update Home Page Products Tag Success Response',
    type: updateTagSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Update Home Page Products Tag Error Response',
    type: updateTagErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async updateTag(
    @Param() params: updateTagParamDto,
    @Body() data: updateTagRequestDto,
    @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.tagsService.updateTag(params.id, data);
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

  @UseGuards(new RolesGuard(['admin']))
  @ApiBearerAuth()
  @Post('/create-home-page-products-tag')
  @ApiResponse({
    description: 'Create Home Page Products Tag Success Response',
    type: createHomePageTagSuccessResponseDto,
    status: HttpStatus.CREATED
  })
  @ApiResponse({
    description: 'Create Home Page Products Tag Error Response',
    type: createHomePageTagErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async createHomePageProductsTag(@Body() data: createHomePageTagRequesttDto, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.tagsService.createHomePageProductsTag(data);
    res.status(code);
    return { code, ...response };
  }

  @Get('/:tagId')
  @ApiResponse({
    description: 'Get Tag Success Response',
    type: GetTagSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Get Tag Error Response',
    type: GetTagErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async getTag(@Param() params: GetTagParamsDto, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.tagsService.getTag(params.tagId);
    res.status(code);
    return { code, ...response };
  }
}