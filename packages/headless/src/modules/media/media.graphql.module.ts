import { Module } from '@nestjs/common';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { MediaResolver } from './graphql/media.resolver';
import { MediaRepository } from './repositories';
import { IMediaDatabase } from './repositories/media.database.interface';
import { MediaService } from './services';

@Module({
  controllers: [],
  providers: [
    MediaResolver,
    MediaService,
    MediaRepository,
    // {
    //   provide: IMediaDatabase,
    //   useClass: ResolveDatabaseDependency('MEDIA'),
    // },
  ],
})
export class MediaModule { }
