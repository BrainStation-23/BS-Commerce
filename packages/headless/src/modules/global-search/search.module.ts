import { Module, OnModuleInit } from "@nestjs/common";
import { ElasticsearchModule } from "@nestjs/elasticsearch";
import { searchConfig } from "config/search";
import { ProductSrarchDatabase } from "src/database/mongodb/search";
import { SearchController } from "./rest";
import { ElasticService } from "./services/elastic.service";

@Module({
    imports: [ElasticsearchModule.register({
      node: searchConfig.node,
    })],
    controllers: [SearchController],
    providers: [ProductSrarchDatabase, ElasticService],
  })
export class SearchModule implements OnModuleInit  {
  constructor(private readonly searchService: ElasticService){}
  public async onModuleInit() {
    //  await this.searchService.bulkInsert();
  }
}