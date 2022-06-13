import { Injectable } from "@nestjs/common";
import { Category, RequestCategory } from "src/entity/category";
import { ICategoryDatabase } from "./category.database.interface";

@Injectable()
export class CategoryRepository {
    constructor(private readonly db: ICategoryDatabase) { }

    async addCategory(category: RequestCategory): Promise<Category | null> {
        return await this.db.addCategory(category);
    }
}