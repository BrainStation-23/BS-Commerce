import { Module } from '@nestjs/common';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { MediaRepository } from './repositories';
import { IMediaDatabase } from './repositories/media.database.interface';
import { MediaController } from './rest';
import { MediaService } from './services';

@Module({
  controllers: [MediaController],
  providers: [
    MediaService,
    MediaRepository,
    // {
    //   provide: IMediaDatabase,
    //   useClass: ResolveDatabaseDependency('MEDIA'),
    // },
  ],
})
export class MediaModule { }
