import { UseGuards } from "@nestjs/common";
import { Query, Args, Resolver, Mutation } from "@nestjs/graphql";
import { RolesGuard } from "src/guards/auth.guard";
import { createCategoryRequestDto } from "../rest/dto/createCategory.dto";
import { getCategoryRequestDto } from "../rest/dto/getCategory.dto";
import { getCategoryBySlugRequestDto } from "../rest/dto/getCategoryBySlug.dto";
import { CategoryService } from "../services";

@UseGuards(new RolesGuard(['admin']))
@Resolver()
export class CategoryResolver {
  constructor(private categoryService: CategoryService) { }

   @Query()
  async getCategory(
    @Args() data: getCategoryRequestDto) {
      return await this.categoryService.getCategory(data.categoryId);
  }

  @Query()
  async getCategoryList() {
    const item:any = await this.categoryService.getCategoryList();
      return item;
  }

  @Query()
  async getCategoryBySlug(
    @Args() data: getCategoryBySlugRequestDto) {
      return await this.categoryService.getCategoryBySlug(data.slug);
  }

  @Mutation()
  async createCategory(
    @Args('category') category: createCategoryRequestDto,
  ) {
    return await this.categoryService.createCategory(category);
  }
}