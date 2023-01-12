import { ITagsDatabase } from '../../../modules/tags/repositories/tags.database.interface';
import { Tag, UpdateTagRequest } from '../../../entity/tags';
export declare class TagsDatabase implements ITagsDatabase {
    getTags(query: Record<string, any>): Promise<Tag[] | []>;
    getTag(query: Record<string, any>): Promise<Tag | null>;
    createTag(data: Tag): Promise<Tag | null>;
    updateTag(query: Record<string, any>, data: UpdateTagRequest): Promise<Tag | null>;
}
