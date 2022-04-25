import { Module } from '@nestjs/common';
import { ResolveGraphqlModule } from './graphql.module.dependency';
import { HelperModule } from './helper/helper.module';
import { ResolveRestModule } from './rest.module.dependency';
import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  imports: [
    HelperModule,
    ...((process.env.API === 'GRAPHQL') ? ResolveGraphqlModule() : ResolveRestModule())
  ]
})
export class AppModule {}
