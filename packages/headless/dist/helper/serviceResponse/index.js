"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceResponse = void 0;
const common_1 = require("@nestjs/common");
let ServiceResponse = class ServiceResponse {
    successResponse(data, code = common_1.HttpStatus.OK) {
        return { data, code };
    }
    errorResponse(error, errors, code = common_1.HttpStatus.NOT_FOUND) {
        return { error, errors, code };
    }
    graphqlResponse(res) {
        const err = res.error;
        if (err) {
            return new common_1.HttpException(err, res === null || res === void 0 ? void 0 : res.code);
        }
        return res;
    }
};
ServiceResponse = __decorate([
    (0, common_1.Injectable)()
], ServiceResponse);
exports.ServiceResponse = ServiceResponse;
//# sourceMappingURL=index.js.map