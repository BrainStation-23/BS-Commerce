import { Injectable } from "@nestjs/common";
import { SubscriptionLog } from "rxjs/internal/testing/SubscriptionLog";
import { Category, RequestCategory } from "src/entity/category";
import { ICategoryDatabase } from "src/modules/category/repositories/category.database.interface";
import { CategoryModel } from "./category.model";

@Injectable()
export class CategoryDatabase implements ICategoryDatabase {

    getSlug(name: string) {
        return name.replace(/\s+/g, '-').toLowerCase();
    };

    // need to receive another parameter named imageId
    async addCategory(requestCategory: RequestCategory): Promise<Category | null> {
        let newCategory = new CategoryModel(requestCategory);
        newCategory.slug = this.getSlug(requestCategory.name);
        // newCategory.imageId = imageId;
        
        if (requestCategory.parentSlug) {
            const parentCategory = await CategoryModel.findOne({ slug: requestCategory.parentSlug }).lean();
            const currentRootPath = parentCategory.slug;
            const currentAncestors = [{
                name: parentCategory.name,
                slug: parentCategory.slug,
                level: parentCategory.ancestors.length + 1,
            }];
            const newCurrentRootPath = currentRootPath;
            const newCurrentAncestors = [...parentCategory.ancestors];
            if (newCurrentAncestors.length && currentRootPath.length) {
                Array.prototype.push.apply(newCurrentAncestors, currentAncestors);
                newCategory.ancestors = newCurrentAncestors;
                newCategory.rootPath = parentCategory.rootPath + '/' + newCurrentRootPath;
            } else {
                newCategory.ancestors = currentAncestors;
                newCategory.rootPath = currentRootPath;
            }
        };
        newCategory.save();
        return newCategory;
    }
}