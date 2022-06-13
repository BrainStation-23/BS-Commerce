import { UseGuards } from "@nestjs/common";
import { Query, Args, Mutation, Resolver } from "@nestjs/graphql";
import { Category, RequestCategory } from "src/entity/category";
import { JwtAuthGuard } from "src/modules/auth/guards/auth.guard";
import { CategoryService } from "../services";

@UseGuards(JwtAuthGuard)
@Resolver()
export class CategoryResolver {
  constructor(private categoryService: CategoryService) { }
  @Mutation()
  async addCategory(
    @Args('category') category: RequestCategory,
  ) {
    return await this.categoryService.addCategory(category);
  }
}