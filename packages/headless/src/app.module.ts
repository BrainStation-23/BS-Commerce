import { Module } from '@nestjs/common';
import { ResolveGraphqlModule } from 'src/internal/graphql/graphql.module.resolver';
import { HelperModule } from './helper/helper.module';
import { ResolveRestModule } from 'src/internal/rest/rest.module.resolver';
import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  imports: [
    HelperModule,
    ...((process.env.API === 'GRAPHQL') ? ResolveGraphqlModule() : ResolveRestModule())
  ]
})
export class AppModule {}
