import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Put, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CustomerService } from '../services';
import { User as CustomerInfo } from 'src/decorators/auth.decorator';
import { Response } from 'express';
import { RolesGuard } from 'src/guards/auth.guard';
import { Customer } from 'src/entity/customer';
import {
  AddCustomerNewAddressErrorResponseDto,
  AddCustomerNewAddressSuccessResponseDto,
  CustomerAddressDto,
  CustomerChangePasswordDto,
  CustomerChangePasswordErrorResponseDto,
  CustomerChangePasswordSuccessResponseDto,
  DeleteCustomerAddressErrorResponseDto,
  DeleteCustomerAddressParamsDto,
  DeleteCustomerAddressSuccessResponseDto,
  GetCustomerInformationErrorResponseDto,
  GetCustomerInformationSuccessResponseDto,
  SendOtpDto,
  SendOtpErrorResponseDto,
  SendOtpSuccessResponseDto,
  UpdateCustomerAddressErrorResponseDto,
  UpdateCustomerAddressParamsDto,
  UpdateCustomerAddressSuccessResponseDto,
  UpdateCustomerDto,
  UpdateCustomerErrorResponseDto,
  UpdateCustomerSuccessResponseDto
} from './dto';

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
  async getCustomer(@CustomerInfo() customer: Customer, @Res({ passthrough: true }) res: Response) {
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
  async updateCustomer(@Body() data: UpdateCustomerDto, @CustomerInfo() customer: Customer, @Res({ passthrough: true }) res: Response) {
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
  async addCustomerNewAddress(@Body() address: CustomerAddressDto, @CustomerInfo() customer: Customer, @Res({ passthrough: true }) res: Response) {
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
  async updateCustomerAddress(@Param() params: UpdateCustomerAddressParamsDto, @Body() address: CustomerAddressDto, @CustomerInfo() customer: Customer, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.customerService.updateCustomerAddress(customer.id, params.addressId, { ...address, id: params.addressId });
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
  async deleteCustomerAddress(@Param() params: DeleteCustomerAddressParamsDto, @CustomerInfo() customer: Customer, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.customerService.deleteCustomerAddress(customer.id, params.addressId);
    res.status(code);
    return { code, ...response };
  }

  @Patch('/change-password/send-otp')
  @ApiResponse({
    description: 'Change Password Send OTP Success Response',
    type: SendOtpSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Change Password Send OTP Error Response',
    type: SendOtpErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async changePasswordSendOTP(@Body() data: SendOtpDto, @CustomerInfo() customer: Customer, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.customerService.changePasswordSendOTP(customer.id, data);
    res.status(code);
    return { code, ...response };
  }

  @Patch('/change-password')
  @ApiResponse({
    description: 'Change Password Success Response',
    type: CustomerChangePasswordSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Change Password Error Response',
    type: CustomerChangePasswordErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async changePassword(@Body() data: CustomerChangePasswordDto, @CustomerInfo() customer: Customer, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.customerService.changePassword(customer.id, data);
    res.status(code);
    return { code, ...response };
  }
}