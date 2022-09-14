import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UploadFileResponseUrl {
  @Field()
  url: string;
}

@ObjectType()
export class UploadFileResponse {
  @Field(() => Int)
  code: number;

  @Field(() => UploadFileResponseUrl, { nullable: true })
  data?: UploadFileResponseUrl;
}
