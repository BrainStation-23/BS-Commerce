import { Injectable } from "@nestjs/common";
import { ICategoryDatabase } from "src/modules/category/repositories/category.database.interface";

@Injectable()
export class CategoryDatabase implements ICategoryDatabase {}