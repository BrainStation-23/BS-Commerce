import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { PERMISSIONS } from 'models';
import { AdminInfo } from 'src/decorators/adminInfo.decorator';
import { PermissionRequired } from 'src/decorators/permission.decorator';
import { StoreAdminInfo } from 'src/entity/store-admin';
import { AdminJwtAuthGuard } from 'src/guards/admin-jwt-auth.guard';
import { AdminRoleGuard } from 'src/guards/admin-role.guard';
import { RoleService } from '../services';
import { CreateRoleDto, UpdateRoleDto } from './dto/role.dto';

@ApiTags('Store Admin Role management')
@ApiBearerAuth()
@Controller('store-admin/role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @PermissionRequired(PERMISSIONS.CREATE_STORE_ADMIN_ROLE, PERMISSIONS.CREATE_ROLE)
  @UseGuards(AdminJwtAuthGuard, AdminRoleGuard)
  @Post('create')
  async create(
    @Body() body: CreateRoleDto,
    @AdminInfo() adminInfo: StoreAdminInfo,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.roleService.create(adminInfo, body);
    res.status(code);
    return { code, ...response };
  }

  @PermissionRequired(PERMISSIONS.EDIT_STORE_ADMIN_ROLE)
  @UseGuards(AdminJwtAuthGuard, AdminRoleGuard)
  @Put('update')
  async updateRole(
    @Body() body: UpdateRoleDto,
    @AdminInfo() adminInfo: StoreAdminInfo,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.roleService.updateRole(adminInfo, body);
    res.status(code);
    return { code, ...response };
  }

  @PermissionRequired(PERMISSIONS.VIEW_STORE_ADMIN_ALL_ROLE)
  @UseGuards(AdminJwtAuthGuard, AdminRoleGuard)
  @Get('all')
  async findAll(@AdminInfo() adminInfo: StoreAdminInfo, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.roleService.findAll(adminInfo);
    res.status(code);
    return { code, ...response };
  }

  @PermissionRequired(PERMISSIONS.VIEW_STORE_ADMIN_SINGLE_ROLE)
  @UseGuards(AdminJwtAuthGuard, AdminRoleGuard)
  @Get('id/:id')
  async findOne(
    @Param('id') id: string,
    @AdminInfo() adminInfo: StoreAdminInfo,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.roleService.findOne(adminInfo, id);
    res.status(code);
    return { code, ...response };
  }

  @PermissionRequired(PERMISSIONS.VIEW_OWN_ROLE)
  @UseGuards(AdminJwtAuthGuard, AdminRoleGuard)
  @Get('my-role')
  async findMyRole(
    @AdminInfo() adminInfo: StoreAdminInfo,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.roleService.findOne(adminInfo);
    res.status(code);
    return { code, ...response };
  }
}
