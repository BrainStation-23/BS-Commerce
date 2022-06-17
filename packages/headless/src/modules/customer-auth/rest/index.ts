import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CustomerAuthService } from '../services';
import {
  CreateCustomerDto,
  CreateCustomerErrorResponseDto,
  CreateCustomerSendOtpDto,
  CreateCustomerSendOtpErrorResponseDto,
  CreateCustomerSendOtpSuccessResponseDto,
  CreateCustomerSuccessResponseDto,
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
}