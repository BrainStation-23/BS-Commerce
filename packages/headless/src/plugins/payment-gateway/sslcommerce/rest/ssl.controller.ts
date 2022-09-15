import { SSLPaymentGatewayService } from './../service/index';
import { Body, Controller, Get, Post, Redirect, Res } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Response } from 'express';



@ApiTags('Gateway API')
@Controller('/sslEcommerce')
export class SSLPaymentGatewayController {
    constructor(private sslService: SSLPaymentGatewayService) {}

    @Get('create-session')
    async sslInitiate(@Res({ passthrough: true }) res: Response){
        const result = await this.sslService.paymentInitiate();
        return result;
        // res.redirect(result)
    }
    
    @Post('success-payment')
    async successHandler(@Body() body: any){
        return this.sslService.successHandler(body);
    }

    @Post('cancel-payment')
    async cancelURL(@Body() body: any){
        return this.sslService.cancelHandler(body);
    }

    @Post('failure-payment')
    async failureURL(@Body() body: any){
        return this.sslService.failureHandler(body);
    }

    @Post('notification')
    async ipnURL(@Body() body: any){
        return this.sslService.notificationHandler(body);
    }

 }
    