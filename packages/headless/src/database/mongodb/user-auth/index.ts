import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserEntity } from 'src/entity/user';
import {
  CreateUserDto,
  UserEntityResponse,
} from 'src/modules/user-auth/dto/user.dto';
import { IUserAuthDB } from 'src/modules/user-auth/repository/user.db.interface';
import { UserModel } from './user.model';

@Injectable()
export class UserAuthDB implements IUserAuthDB {
  async save(body: CreateUserDto): Promise<UserEntityResponse> {
    const isExist = await UserModel.findOne({ phone: body.phone });
    if (isExist) {
      throw new HttpException('User already exist.', HttpStatus.BAD_REQUEST);
    }
    const user = (await UserModel.create(body)).toJSON();
    delete user.password;
    return user;
  }

  async findOne(query: Record<string, string>): Promise<UserEntityResponse> {
    const doc = await UserModel.findOne(query).lean();
    if (!doc) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    delete doc.password;
    return doc;
  }

  async findOneForLogin(query: Record<string, string>): Promise<UserEntity> {
    const doc = await UserModel.findOne(query).lean();
    if (!doc) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return doc;
  }
}
