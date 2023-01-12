"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryDatabase = void 0;
const common_1 = require("@nestjs/common");
const category_model_1 = require("./category.model");
let CategoryDatabase = class CategoryDatabase {
    getSlug(name) {
        return name.replace(/\s+/g, '-').toLowerCase();
    }
    async createCategory(requestCategory) {
        const newCategory = new category_model_1.CategoryModel(requestCategory);
        newCategory.slug = this.getSlug(requestCategory.name);
        if (requestCategory.parentSlug) {
            const parentCategory = await category_model_1.CategoryModel.findOne({
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
            }
            else {
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
            }
            else {
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
    async getCategoryList() {
        const categories = await category_model_1.CategoryModel.find({})
            .select('id name photo published displayOrder slug ancestors -_id')
            .lean();
        const category = this.generateCategoryTree(categories);
        return category;
    }
    async getCategory(query) {
        return await category_model_1.CategoryModel.findOne(query).select('-_id').lean();
    }
};
CategoryDatabase = __decorate([
    (0, common_1.Injectable)()
], CategoryDatabase);
exports.CategoryDatabase = CategoryDatabase;
//# sourceMappingURL=index.js.map