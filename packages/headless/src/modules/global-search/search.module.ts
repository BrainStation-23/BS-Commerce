import { Module, OnModuleInit } from "@nestjs/common";
import { ElasticsearchModule } from "@nestjs/elasticsearch";
import { searchConfig } from "config/search";
import { ProductSearchDatabase } from "src/database/mongodb/search";
import { SearchController } from "./rest";
import { ElasticHelperService } from "./services/elastic.helper";
import { ElasticService } from "./services/elastic.service";

@Module({
    imports: [ElasticsearchModule.register({
      node: searchConfig.node,
    })],
    controllers: [SearchController],
    providers: [ProductSearchDatabase, ElasticService, ElasticHelperService],
    exports: [ElasticService]
  })
export class SearchModule implements OnModuleInit{
  constructor(private readonly helperService: ElasticHelperService){}

  async onModuleInit(){
    await this.helperService.createProductIndex()
  }
}