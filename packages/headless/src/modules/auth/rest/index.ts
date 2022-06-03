import { Body, Controller, HttpCode, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from '../services';
import { CreateUserDto, ErrorResponseDto, ForgotPasswordDto, SignInDataDto, UserDto } from '../dto/auth.dto';
import { CreateUserResponse } from 'models';
import { User } from 'src/entity/user';

@Controller('auth')
@ApiTags('User Authentication API')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('signup')
  @ApiResponse({ 
    description: 'New user Created APi',
    type: UserDto,
    status: HttpStatus.CREATED
  })
  @ApiResponse({ 
    description: 'Error Response',
    type: ErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async register(@Body() user: CreateUserDto, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.authService.signUp(user);
    res.status(code);
    return response;
  }

  @Post('signin')
  async signin(@Body() data: SignInDataDto, @Res({ passthrough: true }) res: Response,) {
    const { code, ...response }  = await this.authService.signIn(data);
    res.status(code);
    return response;
  }

  @Post('forgot')
  async forgotPassword(@Body() data: ForgotPasswordDto, @Res({ passthrough: true }) res: Response, @Req() req: Request) {
    const url = req.protocol + "://" + req.headers.host;
    const { code, ...response } = await this.authService.forgotPassword(data.username, url);
    res.status(code);
    return response;
  }
}