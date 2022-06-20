import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CustomerAuthService } from '../services';
import {
  CreateCustomerDto,
  CreateCustomerErrorResponseDto,
  CreateCustomerSendOtpDto,
  CreateCustomerSendOtpErrorResponseDto,
  CreateCustomerSendOtpSuccessResponseDto,
  CreateCustomerSuccessResponseDto,
  CreateCustomerVerifyOtpDto,
  CreateCustomerVerifyOtpErrorResponseDto,
  CreateCustomerVerifyOtpSuccessResponseDto,
} from '../dto';

@Controller('customer/auth')
@ApiTags('Customer Authentication API')
export class CustomerAuthController {
  constructor(private authService: CustomerAuthService) { }

  @Post('register')
  @ApiResponse({
    description: 'Customer Register Success Response',
    type: CreateCustomerSuccessResponseDto,
    status: HttpStatus.CREATED
  })
  @ApiResponse({
    description: 'Customer Register Error Response',
    type: CreateCustomerErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async register(@Body() customer: CreateCustomerDto, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.authService.register(customer);
    res.status(code);
    return { code, ...response };
  }

  @Get()
  @ApiParam({name: 'params'})
  @ApiResponse({
    description: 'Get Customer Success Response',
    status: HttpStatus.CREATED
  })
  async getCustomer(@Param() params: CreateCustomerSendOtpDto, @Res({ passthrough: true }) res: Response) {
    console.log(params)
    const { code, ...response } = await this.authService.getCustomer(params);
    res.status(code);
    return { code, ...response };
  }

  @Post('send-otp')
  @ApiResponse({
    description: 'Customer Register Send OTP Success Response',
    type: CreateCustomerSendOtpSuccessResponseDto,
    status: HttpStatus.CREATED
  })
  @ApiResponse({
    description: 'Customer Register Send OTP Error Response',
    type: CreateCustomerSendOtpErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async sendOtp(@Body() data: CreateCustomerSendOtpDto, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.authService.sendOtp(data);
    res.status(code);
    return { code, ...response };
  }

  @Post('verify-otp')
  @ApiResponse({
    description: 'Customer Register Verify OTP Success Response',
    type: CreateCustomerVerifyOtpSuccessResponseDto,
    status: HttpStatus.CREATED
  })
  @ApiResponse({
    description: 'Customer Register Verify OTP Error Response',
    type: CreateCustomerVerifyOtpErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async verifyOtp(@Body() data: CreateCustomerVerifyOtpDto, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.authService.verifyOtp(data);
    res.status(code);
    return { code, ...response };
  }
}