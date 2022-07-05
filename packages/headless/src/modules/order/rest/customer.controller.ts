import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { Customer } from 'src/entity/customer';
import { OrderEntity } from 'src/entity/order';
import { IServiceResponse } from 'src/utils/response/service.response.interface';
import { CreateOrderDto } from '../dto/order.create.dto';
import { OrderResponseDto } from '../dto/order.response.dto';
import { OrderCustomerService } from '../services/customer.service';
import { User as UserInfo } from 'src/decorators/auth.decorator';

@ApiTags('Order - Customer API')
@ApiBearerAuth()
@Controller('auth/order')
export class OrderCustomerController {
  constructor(private orderCustomerService: OrderCustomerService) { }

  @ApiResponse({
    type: OrderEntity,
    description: 'Create order',
  })
  @Post()
  async createOrder(
    @UserInfo() user: Customer,
    @Body() body: CreateOrderDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<IServiceResponse<OrderEntity>> {
    const { code, ...response } = await this.orderCustomerService.createOrder(
      user.id,
      body,
    );
    res.status(code);
    return response;
  }

  @ApiResponse({
    type: OrderResponseDto,
    description: 'Get order list by user id',
  })
  @Get()
  async getOrderListByUserId(
    @UserInfo() user: Customer,
    @Res({ passthrough: true }) res: Response,
  ): Promise<IServiceResponse<OrderResponseDto>> {
    const { code, ...response } =
      await this.orderCustomerService.getOrderListByUserId(user.id);

    res.status(code);
    return response;
  }
}
