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
exports.MediaController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const services_1 = require("../services");
const file_decorator_1 = require("../decorators/file.decorator");
const dto_1 = require("./dto");
const platform_express_1 = require("@nestjs/platform-express");
const storage_config_1 = require("../multer/storage.config");
let MediaController = class MediaController {
    constructor(mediaService) {
        this.mediaService = mediaService;
    }
    async upload(res, req) {
        const _a = await this.mediaService.upload(req), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return Object.assign({ code }, response);
    }
};
__decorate([
    (0, common_1.Post)('upload'),
    (0, file_decorator_1.ApiFile)('file', true, {}),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', storage_config_1.multerOptions)),
    (0, swagger_1.ApiResponse)({
        description: 'Upload File Success Response',
        type: dto_1.UploadFileSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Upload File Error Response',
        type: dto_1.UploadFileErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MediaController.prototype, "upload", null);
MediaController = __decorate([
    (0, common_1.Controller)('media'),
    (0, swagger_1.ApiTags)('Media API'),
    __metadata("design:paramtypes", [services_1.MediaService])
], MediaController);
exports.MediaController = MediaController;
//# sourceMappingURL=index.js.map