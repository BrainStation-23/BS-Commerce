import { FileUpload } from 'graphql-upload';
import { HttpException } from '@nestjs/common';
export declare class MediaResolver {
    uploadFile(file: FileUpload): Promise<HttpException | {
        code: number;
        data: {
            url: string;
        };
    }>;
}
