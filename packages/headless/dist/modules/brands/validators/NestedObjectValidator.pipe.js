"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectValidationPipe = void 0;
const common_1 = require("@nestjs/common");
class ObjectValidationPipe {
    transform(value) {
        if (value.info.name === '' || value.info.name === undefined)
            throw new common_1.HttpException('Name is required and cannot be empty', common_1.HttpStatus.BAD_REQUEST);
        return value;
    }
}
exports.ObjectValidationPipe = ObjectValidationPipe;
//# sourceMappingURL=NestedObjectValidator.pipe.js.map