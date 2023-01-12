"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateValidationPipe = void 0;
const common_1 = require("@nestjs/common");
class UpdateValidationPipe {
    transform(value) {
        if (value.info && value.info.name)
            throw new common_1.HttpException('Name must not be updated', common_1.HttpStatus.BAD_REQUEST);
        return value;
    }
}
exports.UpdateValidationPipe = UpdateValidationPipe;
//# sourceMappingURL=UpdateValidationPipe.js.map