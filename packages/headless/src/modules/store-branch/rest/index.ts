import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { StoreBranchService } from '../services';
import { Response } from 'express';
import {
  CreateStoreBranchErrorResponseDto,
  CreateStoreBranchRequestDto,
  CreateStoreBranchSuccessResponseDto,
  GetAllStoreBranchErrorResponseDto,
  GetAllStoreBranchQueryDto,
  GetAllStoreBranchSuccessResponseDto,
  GetStoreBranchErrorResponseDto,
  GetStoreBranchRequestDto,
  GetStoreBranchSuccessResponseDto,
} from './dto';

@ApiTags('Store Branch API')
@Controller('branches')
export class StoreBranchController {
  constructor(private storeBranchService: StoreBranchService) {}
  @Post('create-branch')
  @ApiResponse({
    description: 'Create Temporary Store Branch Success Response',
    type: CreateStoreBranchSuccessResponseDto,
    status: HttpStatus.CREATED,
  })
  @ApiResponse({
    description: 'Create Temporary Branch Error Response',
    type: CreateStoreBranchErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  async createTmpStoreBranch(
    @Body() storeBranch: CreateStoreBranchRequestDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } =
      await this.storeBranchService.createTmpStoreBranch(storeBranch);
    res.status(code);
    return { code, ...response };
  }

  @Get()
  @ApiResponse({
    description: 'Get All Temporary Store Branch Success Response',
    type: GetAllStoreBranchSuccessResponseDto,
    status: HttpStatus.CREATED,
  })
  @ApiResponse({
    description: 'Get All Temporary Store Branch Error Response',
    type: GetAllStoreBranchErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  async getTmpAllStoreBranch(
    @Query() condition: GetAllStoreBranchQueryDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } =
      await this.storeBranchService.getTmpAllStoreBranch(condition);
    res.status(code);
    return { code, ...response };
  }

  @Get(':branchId')
  @ApiResponse({
    description: 'Get Temporary Store Branch By ID Success Response',
    type: GetStoreBranchSuccessResponseDto,
    status: HttpStatus.CREATED,
  })
  @ApiResponse({
    description: 'Get Temporary Store Branch By ID Error Response',
    type: GetStoreBranchErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  async getTmpStoreBranch(
    @Param() params: GetStoreBranchRequestDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } =
      await this.storeBranchService.getTmpStoreBranch(params.branchId);
    res.status(code);
    return { code, ...response };
  }
}
