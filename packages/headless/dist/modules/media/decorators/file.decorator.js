"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiFile = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
function ApiFile(fieldName = 'file', required = false, localOptions) {
    return (0, common_1.applyDecorators)((0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)(fieldName, localOptions)), (0, swagger_1.ApiConsumes)('multipart/form-data'), (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            required: required ? [fieldName] : [],
            properties: {
                [fieldName]: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    }));
}
exports.ApiFile = ApiFile;
//# sourceMappingURL=file.decorator.js.map