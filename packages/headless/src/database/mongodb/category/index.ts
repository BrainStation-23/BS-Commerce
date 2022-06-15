import { Injectable } from "@nestjs/common";
import { Category } from "src/entity/category";
import { ICategoryDatabase } from "src/modules/category/repositories/category.database.interface";
import { CategoryModel } from "./category.model";

@Injectable()
export class CategoryDatabase implements ICategoryDatabase {
    async getCategory(categoryId: string): Promise<Category | null> {
        return await CategoryModel.findOne({categoryId })
    }
}
