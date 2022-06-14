import { UseGuards } from "@nestjs/common";
import { Query, Args, Mutation, Resolver } from "@nestjs/graphql";
import { Category } from "src/entity/category";
import { JwtAuthGuard } from "src/modules/auth/guards/auth.guard";
import { CategoryService } from "../services";

@UseGuards(JwtAuthGuard)
@Resolver()
export class CategoryResolver {
  constructor(private categoryService: CategoryService) { }
  
  @Query()
  async getCategoryList() {
    const item:any = await this.categoryService.getCategoryList();
    console.log(item.data[0].subCategories);
      return item;
  }


}