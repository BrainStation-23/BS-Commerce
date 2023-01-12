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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompareTestController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_1 = require("../../../entity/user");
const auth_decorator_1 = require("../../../decorators/auth.decorator");
const test_dto_1 = require("./dto/test.dto");
const test_service_1 = require("../services/test.service");
let CompareTestController = class CompareTestController {
    constructor(compareService) {
        this.compareService = compareService;
    }
    async getCompareByUserId(user, res) {
        const _a = await this.compareService.getCompareByUserId(user.id), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
    async getCompare(user, res) {
        const _a = await this.compareService.getCompare(user.id), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        description: 'Add product to compare Response',
        type: test_dto_1.CompareDataDto,
    }),
    (0, common_1.Get)(),
    __param(0, (0, auth_decorator_1.User)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User, Object]),
    __metadata("design:returntype", Promise)
], CompareTestController.prototype, "getCompareByUserId", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        description: 'Add product to compare Response',
        type: Boolean,
    }),
    (0, common_1.Get)('boolean'),
    __param(0, (0, auth_decorator_1.User)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User, Object]),
    __metadata("design:returntype", Promise)
], CompareTestController.prototype, "getCompare", null);
CompareTestController = __decorate([
    (0, swagger_1.ApiTags)('Test purpose - Comparison API'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.Controller)('test-purpose/compare'),
    __metadata("design:paramtypes", [test_service_1.CompareTestService])
], CompareTestController);
exports.CompareTestController = CompareTestController;
//# sourceMappingURL=test.controller.js.map