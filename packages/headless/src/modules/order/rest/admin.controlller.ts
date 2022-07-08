import { Controller, Get, Param, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { OrderEntity } from 'src/entity/order';
import { RolesGuard } from 'src/guards/auth.guard';
import { OrderAdminService } from '../services/admin.service';

@ApiTags('Order - Admin API')
@UseGuards(new RolesGuard(['admin']))
@ApiBearerAuth()
@Controller('admin/order')
export class OrderAdminController {
  constructor(private orderAdminService: OrderAdminService) {}

    
    @Get('enums')
    async getOrderEnums(@Res({ passthrough: true }) res: Response):Promise<any>{
        const {code, ...response} =  await this.orderAdminService.getOrderEnums()
        res.status(code);
        return response;
    }

    @Get('statistics')
    async getOrderStatistics(@Res({ passthrough: true }) res: Response):Promise<any>{
        const {code, ...response} =  await this.orderAdminService.getOrderStatistics()
        res.status(code);
        return response;
    }

    @Get('incomplete/statistics')
    async getIncompleteStatistics(@Res({ passthrough: true }) res: Response):Promise<any>{
        const {code, ...response} =  await this.orderAdminService.getIncompleteStatistics()
        res.status(code);
        return response;
    }

    @ApiResponse({type: OrderEntity})
    @ApiParam({name: 'orderId', example:'84dab8b9-8461-4f2f-9863-b6934ed9cc27'})
    @Get(':orderId')
    async getOrderById(@Param('orderId') orderId: string, @Res({ passthrough: true }) res: Response): Promise<any>{
        const {code, ...response} = await this.orderAdminService.getOrderById(orderId);
        res.status(code);
        return response;
    }
  
}
