import { AllBranchByStoreIdDto, GetAllBranchByStoreIdSuccessResponseDto, GetAllBranchByStoreIdErrorResponseDto } from './dto/allBranchByStoreId';
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Query,
    Res,
    HttpStatus,
    UseGuards,
    Patch,
} from '@nestjs/common';
import { Response } from 'express';
import { ApiBearerAuth, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateBranchSuccessResponseDto, CreateBranchErrorResponseDto, CreateBranchRequestDto } from './dto/create.branch.dto';
import { BranchService } from '../services';
import { SingleBranchSuccessResponseDto, SingleBranchErrorResponseDto } from './dto/branch.dto';

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
    ){
        const { code, ...response} = await this.branchService.createBranch(branch);
        
        res.status(code)
        return { code, ...response};
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
    async getBranchByStoreId(
        @Param('storeId') storeId: string,
        @Res({ passthrough: true }) res: Response,
    ){
        const {code, ...response } = await this.branchService.getBranchByStoreId(storeId);

        res.status(code);
        return { code, ...response};
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
    ){
        const {code, ...response } = await this.branchService.getBranch(branchId);

        res.status(code);
        return { code, ...response};
    }
}
