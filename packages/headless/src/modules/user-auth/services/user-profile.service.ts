import { Injectable } from '@nestjs/common';
import { UserAuthRepository } from '../repository';

@Injectable()
export class UserProfileService {
  constructor(private userAuthRepo: UserAuthRepository) {}

  async getProfile(userId: string) {
    return await this.userAuthRepo.findOne({ _id: userId });
  }
}
