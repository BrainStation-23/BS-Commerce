
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import { createWriteStream, existsSync, mkdirSync, unlink } from 'fs';
import { FileUpload } from 'graphql-upload';
import { multerConfig } from 'config/multer';
import { coreConfig } from 'config/core';

@Resolver()
export class MediaResolver {

  @Mutation()
  async uploadFile(@Args({ name: 'file', type: () => GraphQLUpload }) fileUpload: any,) {
    const file = (await fileUpload.promise) as FileUpload;
    const { createReadStream, filename } = file;
    const uploadPath = `${multerConfig.dest}/${new Date().getFullYear()}/${new Date().getMonth()}/${new Date().getDate()}`;

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

    return {
      url: `${coreConfig.baseUrl}/${coreConfig.graphqlPathPrefix}/${url}`
    }
  }
}
