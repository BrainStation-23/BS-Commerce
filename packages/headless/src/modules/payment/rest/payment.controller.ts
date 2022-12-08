import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Res,
  UseGuards,
} from '@nestjs/common';
import { User } from 'src/entity/user';
//import { User as UserInfo } from 'src/decorators/auth.decorator';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { PaymentService } from '../services/payment.service';
import { CreatePaymentDto } from '../dto/payment.create.dto';

@Controller('payment')
// @UseGuards(JwtAuthGuard)
// @ApiBearerAuth()
@ApiTags('Payment API')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) { }

  @Post()
  async createPayment(
    // @UserInfo() user: User,
    @Body() data: CreatePaymentDto,
    // @Res({ passthrough: true }) res: Response
  ): Promise<any> {
    return await this.paymentService.createPayment(data);
  }

  @Get('/methods')
  async getPaymentMethods() {
    return await this.paymentService.getPaymentMethods();
  }

  @Post('/ipn/:orderId/:paymentmethod')
  async handleIpn(
    @Param('paymentmethod') paymentmethod: string,
    @Param('orderId') orderId: string
  ) {
    return await this.paymentService.handleIpn(paymentmethod, orderId, 'abc');
  }
}
