import { Injectable } from '@nestjs/common';
import { UserEntityResponse } from '../dto/user.dto';
import { UserAuthRepository } from '../repository';

@Injectable()
export class UserProfileService {
  constructor(private userAuthRepo: UserAuthRepository) {}

  async getProfile(userId: string): Promise<UserEntityResponse> {
    return await this.userAuthRepo.findOne({ _id: userId });
  }
}
