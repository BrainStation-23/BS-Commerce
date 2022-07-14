import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/entity/user';
import { User as UserInfo } from 'src/decorators/auth.decorator';
import { UseGuards } from '@nestjs/common';
import { ChangePasswordDto, UpdatedUserDto } from '../dto';
import { RolesGuard } from 'src/guards/auth.guard';
import { CustomerService } from '../services';

@UseGuards(new RolesGuard(['customer']))
@Resolver()
export class CUstomerResolver {
  constructor(private userService: CustomerService) { }

}