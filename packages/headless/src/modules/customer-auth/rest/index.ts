import { Body, Controller, Get, HttpStatus, Post, Query, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CustomerAuthService } from '../services';
import {
  CreateCustomerDto,
  CreateCustomerErrorResponseDto,
  CreateCustomerSuccessResponseDto,
  CustomerForgotPasswordDto,
  CustomerForgotPasswordErrorResponseDto,
  CustomerForgotPasswordSuccessResponseDto,
  CustomerSignInDto,
  CustomerSignInErrorResponseDto,
  CustomerSignInSuccessResponseDto,
  GetCustomerErrorResponseDto,
  GetCustomerQueryDto,
  GetCustomerSuccessResponseDto,
  SendCreateCustomerOtpDto,
  SendCreateCustomerOtpErrorResponseDto,
  SendCreateCustomerOtpSuccessResponseDto,
  VerifyCreateCustomerOtpDto,
  VerifyCreateCustomerOtpErrorResponseDto,
  VerifyCreateCustomerOtpSuccessResponseDto,
} from './dto';

@Controller('customer/auth')
@ApiTags('Customer Authentication API')
export class CustomerAuthController {
  constructor(private authService: CustomerAuthService) { }

  @Post('send-otp')
  @ApiResponse({
    description: 'Send Otp For Create Customer Success Response',
    type: SendCreateCustomerOtpSuccessResponseDto,
    status: HttpStatus.CREATED
  })
  @ApiResponse({
    description: 'Send Otp For Create Customer Error Response',
    type: SendCreateCustomerOtpErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async sendOtp(@Body() data: SendCreateCustomerOtpDto, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.authService.sendOtp(data);
    res.status(code);
    return { code, ...response };
  }

  @Post('verify-otp')
  @ApiResponse({
    description: 'Verify Otp For Create Customer Success Response',
    type: VerifyCreateCustomerOtpSuccessResponseDto,
    status: HttpStatus.CREATED
  })
  @ApiResponse({
    description: 'Verify Otp For Create Customer Error Response',
    type: VerifyCreateCustomerOtpErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async verifyOtp(@Body() data: VerifyCreateCustomerOtpDto, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.authService.verifyOtp(data);
    res.status(code);
    return { code, ...response };
  }

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

  @Post('sign-in')
  @ApiResponse({
    description: 'Customer Sign In Success Response',
    type: CustomerSignInSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Customer Sign In Error Response',
    type: CustomerSignInErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async signIn(@Body() data: CustomerSignInDto, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.authService.signIn(data);
    res.status(code);
    return { code, ...response };
  }

  @Get()
  @ApiResponse({
    description: 'Get Customer Success Response',
    type: GetCustomerSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Get Customer Error Response',
    type: GetCustomerErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async getCustomer(@Query() query: GetCustomerQueryDto, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.authService.getCustomer(query);
    res.status(code);
    return { code, ...response };
  }

  @Post('forgot')
  @ApiResponse({
    description: 'Forgot Password Success Response',
    type: CustomerForgotPasswordSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Forgot Password Error Response',
    type: CustomerForgotPasswordErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async forgotPassword(@Body() data: CustomerForgotPasswordDto, @Res({ passthrough: true }) res: Response, @Req() req: Request) {
    const url = req.protocol + '://' + req.headers.host;
    const { code, ...response } = await this.authService.forgotPassword(data, url);
    res.status(code);
    return { code, ...response };
  }
}