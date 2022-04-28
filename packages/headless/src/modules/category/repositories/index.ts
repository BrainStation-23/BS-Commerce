import { Injectable } from "@nestjs/common";
import { ICategoryDatabase } from "./category.database.interface";

@Injectable()
export class CategoryRepository {
  constructor(private readonly db: ICategoryDatabase) {}
}