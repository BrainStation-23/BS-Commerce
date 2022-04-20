import { HttpStatus, Injectable } from '@nestjs/common';
import { HelperService } from 'src/helper/helper.service';
import { UserAuthRepository } from '../repository';

@Injectable()
export class UserProfileService {
  constructor(
    private userAuthRepo: UserAuthRepository,
    private helperService: HelperService,
  ) {}

  async getProfile(userId: string) {
    const doc = await this.userAuthRepo.findOne({ _id: userId });
    if (!doc) {
      return this.helperService.serviceResponse.errorResponse(
        'User not found.',
        null,
        HttpStatus.NOT_FOUND,
      );
    }
    return this.helperService.serviceResponse.successResponse(
      doc,
      HttpStatus.FOUND,
    );
  }
}
