import { Response } from 'express';
import { TagsService } from '../services';
import { CreateTagRequestBodyDto, GetTagParamsDto, UpdateTagParamDto, UpdateTagRequestDto } from './dto';
export declare class TagsController {
    private tagsService;
    constructor(tagsService: TagsService);
    getTags(res: Response): Promise<{
        data: import("@bs-commerce/models").Tag[];
        code: number;
    } | {
        error: import("@bs-commerce/models").GetTagsErrorMessages;
        errors: DescriptiveError;
        code: number;
    }>;
    getHomePageProductsTags(res: Response): Promise<{
        data: import("@bs-commerce/models").Tag[];
        code: number;
    } | {
        error: import("@bs-commerce/models").GetTagsErrorMessages;
        errors: DescriptiveError;
        code: number;
    }>;
    createTag(data: CreateTagRequestBodyDto, res: Response): Promise<{
        data: import("@bs-commerce/models").Tag;
        code: number;
    } | {
        error: import("@bs-commerce/models").CreateTagErrorMessages;
        errors: DescriptiveError;
        code: number;
    }>;
    getTag(params: GetTagParamsDto, res: Response): Promise<{
        data: import("@bs-commerce/models").Tag;
        code: number;
    } | {
        error: import("@bs-commerce/models").GetTagErrorMessages;
        errors: DescriptiveError;
        code: number;
    }>;
    updateTag(params: UpdateTagParamDto, data: UpdateTagRequestDto, res: Response): Promise<{
        data: import("@bs-commerce/models").Tag;
        code: number;
    } | {
        error: import("@bs-commerce/models").UpdateTagErrorMessages;
        errors: DescriptiveError;
        code: number;
    }>;
}
