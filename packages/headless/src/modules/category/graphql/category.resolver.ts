import { UseGuards } from "@nestjs/common";
import { Query, Args, Resolver, Mutation } from "@nestjs/graphql";
import { RolesGuard } from "src/guards/auth.guard";
import { CategoryService } from "../services";
import { CategoryListResponse, CategoryResponse, createCategoryRequestSchema, getCategoryBySlugRequestSchema, getCategoryRequestSchema } from "./category.model";

@Resolver()
export class CategoryResolver {
  constructor(private categoryService: CategoryService) { }

  @Query(returns => CategoryResponse, {nullable:true})
  async getCategory(
    @Args('data') data: getCategoryRequestSchema) {
      return await this.categoryService.getCategory(data.categoryId);
  }

  @Query(returns => CategoryListResponse, {nullable:true})
  async getCategoryList() {
    const item:any = await this.categoryService.getCategoryList();
      return item;
  }

  @Query(returns => CategoryResponse, {nullable:true})
  async getCategoryBySlug(
    @Args('data') data: getCategoryBySlugRequestSchema) {
      return await this.categoryService.getCategoryBySlug(data.slug);
  }

  @UseGuards(new RolesGuard(['admin']))
  @Mutation(returns => CategoryResponse)
  async createCategory(
    @Args('category') category: createCategoryRequestSchema,
  ) {
    return await this.categoryService.createCategory(category);
  }
}