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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const GraphQLUpload = require("graphql-upload/GraphQLUpload.js");
const fs_1 = require("fs");
const multer_1 = require("../../../config/multer");
const core_1 = require("../../../config/core");
const media_model_1 = require("./media.model");
const common_1 = require("@nestjs/common");
let MediaResolver = class MediaResolver {
    async uploadFile(file) {
        const { filename, mimetype, createReadStream } = file;
        if (!multer_1.multerConfig.mimeTypes.includes(mimetype)) {
            return new common_1.HttpException("UNSUPPORTED_MIMETYPE", common_1.HttpStatus.BAD_REQUEST);
        }
        const uploadPath = `${multer_1.multerConfig.dest}/${new Date().getFullYear()}/${new Date().getMonth()}/${new Date().getDate()}`;
        try {
            if (!(0, fs_1.existsSync)(uploadPath)) {
                (0, fs_1.mkdirSync)(uploadPath, { recursive: true });
            }
            const url = await new Promise((resolve, reject) => createReadStream()
                .pipe((0, fs_1.createWriteStream)(`${uploadPath}/${filename}`))
                .on('error', reject)
                .on('finish', () => {
                (0, fs_1.unlink)(uploadPath, () => {
                    resolve(`${uploadPath}/${filename}`);
                });
            }));
            return (url && {
                code: 200,
                data: {
                    url: `${core_1.coreConfig.baseUrl}/${url}`,
                },
            });
        }
        catch (error) {
            return new common_1.HttpException('INTERNAL_SERVER_ERROR', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => media_model_1.UploadFileResponse),
    __param(0, (0, graphql_1.Args)({ name: 'file', type: () => GraphQLUpload })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MediaResolver.prototype, "uploadFile", null);
MediaResolver = __decorate([
    (0, graphql_1.Resolver)()
], MediaResolver);
exports.MediaResolver = MediaResolver;
//# sourceMappingURL=media.resolver.js.map