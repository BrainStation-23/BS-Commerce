import { Body, Controller, Get, Param, Post, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { PERMISSIONS } from 'models';
import { PermissionRequired } from 'src/decorators/permission.decorator';
import { AdminJwtAuthGuard } from 'src/guards/admin-jwt-auth.guard';
import { AdminRoleGuard } from 'src/guards/admin-role.guard';
import { RoleService } from '../services';
import { CreateRoleDto } from './dto/role.dto';

@ApiTags('Role management')
@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post('create')
  async create(
    @Body() body: CreateRoleDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.roleService.create(body);
    res.status(code);
    return { code, ...response };
  }

  @PermissionRequired(PERMISSIONS.ASSIGN_ROLE)
  @ApiBearerAuth()
  @UseGuards(AdminJwtAuthGuard, AdminRoleGuard)
  @Get('all')
  async findAll(@Res({ passthrough: true }) res: Response,){
    const { code, ...response } = await this.roleService.findAll();
    res.status(code);
    return { code, ...response };
  }

  @PermissionRequired(PERMISSIONS.VIEW_ROLE)
  @ApiBearerAuth()
  @UseGuards(AdminJwtAuthGuard, AdminRoleGuard)
  @Get(':id')
  async findOne(@Param('id') id:string, @Res({ passthrough: true }) res: Response,){
    const { code, ...response } = await this.roleService.findOne({id});
    res.status(code);
    return { code, ...response };
  }
}
