import { Injectable } from "@nestjs/common";
import { Category, RequestCategory, responseCategory } from "src/entity/category";
import { ICategoryDatabase } from "./category.database.interface";

@Injectable()
export class CategoryRepository {
  constructor(private readonly db: ICategoryDatabase) { }
  async getCategory(query: Record<string, any>): Promise<Category | null> {
    return await this.db.getCategory(query);
  }

  async getCategoryList(): Promise<responseCategory[] | null> {
    return await this.db.getCategoryList();
  }
  
  async createCategory(category: RequestCategory): Promise<Category | null> {
        return await this.db.createCategory(category);
    }
}