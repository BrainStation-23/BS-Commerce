import { JwtAuthGuard } from 'src/modules/auth/guards/auth.guard';
import { Manufacturer } from 'src/entity/manufacturer';
import { ManufacturerService } from './../services/manufacturer.service';
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Put,
    Query,
    Req,
    Res,
    UseGuards,
} from '@nestjs/common';
import { Response } from 'express';

@UseGuards(JwtAuthGuard)
@Controller('manufacturers')
export class ManufacturerController {
    constructor(
        private manufacturerService: ManufacturerService
    ) { }

    @Post('/create')
    async addManufacturer(@Body() manufacturer: Manufacturer, @Res({ passthrough: true }) res: Response) {
        const { code, ...response } = await this.manufacturerService.createManufacturer(manufacturer);
        res.status(code);
        return response;
    }

    @Get('/:manufacturerId')
    async getSingleManufacturer(@Param('manufacturerId') manufacturerId: string, @Res({ passthrough: true }) res: Response) {
        const { code, ...response } = await this.manufacturerService.getManufacturer(manufacturerId);
        res.status(code);
        return response;
    }

    @Get('/')
    async getAllManufacturers(@Query('skip') skip: number, @Query('limit') limit: number, @Res({ passthrough: true }) res: Response) {
        const { code, ...response } = await this.manufacturerService.getAllManufacturers(skip, limit);
        res.status(code);
        return response;
    }

    @Patch('/:manufacturerId')
    async updateManufacturer(@Param('manufacturerId') manufacturerId: string, @Body() manufacturer: Manufacturer, @Res({ passthrough: true }) res: Response) {
        const { code, ...response } = await this.manufacturerService.updateManufacturer(manufacturerId, manufacturer);
        res.status(code);
        return response;
    }

    @Delete('/:manufacturerId')
    async deleteManufacturer(@Param('manufacturerId') manufacturerId: string, @Res({ passthrough: true }) res: Response) {
        const { code, ...response } = await this.manufacturerService.deleteManufacturer(manufacturerId);
        res.status(code);
        return response;
    }
}
