import { UploadFileResponse } from '@bs-commerce/models';
import { Helper } from '../../../helper/helper.interface';
export declare class MediaService {
    private helper;
    constructor(helper: Helper);
    upload(req: any): Promise<UploadFileResponse>;
}
