import {
    Controller,
    Post,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('category')
export class CategoryController {

    @Post()
    @UseInterceptors(
        FileInterceptor('image'),
    )
    async uploadedFile(@UploadedFile() file) {
        console.log('hello');
        const response = {
            originalname: file.originalname,
            filename: file.filename,
        };
        return response;
    }
}
