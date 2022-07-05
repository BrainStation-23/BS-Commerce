import { Body, Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from '../services';
import {
  CreateUserDto,
  CreateUserErrorResponseDto,
  CreateUserSuccessResponseDto,
  SignInDataDto,
  ForgotPasswordDto,
  ForgotPasswordErrorResponseDto,
  ForgotPasswordSuccessResponseDto,
  SignInSuccessResponseDto,
  SignInErrorResponseDto
} from '../dto';

@Controller('admin/auth')
@ApiTags('Admin Authentication API')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('signup')
  @ApiResponse({
    description: 'Admin Sign Up Success Response',
    type: CreateUserSuccessResponseDto,
    status: HttpStatus.CREATED
  })
  @ApiResponse({
    description: 'Admin Sign Up Error Response',
    type: CreateUserErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async register(@Body() user: CreateUserDto, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.authService.signUp(user);
    res.status(code);
    return { code, ...response };
  }

  @Post('signin')
  @ApiResponse({
    description: 'Admin Sign In Success Response',
    type: SignInSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Admin Sign In Error Response',
    type: SignInErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async signin(@Body() data: SignInDataDto, @Res({ passthrough: true }) res: Response,) {
    const { code, ...response } = await this.authService.signIn(data);
    res.status(code);
    return { code, ...response };
  }

  @Post('forgot-password')
  @ApiResponse({
    description: 'Admin Forgot Password Success Response',
    type: ForgotPasswordSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Admin Forgot Password Error Response',
    type: ForgotPasswordErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async forgotPassword(@Body() data: ForgotPasswordDto, @Res({ passthrough: true }) res: Response, @Req() req: Request) {
    const url = req.protocol + '://' + req.headers.host;
    const { code, ...response } = await this.authService.forgotPassword(data.username, url);
    res.status(code);
    return { code, ...response };
  }
}