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
  CreateHomePageProductsTagsErrorResponseDto,
  CreateHomePageProductsTagsSuccessResponseDto,
  CreateTagErrorResponseDto,
  CreateTagRequestBodyDto,
  CreateTagSuccessResponseDto,
  GetTagsErrorResponseDto,
  GetTagsSuccessResponseDto,
  HomePageProductsTagParamDto,
  HomePageProductsTagsRequestDto,
  UpdateHomePageProductsTagErrorResponseDto,
  UpdateHomePageProductsTagRequestDto,
  UpdateHomePageProductsTagSuccessResponseDto
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
  @Patch('home-page-tag/:id')
  @ApiParam({ name: 'id' })
  @ApiResponse({
    description: 'Update Home Page Products Tag Success Response',
    type: UpdateHomePageProductsTagSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Update Home Page Products Tag Error Response',
    type: UpdateHomePageProductsTagErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async updateHomePageProductsTag(
    @Param() params: HomePageProductsTagParamDto,
    @Body() data: UpdateHomePageProductsTagRequestDto,
    @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.tagsService.updateHomePageProductsTag(params.id, data);
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
  @Post('home-page-tag')
  @ApiResponse({
    description: 'Create Products Home Page Tag Success Response',
    type: CreateHomePageProductsTagsSuccessResponseDto,
    status: HttpStatus.CREATED
  })
  @ApiResponse({
    description: 'Create Products Home Page Tag Error Response',
    type: CreateHomePageProductsTagsErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async createHomePageProductsTags(@Body() data: HomePageProductsTagsRequestDto, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.tagsService.createHomePageProductsTags(data);
    res.status(code);
    return { code, ...response };
  }
}