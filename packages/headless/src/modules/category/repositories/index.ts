import { Injectable } from "@nestjs/common";
import { responseCategory } from "src/entity/category";
import { ICategoryDatabase } from "./category.database.interface";

@Injectable()
export class CategoryRepository {
  constructor(private readonly db: ICategoryDatabase) { }
  
  async getCategoryList(): Promise<responseCategory[] | null> {
    return await this.db.getCategoryList();
  }
}