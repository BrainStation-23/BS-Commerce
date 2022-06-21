import { Body, Controller, Get, HttpStatus, Param, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CustomerAuthService } from '../services';
import {
  CreateCustomerDto,
  CreateCustomerErrorResponseDto,
  CreateCustomerSuccessResponseDto,
  CustomerSignInDto,
  CustomerSignInErrorResponseDto,
  CustomerSignInSuccessResponseDto,
  GetCustomerErrorResponseDto,
  GetCustomerQueryDto,
  GetCustomerSuccessResponseDto,
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
}