import { Module } from '@nestjs/common';
import { Upload } from './decorators/scalar.datatype';
import { MediaResolver } from './graphql/media.resolver';
import { MediaService } from './services';

@Module({
  imports: [Upload],
  controllers: [],
  providers: [MediaResolver, MediaService],
})
export class MediaModule {}
