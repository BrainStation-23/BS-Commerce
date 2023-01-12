"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const multer_1 = require("../../../config/multer");
let Upload = class Upload {
    parseLiteral(file) {
        if (file.kind === 'ObjectValue') {
            const fileObject = file;
            if (typeof fileObject.filename === 'string' &&
                typeof fileObject.mimetype === 'string' &&
                typeof fileObject.encoding === 'string' &&
                typeof fileObject.createReadStream === 'function')
                return Promise.resolve(fileObject);
        }
        return null;
    }
    async parseValue(value) {
        const upload = await value;
        if (!upload.file.mimetype)
            throw new common_1.BadRequestException('Mime type is unknown.');
        if (!multer_1.multerConfig.mimeTypes.includes(upload.file.mimetype))
            throw new common_1.BadRequestException(`Unsupported file format. Supports: ${multer_1.multerConfig.mimeTypes}.`);
        return upload;
    }
    serialize(value) {
        return value;
    }
};
Upload = __decorate([
    (0, graphql_1.Scalar)('Upload')
], Upload);
exports.Upload = Upload;
//# sourceMappingURL=scalar.datatype.js.map