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
exports.CompareService = void 0;
const common_1 = require("@nestjs/common");
const helper_interface_1 = require("../../../helper/helper.interface");
const repositories_1 = require("../repositories");
let CompareService = class CompareService {
    constructor(compareRepository, helper) {
        this.compareRepository = compareRepository;
        this.helper = helper;
    }
    async addItemToCompare(userId, productId) {
        const isExist = await this.compareRepository.getCompareByUserId(userId);
        let saveData = null;
        if (!isExist) {
            saveData = await this.compareRepository.createCompare(userId, {
                productId,
            });
        }
        else {
            saveData = await this.compareRepository.addItemToCompare(userId, {
                productId,
            });
        }
        if (saveData) {
            return {
                data: saveData,
                code: common_1.HttpStatus.OK,
            };
        }
        else {
            return this.helper.serviceResponse.errorResponse("CAN_NOT_ADD_ITEM_FOR_COMPARING.", null, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getProductDetails(productId) {
        let productDetails = null;
        productDetails = await this.compareRepository.getProductDetails(productId);
        if (productDetails) {
            return {
                data: productDetails,
                code: common_1.HttpStatus.OK,
            };
        }
        else {
            return this.helper.serviceResponse.errorResponse("CAN_NOT_ADD_ITEM_FOR_COMPARING.", null, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getCompareByUserId(userId) {
        const data = await this.compareRepository.getCompareByUserId(userId);
        if (data) {
            return { data, code: common_1.HttpStatus.OK };
        }
        else {
            return this.helper.serviceResponse.errorResponse("COMPARISON_LIST_IS_EMPTY.", null, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getCompareById(userId, compareId) {
        const data = await this.compareRepository.getCompareById(userId, compareId);
        if (data) {
            return { data, code: common_1.HttpStatus.OK };
        }
        else {
            return this.helper.serviceResponse.errorResponse("COMPARISON_NOT_FOUND.", null, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async deleteCompareById(userId, compareId) {
        const data = await this.compareRepository.deleteCompareById(userId, compareId);
        if (data) {
            return { data, code: common_1.HttpStatus.OK };
        }
        else {
            return this.helper.serviceResponse.errorResponse("COMPARISON_CAN_NOT_BE_DELETED_OR_NOT_EXIST.", null, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async deleteItemByProductId(userId, productId) {
        const isExist = await this.compareRepository.getProduct(productId);
        if (!isExist)
            return this.helper.serviceResponse.errorResponse("INVALID PRODUCT ID", null, common_1.HttpStatus.BAD_REQUEST);
        const data = await this.compareRepository.deleteItemByProductId(userId, productId);
        if (data) {
            return { data, code: common_1.HttpStatus.OK };
        }
        else {
            return this.helper.serviceResponse.errorResponse("ITEM_CAN_NOT_BE_DELETED.", null, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async deleteAllItemByUserId(userId) {
        const data = await this.compareRepository.deleteAllItemByUserId(userId);
        if (data) {
            return { data, code: common_1.HttpStatus.OK };
        }
        else {
            return this.helper.serviceResponse.errorResponse("ITEM_CAN_NOT_BE_DELETED.", null, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
CompareService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_1.CompareRepository,
        helper_interface_1.Helper])
], CompareService);
exports.CompareService = CompareService;
//# sourceMappingURL=index.js.map