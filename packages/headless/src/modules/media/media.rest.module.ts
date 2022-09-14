import { Module } from '@nestjs/common';
import { MediaController } from './rest';
import { MediaService } from './services';

@Module({
  controllers: [MediaController],
  providers: [MediaService],
})
export class MediaModule {}
