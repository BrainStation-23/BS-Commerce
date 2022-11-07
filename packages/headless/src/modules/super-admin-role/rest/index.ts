import {
  Body,
  Controller,
  Get,
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
import { AdminJwtAuthGuard } from 'src/guards/admin-jwt-auth.guard';
import { AdminRoleGuard } from 'src/guards/admin-role.guard';
import { RoleService } from '../services';
import { CreateRoleDto, UpdateRoleDto } from './dto/role.dto';

@ApiTags('Super Admin Role management')
@ApiBearerAuth()
@Controller('super-admin/role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @PermissionRequired(PERMISSIONS.CREATE_ROLE)
  @UseGuards(AdminJwtAuthGuard, AdminRoleGuard)
  @Post('create')
  async create(
    @Body() body: CreateRoleDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.roleService.create(body);
    res.status(code);
    return { code, ...response };
  }

  @PermissionRequired(PERMISSIONS.EDIT_ROLE)
  @UseGuards(AdminJwtAuthGuard, AdminRoleGuard)
  @Put('update')
  async updateRole(
    @Body() body: UpdateRoleDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.roleService.updateRole(body);
    res.status(code);
    return { code, ...response };
  }

  @PermissionRequired(PERMISSIONS.VIEW_ALL_ROLE)
  @UseGuards(AdminJwtAuthGuard, AdminRoleGuard)
  @Get('all')
  async findAll(@Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.roleService.findAll();
    res.status(code);
    return { code, ...response };
  }

  @PermissionRequired(PERMISSIONS.VIEW_OWN_ROLE)
  @UseGuards(AdminJwtAuthGuard, AdminRoleGuard)
  @Get()
  async findOne(
    @AdminInfo() adminInfo: any,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.roleService.findOne({
      name: adminInfo.role,
    });
    res.status(code);
    return { code, ...response };
  }
}
