import { Body, Controller, Get, HttpStatus, Patch, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CustomerService } from '../services';
import { User as UserInfo } from 'src/decorators/auth.decorator';
import { Response } from 'express';
import { RolesGuard } from 'src/guards/auth.guard';
import { Customer } from 'src/entity/customer';

@Controller('customer')
@ApiTags('Customer Profile API')
@UseGuards(new RolesGuard(['customer']))
@ApiBearerAuth()
export class CustomerController {
  constructor(private customerService: CustomerService) { }

  @Get()
  async getCustomer(@UserInfo() customer: Customer, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.customerService.getCustomer(customer.id);
    res.status(code);
    return { code, ...response };
  }

  @Patch()
  async updateCustomer(@Body() data: any, @UserInfo() customer: Customer, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.customerService.updateCustomer(customer.id, data);
    res.status(code);
    return { code, ...response };
  }
}