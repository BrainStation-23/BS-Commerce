import { Module } from '@nestjs/common';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { TagsController } from './rest';
import { TagsService } from './services';
import { TagsRepository } from './repositories';
import { ITagsDatabase } from './repositories/tags.database.interface';

@Module({
  controllers: [TagsController],
  providers: [
    TagsService,
    TagsRepository,
    {
      provide: ITagsDatabase,
      useClass: ResolveDatabaseDependency('TAGS'),
    },
  ],
})
export class TagsModule { }