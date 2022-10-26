import { Body, Controller, Get, Param, Post, Query, Res } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { OrderReviewService } from "../services/review.service";
import { CreateReviewDto } from "./dto/create.review.dto";
import { Response } from 'express';
import { GetProductReviewQueryDto, ProductReviewResponseDto } from "./dto/product.review.dto";
import { IServiceResponse } from "src/utils/response/service.response.interface";

@ApiTags('Order - Review API')
@Controller('order/review')
export class OrderReviewController {
    constructor(private orderReviewService: OrderReviewService) {}

    @Post()
    async createReview(
        @Body() body: CreateReviewDto,
        @Res({ passthrough: true }) res: Response,
    ){
        const {code, ...response} = await this.orderReviewService.createReview(body);

        res.status(code);
        return response;
    }

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
}