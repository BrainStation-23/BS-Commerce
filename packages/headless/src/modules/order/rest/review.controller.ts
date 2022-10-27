import { Body, Controller, Get, Param, Post, Res } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { OrderReviewService } from "../services/review.service";
import { CreateReviewDto } from "./dto/create.review.dto";
import { Response } from 'express';
import { ProductReviewListDto, ProductReviewResponseDto } from "./dto/product.review.dto";
import { IServiceResponse } from "src/utils/response/service.response.interface";
import { ReviewDto } from "./dto/review.dto";

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
        @Res({ passthrough: true }) res: Response,
    ){
        const { code, ...response} = await this.orderReviewService.getProductReview(productId);

        res.status(code);
        return response;
    }


}