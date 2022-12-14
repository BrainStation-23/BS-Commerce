import { Module } from '@nestjs/common';
import { ResolveDatabaseDependency } from '../../database/database.resolver';
import { TagsService } from './services';
import { TagsRepository } from './repositories';
import { ITagsDatabase } from './repositories/tags.database.interface';
import { TagsResolver } from './graphql/tags.resolver';

@Module({
  controllers: [],
  providers: [
    TagsResolver,
    TagsService,
    TagsRepository,
    {
      provide: ITagsDatabase,
      useClass: ResolveDatabaseDependency('TAGS'),
    },
  ],
})
export class TagsModule {}
