import { Injectable } from "@nestjs/common";
import { responseCategory } from "src/entity/category";
import { Category } from "src/entity/category";
import { ICategoryDatabase } from "src/modules/category/repositories/category.database.interface";
import { CategoryModel } from "./category.model";

@Injectable()
export class CategoryDatabase implements ICategoryDatabase {

    async generateCategoryTree(listItems) {
        let rootItems = [];
        let parentSubCategories = {};
        listItems.forEach(item => {
            if (item.ancestors.length) {
                let parentSlug = item.ancestors[item.ancestors.length - 1].slug;
                if (!(parentSlug in parentSubCategories)) parentSubCategories[parentSlug] = [];
                parentSubCategories[parentSlug].push(item)
            } else {
                rootItems.push(item)
            }
        });
        function generateParentSubcategories(parent) {
            if (!(parent['slug'] in parentSubCategories)) {
                return parent;
            }
            parent['subCategories'] = []
            parentSubCategories[parent['slug']].forEach(child => {
                parent['subCategories'].push(generateParentSubcategories(child))
            });
            return parent;
        };
        let categoryTree = { 'categories': [] }
        rootItems.forEach(u => {
            categoryTree['categories'].push(generateParentSubcategories(u));
        });
        return categoryTree;
    }

    async getCategoryList(): Promise<responseCategory[] | null> {
        let categories = await CategoryModel.find({}).select('slug ancestors -_id').lean();
        let category: any = this.generateCategoryTree(categories);
        return category;
    }

    async getCategory(categoryId: string): Promise<Category | null> {
        return await CategoryModel.findOne({categoryId })
    }

    async getCategoryBySlug(slug: string): Promise<Category | null> {
        return await CategoryModel.findOne({ slug })
    }
}
