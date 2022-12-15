import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  HttpStatus,
  Patch,
} from '@nestjs/common';
import { Response } from 'express';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BranchService } from '../services';
import {
  CreateBranchErrorResponseDto,
  CreateBranchRequestDto,
  CreateBranchSuccessResponseDto,
  GetAllBranchByStoreIdErrorResponseDto,
  GetAllBranchByStoreIdSuccessResponseDto,
  SingleBranchErrorResponseDto,
  SingleBranchSuccessResponseDto,
  UpdateBranchStatusErrorResponseDto,
  UpdateBranchStatusParamsDto,
  UpdateBranchStatusRequestBodyDto,
  UpdateBranchStatusSuccessResponseDto,
} from './dto/index.dto';

@ApiTags('Branch API')
@Controller('store-branch')
export class BranchController {
  constructor(private branchService: BranchService) {}

  @Post('/create')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Branch was created successfully',
    type: CreateBranchSuccessResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Error creating new branch',
    type: CreateBranchErrorResponseDto,
  })
  async createBranch(
    @Body() branch: CreateBranchRequestDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.branchService.createBranch(branch);

    res.status(code);
    return { code, ...response };
  }

  @Patch('/update-status/:branchId')
  @ApiParam({ name: 'branchId' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Update Branch Status Success Response',
    type: UpdateBranchStatusSuccessResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Update Branch Status Error Response',
    type: UpdateBranchStatusErrorResponseDto,
  })
  async updateStatus(
    @Param() params: UpdateBranchStatusParamsDto,
    @Body() updateStatusBody: UpdateBranchStatusRequestBodyDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.branchService.updateStatus(
      params.branchId,
      updateStatusBody.status,
    );

    res.status(code);
    return { code, ...response };
  }

  @Get('/branch-list/:storeId')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Branches were fetched successfully',
    type: GetAllBranchByStoreIdSuccessResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Error fetching branches of a store',
    type: GetAllBranchByStoreIdErrorResponseDto,
  })
  async getAllBranchByStoreId(
    @Param('storeId') storeId: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.branchService.getAllBranchByStoreId(
      storeId,
    );

    res.status(code);
    return { code, ...response };
  }

  @Get('/:branchId')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Branch was fetched successfully',
    type: SingleBranchSuccessResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Error fetching a branch',
    type: SingleBranchErrorResponseDto,
  })
  async getBranch(
    @Param('branchId') branchId: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.branchService.getBranch(branchId);

    res.status(code);
    return { code, ...response };
  }
}
