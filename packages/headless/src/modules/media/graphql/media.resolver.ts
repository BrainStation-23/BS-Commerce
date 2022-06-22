import { MediaService } from '../services';
import { Args, Context, GqlExecutionContext, Mutation, Resolver } from '@nestjs/graphql';
import { UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from '../config/storage.config';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import { createWriteStream, existsSync, mkdirSync, unlink } from 'fs';
import { FileUpload } from 'graphql-upload';
import path from 'path';
import os from 'os'
import { multerConfig } from 'config/multer';
import { URL } from 'url';

@Resolver()
export class MediaResolver {
  constructor(private mediaService: MediaService) { }

  @Mutation()
  async uploadFile(@Args({ name: 'file', type: () => GraphQLUpload }) fileUpload: any,@Context() context: any) {
    const file = (await fileUpload.promise) as FileUpload;
    const { createReadStream, filename } = file;
    const uploadPath = `${multerConfig.dest}/${new Date().getFullYear()}/${new Date().getMonth()}/${new Date().getDate()}`;
    // Create folder if doesn't exist
    if (!existsSync(uploadPath)) {
      mkdirSync(uploadPath, { recursive: true });
    }

    const url = await new Promise((res, rej) =>
      createReadStream()
        .pipe(createWriteStream(`${uploadPath}/${filename}`))
        .on('error', rej)
        .on('finish', () => {
          // Delete the tmp file uploaded
          unlink(uploadPath, () => {
            res(`${uploadPath}/${filename}`)
          })
        })
    )
    return {
      url
    }
  }
}
