import { Body, Controller, Post, Res } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { OrderReviewService } from "../services/review.service";
import { CreateReviewDto } from "./dto/create.review.dto";
import { Response } from 'express';

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
}