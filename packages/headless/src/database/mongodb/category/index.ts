import { Injectable } from '@nestjs/common';
import {
  Category,
  RequestCategory,
  responseCategory,
} from '../../../entity/category';
import { ICategoryDatabase } from '../../../modules/category/repositories/category.database.interface';
import { CategoryModel } from './category.model';

@Injectable()
export class CategoryDatabase implements ICategoryDatabase {
  getSlug(name: string) {
    return name.replace(/\s+/g, '-').toLowerCase();
  }

  async createCategory(
    requestCategory: RequestCategory,
  ): Promise<Category | null> {
    const newCategory = new CategoryModel(requestCategory);
    newCategory.slug = this.getSlug(requestCategory.name);

    if (requestCategory.parentSlug) {
      const parentCategory = await CategoryModel.findOne({
        slug: requestCategory.parentSlug,
      }).lean();
      const currentRootPath = parentCategory.slug;
      const currentAncestors = [
        {
          name: parentCategory.name,
          slug: parentCategory.slug,
          level: parentCategory.ancestors.length + 1,
        },
      ];
      const newCurrentRootPath = parentCategory.rootPath;
      const newCurrentAncestors = [...parentCategory.ancestors];
      if (newCurrentAncestors.length && currentRootPath.length) {
        Array.prototype.push.apply(newCurrentAncestors, currentAncestors);
        newCategory.ancestors = newCurrentAncestors;
        newCategory.rootPath = newCurrentRootPath + '/' + currentRootPath;
      } else {
        newCategory.ancestors = currentAncestors;
        newCategory.rootPath = currentRootPath;
      }
    }
    newCategory.save();
    return newCategory;
  }

  async generateCategoryTree(listItems) {
    const rootItems = [];
    const parentSubCategories = {};
    listItems.forEach((item) => {
      if (item.ancestors.length) {
        const parentSlug = item.ancestors[item.ancestors.length - 1].slug;
        if (!(parentSlug in parentSubCategories))
          parentSubCategories[parentSlug] = [];
        parentSubCategories[parentSlug].push(item);
      } else {
        rootItems.push(item);
      }
    });
    function generateParentSubcategories(parent) {
      if (!(parent['slug'] in parentSubCategories)) {
        return parent;
      }
      parent['subCategories'] = [];
      parentSubCategories[parent['slug']].forEach((child) => {
        parent['subCategories'].push(generateParentSubcategories(child));
      });
      return parent;
    }
    const categoryTree = { categories: [] };
    rootItems.forEach((u) => {
      categoryTree['categories'].push(generateParentSubcategories(u));
    });
    return categoryTree;
  }

  async getCategoryList(): Promise<responseCategory[] | null> {
    const categories = await CategoryModel.find({})
      .select('id name photo published displayOrder slug ancestors -_id')
      .lean();
    const category: any = this.generateCategoryTree(categories);
    return category;
  }

  async getCategory(query: Record<string, any>): Promise<Category | null> {
    return await CategoryModel.findOne(query).select('-_id').lean();
  }
}
