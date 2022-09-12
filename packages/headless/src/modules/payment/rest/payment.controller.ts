import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import {  ApiTags } from '@nestjs/swagger';
import { PaymentService } from '../services/payment.service';
import { CreatePaymentDto } from '../dto/payment.create.dto';

@Controller('payment')
// @UseGuards(JwtAuthGuard)
// @ApiBearerAuth()
@ApiTags('Payment API')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}
  
  @Post()
  createPayment(
    // @UserInfo() user: User,
    @Body() data: CreatePaymentDto,
    // @Res({ passthrough: true }) res: Response
  ): Promise<any> {
    return this.paymentService.createPayment(data);
  }

  @Get('/methods')
  getPaymentMethods() {
    return this.paymentService.getPaymentMethods();
  }
}
