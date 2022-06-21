import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Helper } from 'src/helper/helper.interface';

@Injectable()
export class MediaService {
  constructor(private helper: Helper) { }

  async upload(data: any): Promise<any> {
    
  }
}