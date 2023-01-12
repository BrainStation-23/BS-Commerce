import { Response, Request } from 'express';
import { MediaService } from '../services';
export declare class MediaController {
    private mediaService;
    constructor(mediaService: MediaService);
    upload(res: Response, req: Request): Promise<{
        data: import("@bs-commerce/models").File;
        code: number;
    } | {
        error: import("@bs-commerce/models").UploadFileErrorMessages;
        errors: DescriptiveError;
        code: number;
    }>;
}
