import { Body, Controller, Get, Param, Post, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { OrderEntity } from 'src/entity/order';
import { User } from 'src/entity/user';
import { RolesGuard } from 'src/guards/auth.guard';
import { User as UserInfo } from 'src/decorators/auth.decorator';
import { IServiceResponse } from 'src/utils/response/service.response.interface';
import { CreateOrderDto } from './dto/order.create.dto';
import { OrderData, OrderResponseDto } from './dto/order.response.dto';
import { OrderCustomerService } from '../services/customer.service';


@ApiTags('Order - Customer API')
@UseGuards(new RolesGuard(['customer']))
@ApiBearerAuth()
@Controller('customer/order')
export class OrderCustomerController {
  constructor(private orderCustomerService: OrderCustomerService) {}

  @ApiResponse({
    type: OrderData,
    description: 'Create order response',
  })
  @Post()
  async createOrder(
    @UserInfo() user: User,
    @Body() body: CreateOrderDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<IServiceResponse<OrderEntity>> {
    const { code, ...response } = await this.orderCustomerService.createOrder(
      user.id,
      body,
      body.products
    );
    res.status(code);
    
    return response;
  }

  @ApiResponse({
    type: OrderResponseDto,
    description: 'Response of get-order-list-by-user-id',
  })
  @Get()
  async getOrderListByUserId(
    @UserInfo() user: User,
    @Res({ passthrough: true }) res: Response,
  ): Promise<IServiceResponse<OrderResponseDto>> {
    const { code, ...response } =
      await this.orderCustomerService.getOrderListByUserId(user.id);

    res.status(code);
    return response;
  }

  @ApiResponse({
    type: OrderData,
    description: 'Response of get-order-by-order-id',
  })
  @Get('/:orderId')
  async getOrderByOrderId(
    @Param('orderId') orderId: string,
    @Res({ passthrough: true }) res: Response,
  ): Promise<IServiceResponse<OrderData>> {
    const { code, ...response } = await this.orderCustomerService.getOrderByOrderId(orderId);

    res.status(code);
    return response;
  }
  
}


