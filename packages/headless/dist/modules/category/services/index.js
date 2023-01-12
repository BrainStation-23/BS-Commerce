"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const helper_interface_1 = require("../../../helper/helper.interface");
const repositories_1 = require("../repositories");
let CategoryService = class CategoryService {
    constructor(categoryRepo, helper) {
        this.categoryRepo = categoryRepo;
        this.helper = helper;
    }
    async createCategory(category) {
        const findCategory = await this.categoryRepo.getCategory({
            name: category.name,
        });
        const newCategory = !findCategory && (await this.categoryRepo.createCategory(category));
        if (!newCategory) {
            return this.helper.serviceResponse.errorResponse("CAN_NOT_CREATE_CATEGORY", null, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return this.helper.serviceResponse.successResponse(newCategory, common_1.HttpStatus.OK);
    }
    async getCategory(categoryId) {
        const category = await this.categoryRepo.getCategory({ id: categoryId });
        if (!category) {
            return this.helper.serviceResponse.errorResponse("CAN_NOT_GET_CATEGORY_BY_ID", null, common_1.HttpStatus.BAD_REQUEST);
        }
        return this.helper.serviceResponse.successResponse(category, common_1.HttpStatus.OK);
    }
    async getCategoryList() {
        const category = await this.categoryRepo.getCategoryList();
        if (!category) {
            return this.helper.serviceResponse.errorResponse("CAN_NOT_GET_CATEGORY_LIST", null, common_1.HttpStatus.BAD_REQUEST);
        }
        return this.helper.serviceResponse.successResponse(category, common_1.HttpStatus.OK);
    }
    async getCategoryBySlug(slug) {
        const category = await this.categoryRepo.getCategory({ slug });
        if (!category) {
            return this.helper.serviceResponse.errorResponse("CAN_NOT_GET_CATEGORY_BY_SLUG", null, common_1.HttpStatus.BAD_REQUEST);
        }
        return this.helper.serviceResponse.successResponse(category, common_1.HttpStatus.OK);
    }
};
CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_1.CategoryRepository,
        helper_interface_1.Helper])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=index.js.map