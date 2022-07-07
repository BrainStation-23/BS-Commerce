import { UseGuards } from "@nestjs/common";
import { Query, Args, Resolver, Mutation } from "@nestjs/graphql";
import { JwtAuthGuard } from "src/modules/auth/guards/auth.guard";
import { createCategoryRequestDto } from "../dto/createCategory.dto";
import { getCategoryRequestDto } from "../dto/getCategory.dto";
import { getCategoryBySlugRequestDto } from "../dto/getCategoryBySlug.dto";
import { CategoryService } from "../services";

@UseGuards(JwtAuthGuard)
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