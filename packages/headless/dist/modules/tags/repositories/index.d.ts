import { Tag, UpdateTagRequest } from '../../../entity/tags';
import { ITagsDatabase } from './tags.database.interface';
export declare class TagsRepository {
    private readonly db;
    constructor(db: ITagsDatabase);
    getTags(query: Record<string, any>): Promise<Tag[]>;
    getTag(query: Record<string, any>): Promise<Tag | null>;
    createTag(data: Tag): Promise<Tag | null>;
    updateTag(query: Record<string, any>, data: UpdateTagRequest): Promise<Tag | null>;
}
