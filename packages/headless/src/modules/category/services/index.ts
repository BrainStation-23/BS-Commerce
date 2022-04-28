import { Injectable } from "@nestjs/common";
import { Helper } from "src/helper/helper.interface";
import { CategoryRepository } from "../repositories";

@Injectable()
export class CategoryService {
  constructor(private categoryRepo: CategoryRepository, private helper: Helper) {}
}