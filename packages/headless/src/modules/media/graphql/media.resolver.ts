import { Args, Mutation, Resolver } from '@nestjs/graphql';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import { createWriteStream, existsSync, mkdirSync, unlink } from 'fs';
import { FileUpload } from 'graphql-upload';
import { multerConfig } from 'config/multer';
import { coreConfig } from 'config/core';
import { UploadFileResponse } from './media.model';
import { HttpException, HttpStatus } from '@nestjs/common';
import { UploadFileErrorMessages } from 'bs-commerce-models';

@Resolver()
export class MediaResolver {

  @Mutation(() => UploadFileResponse)
  async uploadFile(@Args({ name: 'file', type: () => GraphQLUpload }) file: FileUpload,) {
    const { filename, mimetype, createReadStream } = file;

    if (!multerConfig.mimeTypes.includes(mimetype)) {
      return new HttpException(UploadFileErrorMessages.UNSUPPORTED_MIMETYPE, HttpStatus.BAD_REQUEST)
    }

    const uploadPath = `${multerConfig.dest}/${new Date().getFullYear()}/${new Date().getMonth()}/${new Date().getDate()}`;

    try {
      // Create folder if doesn't exist
      if (!existsSync(uploadPath)) {
        mkdirSync(uploadPath, { recursive: true });
      }

      const url = await new Promise((resolve, reject) =>
        createReadStream()
          .pipe(createWriteStream(`${uploadPath}/${filename}`))
          .on('error', reject)
          .on('finish', () => {
            unlink(uploadPath, () => {
              resolve(`${uploadPath}/${filename}`);
            })
          })
      );

      return url && {
        code: 200,
        data: {
          url: `${coreConfig.baseUrl}/${url}`
        }
      }
    } catch (error) {
      return new HttpException('INTERNAL_SERVER_ERROR', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
