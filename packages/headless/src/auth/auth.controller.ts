import { Body, Controller, Get, HttpCode, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { ExistingUserDTO } from 'src/user/dtos/existing-user.dto';

import { NewUserDTO } from 'src/user/dtos/new-user.dto';
import { UserDetails } from 'src/user/user-details.interface';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('register')
    register(@Body() user: NewUserDTO): Promise<UserDetails | null> {
        return this.authService.register(user);
    }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    login(@Body() user: ExistingUserDTO, @Res({passthrough: true}) response: Response): Promise<{ token: string } | null> {
        return this.authService.login(user, response);
    }

    @Get('logout')
    logout(@Res({passthrough: true}) response: Response): Promise<{} | null> {
        return this.authService.logout(response);
    }
}
