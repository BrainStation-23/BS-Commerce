import { BadRequestException } from '@nestjs/common';
import { Scalar } from '@nestjs/graphql';
import { multerConfig } from 'config/multer';
import { ValueNode } from 'graphql';
const mimeTypes = ['image/png', 'image/jpeg', 'image/svg+xml',  'image/jpg', 'image/gif'];

@Scalar('Upload')
export class Upload {
    parseLiteral(file: ValueNode) {
        if (file.kind === 'ObjectValue') {
            const fileObject = file as any;
            if (
                typeof fileObject.filename === 'string' &&
                typeof fileObject.mimetype === 'string' &&
                typeof fileObject.encoding === 'string' &&
                typeof fileObject.createReadStream === 'function'
            )
                return Promise.resolve(fileObject);
        }
        return null;
    }

    async parseValue(value: any) {
        const upload = await value;

        if (!upload.file.mimetype) throw new BadRequestException('Mime type is unknown.');
        if (!mimeTypes.includes(upload.file.mimetype)) throw new BadRequestException(`Unsupported file format. Supports: ${multerConfig.fileExtensionRegex}.`);

        return upload;
    }

    serialize(value: any) {
        return value;
    }
}