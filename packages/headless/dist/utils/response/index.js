"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = exports.successResponse = void 0;
const common_1 = require("@nestjs/common");
function successResponse(dataType, data, code = common_1.HttpStatus.OK) {
    return { data, code };
}
exports.successResponse = successResponse;
function errorResponse(error, errors = null, code = common_1.HttpStatus.NOT_FOUND) {
    return { error, errors, code };
}
exports.errorResponse = errorResponse;
//# sourceMappingURL=index.js.map