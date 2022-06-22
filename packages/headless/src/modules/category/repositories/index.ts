import { Injectable } from "@nestjs/common";
import { Category, responseCategory } from "src/entity/category";
import { ICategoryDatabase } from "./category.database.interface";

@Injectable()
export class CategoryRepository {
  constructor(private readonly db: ICategoryDatabase) { }
  async getCategory(categoryId: string): Promise<Category | null> {
    return await this.db.getCategory(categoryId);
  }

  async getCategoryList(): Promise<responseCategory[] | null> {
    return await this.db.getCategoryList();
  }

  async getCategoryBySlug(slug: string): Promise<Category | null> {
    return await this.db.getCategoryBySlug(slug);
  }
}