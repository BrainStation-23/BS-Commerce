import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Put, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CustomerService } from '../services';
import { User as UserInfo } from 'src/decorators/auth.decorator';
import { Response } from 'express';
import { RolesGuard } from 'src/guards/auth.guard';
import { Customer } from 'src/entity/customer';
import { AddCustomerNewAddressErrorResponseDto, AddCustomerNewAddressSuccessResponseDto, CustomerAddressDto, DeleteCustomerAddressErrorResponseDto, DeleteCustomerAddressParamsDto, DeleteCustomerAddressSuccessResponseDto, GetCustomerInformationErrorResponseDto, GetCustomerInformationSuccessResponseDto, UpdateCustomerAddressErrorResponseDto, UpdateCustomerAddressParamsDto, UpdateCustomerAddressSuccessResponseDto, UpdateCustomerDto, UpdateCustomerErrorResponseDto, UpdateCustomerSuccessResponseDto } from '../dto';

@Controller('customer')
@ApiTags('Customer Profile API')
@UseGuards(new RolesGuard(['customer']))
@ApiBearerAuth()
export class CustomerController {
  constructor(private customerService: CustomerService) { }

  @Get()
  @ApiResponse({
    description: 'Get Customer Success Response',
    type: GetCustomerInformationSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Get Customer Error Response',
    type: GetCustomerInformationErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async getCustomer(@UserInfo() customer: Customer, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.customerService.getCustomer(customer.id);
    res.status(code);
    return { code, ...response };
  }

  @Patch()
  @ApiResponse({
    description: 'Update Customer Success Response',
    type: UpdateCustomerSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Update Customer Error Response',
    type: UpdateCustomerErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async updateCustomer(@Body() data: UpdateCustomerDto, @UserInfo() customer: Customer, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.customerService.updateCustomer(customer.id, data);
    res.status(code);
    return { code, ...response };
  }

  @Put('/add-address')
  @ApiResponse({
    description: 'Add Customer New Address Success Response',
    type: AddCustomerNewAddressSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Add Customer New Address Error Response',
    type: AddCustomerNewAddressErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async addCustomerNewAddress(@Body() address: CustomerAddressDto, @UserInfo() customer: Customer, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.customerService.addCustomerNewAddress(customer.id, address);
    res.status(code);
    return { code, ...response };
  }

  @Patch('/update-address/:addressId')
  @ApiResponse({
    description: 'Update Customer Address Success Response',
    type: UpdateCustomerAddressSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Update Customer Address Error Response',
    type: UpdateCustomerAddressErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async updateCustomerAddress(@Param() params: UpdateCustomerAddressParamsDto, @Body() address: CustomerAddressDto, @UserInfo() customer: Customer, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.customerService.updateCustomerAddress(customer.id, params.addressId, address);
    res.status(code);
    return { code, ...response };
  }

  @Delete('/delete-address/:addressId')
  @ApiResponse({
    description: 'Delete Customer Address Success Response',
    type: DeleteCustomerAddressSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Delete Customer Address Error Response',
    type: DeleteCustomerAddressErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async deleteCustomerAddress(@Param() params: DeleteCustomerAddressParamsDto, @UserInfo() customer: Customer, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.customerService.deleteCustomerAddress(customer.id, params.addressId);
    res.status(code);
    return { code, ...response };
  }
}