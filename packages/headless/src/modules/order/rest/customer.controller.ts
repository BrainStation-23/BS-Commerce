import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { User } from 'src/entity/user';
import { User as UserInfo } from 'src/modules/auth/decorator/auth.decorator';
import { JwtAuthGuard } from 'src/modules/auth/guards/auth.guard';
import { CreateOrderDto } from '../dto/order.create.dto';
import { OrderCustomerService } from '../services/customer.service';

@ApiTags('Order - Customer API')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller()
export class OrderCustomerController {
  constructor(private orderCustomerService: OrderCustomerService) {}

  @Post()
  async createOrder(
    @UserInfo() user: User,
    @Body() body: CreateOrderDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<any> {
    return await this.orderCustomerService.createOrder(user.id, body);
  }
}
