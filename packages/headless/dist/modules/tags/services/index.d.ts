import { Helper } from '../../../helper/helper.interface';
import { TagsRepository } from '../repositories';
import { Tag, UpdateTagRequest } from '../../../entity/tags';
import { GetTagsResponse, CreateTagResponse, GetTagResponse, UpdateTagResponse } from '@bs-commerce/models';
export declare class TagsService {
    private tagsRepo;
    private helper;
    constructor(tagsRepo: TagsRepository, helper: Helper);
    getTags(): Promise<GetTagsResponse>;
    getTag(tagsId: string): Promise<GetTagResponse>;
    createTag(data: Tag): Promise<CreateTagResponse>;
    getHomePageProductsTags(): Promise<GetTagsResponse>;
    updateTag(tagId: string, data: UpdateTagRequest): Promise<UpdateTagResponse>;
}
