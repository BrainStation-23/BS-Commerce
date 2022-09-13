import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CustomerAuthService } from '../services';
import {
  CreateCustomerDto,
  CreateCustomerErrorResponseDto,
  CreateCustomerSuccessResponseDto,
  CustomerForgotPasswordDto,
  CustomerForgotPasswordErrorResponseDto,
  CustomerForgotPasswordSuccessResponseDto,
  CustomerLogoutSuccessResponseDto,
  CustomerSignInDto,
  CustomerSignInErrorResponseDto,
  CustomerSignInSuccessResponseDto,
  GetCustomerErrorResponseDto,
  GetCustomerQueryDto,
  GetCustomerSuccessResponseDto,
  SendOtpDto,
  SendOtpErrorResponseDto,
  SendOtpSuccessResponseDto,
  VerifyOtpDto,
  VerifyOtpErrorResponseDto,
  VerifyOtpSuccessResponseDto,
} from './dto';
import { authConfig } from 'config/auth';
import { coreConfig } from 'config/core';

@Controller('customer/auth')
@ApiTags('Customer Authentication API')
export class CustomerAuthController {
  constructor(private authService: CustomerAuthService) {}

  @Post('register/send-otp')
  @ApiResponse({
    description: 'Send Otp For Create Customer Success Response',
    type: SendOtpSuccessResponseDto,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: 'Send Otp For Create Customer Error Response',
    type: SendOtpErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  async sendOtp(
    @Body() data: SendOtpDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.authService.registerSendOTP(data);
    res.status(code);
    return { code, ...response };
  }

  @Post('register')
  @ApiResponse({
    description: 'Customer Register Success Response',
    type: CreateCustomerSuccessResponseDto,
    status: HttpStatus.CREATED,
  })
  @ApiResponse({
    description: 'Customer Register Error Response',
    type: CreateCustomerErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  async register(
    @Body() customer: CreateCustomerDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.authService.register(customer);
    res.status(code);
    return { code, ...response };
  }

  @Post('sign-in')
  @ApiResponse({
    description: 'Customer Sign In Success Response',
    type: CustomerSignInSuccessResponseDto,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: 'Customer Sign In Error Response',
    type: CustomerSignInErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  async signIn(
    @Body() data: CustomerSignInDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response }: any = await this.authService.signIn(data);
    res.status(code);
    res.cookie('jwt', `Bearer ${response.data.token}`, {
      httpOnly: true,
      maxAge: authConfig.cookiesMaxAge,
      secure: coreConfig.env === 'production',
      sameSite: 'none',
      path: '/',
    });
    return { code, ...response };
  }

  @Delete('logout')
  @ApiResponse({
    description: 'Customer Logout Success Response',
    type: CustomerLogoutSuccessResponseDto,
    status: HttpStatus.OK,
  })
  async logout(@Res({ passthrough: true }) res: Response) {
    res.status(200).clearCookie('jwt', {
      path: '/',
    });
    return {
      code: 200,
      data: { message: 'Logout Successful' },
    };
  }

  @Get()
  @ApiResponse({
    description: 'Get Customer Success Response',
    type: GetCustomerSuccessResponseDto,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: 'Get Customer Error Response',
    type: GetCustomerErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  async getCustomer(
    @Query() query: GetCustomerQueryDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.authService.getCustomer(query);
    res.status(code);
    return { code, ...response };
  }

  @Post('forgot-password/send-otp')
  @ApiResponse({
    description: 'Send Otp For Forgot Password Success Response',
    type: SendOtpSuccessResponseDto,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: 'Send Otp For Forgot Password Error Response',
    type: SendOtpErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  async forgotPasswordSendOTP(
    @Body() data: SendOtpDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.authService.forgotPasswordSendOTP(
      data,
    );
    res.status(code);
    return { code, ...response };
  }

  @Post('forgot-password/verify-otp')
  @ApiResponse({
    description: 'Verify Otp For Forgot Password Success Response',
    type: VerifyOtpSuccessResponseDto,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: 'Verify Otp For Forgot Password Error Response',
    type: VerifyOtpErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  async forgotPasswordVerifyOtp(
    @Body() data: VerifyOtpDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } =
      await this.authService.forgotPasswordVerifyOTP(data);
    res.status(code);
    return { code, ...response };
  }

  @Post('forgot-password')
  @ApiResponse({
    description: 'Forgot Password Success Response',
    type: CustomerForgotPasswordSuccessResponseDto,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: 'Forgot Password Error Response',
    type: CustomerForgotPasswordErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  async forgotPassword(
    @Body() data: CustomerForgotPasswordDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.authService.forgotPassword(data);
    res.status(code);
    return { code, ...response };
  }
}
