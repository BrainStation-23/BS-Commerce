import { Body, Controller, Get, Param, Post, Query, Res } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { OrderReviewService } from "../services/review.service";
import { CreateReviewDto } from "./dto/create.review.dto";
import { Response } from 'express';
import { GetProductReviewQueryDto, ProductReviewListDto, ProductReviewResponseDto } from "./dto/product.review.dto";
import { IServiceResponse } from "src/utils/response/service.response.interface";
import { ReviewDto } from "./dto/review.dto";
import { CreateReplyDto } from "./dto/create.reply.dto";

@ApiTags('Order - Review API')
@Controller('order/review')
export class OrderReviewController {
    constructor(private orderReviewService: OrderReviewService) {}

    @ApiResponse({
        type: ReviewDto,
        description: 'Response of a review after being created',
    })
    @Post()
    async createReview(
        @Body() body: CreateReviewDto,
        @Res({ passthrough: true }) res: Response,
    ){
        const {code, ...response} = await this.orderReviewService.createReview(body);

        res.status(code);
        return response;
    }


    @ApiResponse({
        type: ProductReviewListDto,
        description: 'Review list of a product',
    })
    @Get('/:productId')
    async getProductReview(
        @Param('productId') productId: string,
        @Query() query: GetProductReviewQueryDto,
        @Res({ passthrough: true }) res: Response,
    ){
        const { skip, limit } = query;
        const { code, ...response} = await this.orderReviewService.getProductReview(productId, skip, limit);

        res.status(code);
        return response;
    }

    @Post('/reply')
    async createReply(
        @Body() body: CreateReplyDto,
        @Res({ passthrough: true }) res: Response
    ){
        const { code, ...response } = await this.orderReviewService.createReply(body);

        res.status(code);
        return response;
    }
}