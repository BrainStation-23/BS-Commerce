import { AllOrderResponseDto } from './../dto/allOrderList.dto';
import { Body, Controller, Get, Param, Patch, Post, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { RolesGuard } from 'src/guards/auth.guard';
import { IServiceResponse } from 'src/utils/response/service.response.interface';
import { ChangeStatusDto, OrderIncompleteStatDto, OrderStatDto, OrderStatusEnumDto } from '../dto/admin.response.dto';
import { OrderData } from '../dto/order.response.dto';
import { OrderAdminService } from '../services/admin.service';

@ApiTags('Order - Admin API')
@UseGuards(new RolesGuard(['admin']))
@ApiBearerAuth()
@Controller('admin/order')
export class OrderAdminController {
  constructor(private orderAdminService: OrderAdminService) {}

    @ApiResponse({type: OrderStatusEnumDto, description: "Order status, payment, shipment status enums"})
    @Get('enums')
    async getOrderEnums(@Res({ passthrough: true }) res: Response):Promise<IServiceResponse<OrderStatusEnumDto>>{
        const {code, ...response} =  await this.orderAdminService.getOrderEnums()
        res.status(code);
        return response;
    }

    @ApiResponse({type: OrderStatDto, description: "Order statistics"})
    @Get('statistics')
    async getOrderStatistics(@Res({ passthrough: true }) res: Response):Promise<IServiceResponse<OrderStatDto>>{
        const {code, ...response} =  await this.orderAdminService.getOrderStatistics()
        res.status(code);
        return response;
    }

    @ApiResponse({type: OrderIncompleteStatDto, description: "Order incomplete statistics"})
    @Get('incomplete/statistics')
    async getIncompleteStatistics(@Res({ passthrough: true }) res: Response):Promise<IServiceResponse<OrderIncompleteStatDto>>{
        const {code, ...response} =  await this.orderAdminService.getIncompleteStatistics()
        res.status(code);
        return response;
    }

    @ApiResponse({type: AllOrderResponseDto, description:"All Orders"})
    @Get('orderList')
    async getOrderList(@Res({ passthrough: true }) res: Response){
        const {code, ...response} = await this.orderAdminService.getOrderList();
        res.status(code);
        return response;
    }

    @ApiResponse({type: OrderData, description:"Order details by order id"})
    @ApiParam({name: 'orderId', example:'84dab8b9-8461-4f2f-9863-b6934ed9cc27'})
    @Get(':orderId')
    async getOrderById(@Param('orderId') orderId: string, @Res({ passthrough: true }) res: Response): Promise<IServiceResponse<OrderData>>{
        const {code, ...response} = await this.orderAdminService.getOrderById(orderId);
        res.status(code);
        return response;
    }

    @ApiBody({type: ChangeStatusDto}) 
    @Patch('change-status')
    async changeStatus(@Body() body: ChangeStatusDto, @Res({ passthrough: true }) res: Response): Promise<any>{
        const {code, ...response} = await this.orderAdminService.changeStatus( body);
        res.status(code);
        return response;
    }
  
   
}
