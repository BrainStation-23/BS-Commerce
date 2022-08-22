// import { CartService } from 'src/modules/cart/services';
import { Body, Controller, Get, Param, Post, Query, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { OrderEntity } from 'src/entity/order';
import { User } from 'src/entity/user';
import { RolesGuard } from 'src/guards/auth.guard';
import { User as UserInfo } from 'src/decorators/auth.decorator';
import { IServiceResponse } from 'src/utils/response/service.response.interface';
import { CreateOrderDto } from './dto/order.create.dto';
import { OrderCustomerService } from '../services/customer.service';
import { OrderSortQueryDto } from './dto/sortQuery.dto';
import { OrderListByUserIdResponseDto } from './dto/getOrderByUserId.dto';
import { OrderDto } from './dto/order.dto';
import { ReOrderDto } from './dto/reOrder.dto';


@ApiTags('Order - Customer API')
@UseGuards(new RolesGuard(['customer']))
@ApiBearerAuth()
@Controller('customer/order')
export class OrderCustomerController {
  constructor( private orderCustomerService: OrderCustomerService ) {}

  @ApiResponse({
    type: OrderDto,
    description: 'Create order response',
  })
  @Post()
  async createOrder(
    @UserInfo() user: User,
    @Body() body: CreateOrderDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<IServiceResponse<OrderDto>> {
    const { code, ...response } = await this.orderCustomerService.createOrder(
      user.id,
      body,
      body.products
    );
    res.status(code);
    
    return response;
  }

  @ApiResponse({
    type: OrderDto,
    description: 'Re Order Response',
  })
  @Post('/reOrder')
  async reOrder(
    @UserInfo() user: User,
    @Body() body: ReOrderDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<any> {
    const { code, ...response } = await this.orderCustomerService.reOrder(
      user.id,
      body
    );
    
    res.status(code);
    return response;
  }

  @ApiResponse({
    type: OrderListByUserIdResponseDto,
    description: 'Response of get-order-list-by-user-id',
  })
  @Get()
  async getOrderListByUserId(
    @UserInfo() user: User,
    @Query() sortObj: OrderSortQueryDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<IServiceResponse<OrderListByUserIdResponseDto>> {
    const { code, ...response } = await this.orderCustomerService.getOrderListByUserId(user.id, sortObj);

    res.status(code);
    return response;
  }

  @ApiResponse({
    type: OrderDto,
    description: 'Response of get-order-by-order-id',
  })
  @Get('/:orderId')
  async getOrderByOrderId(
    @Param('orderId') orderId: string,
    @Res({ passthrough: true }) res: Response,
  ): Promise<IServiceResponse<OrderDto>> {
    const { code, ...response } = await this.orderCustomerService.getOrderByOrderId(orderId);
  
    res.status(code);
    return response;
  }
  
}


