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
exports.MediaService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("../../../config/core");
const helper_interface_1 = require("../../../helper/helper.interface");
let MediaService = class MediaService {
    constructor(helper) {
        this.helper = helper;
    }
    async upload(req) {
        if (req.fileExtensionValidationError)
            return this.helper.serviceResponse.errorResponse("UNSUPPORTED_MIMETYPE", null, common_1.HttpStatus.BAD_REQUEST);
        if (!req.file)
            return this.helper.serviceResponse.errorResponse("PROVIDE_FILE", null, common_1.HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse({ url: `${core_1.coreConfig.baseUrl}/${req.file.path}` }, common_1.HttpStatus.OK);
    }
};
MediaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [helper_interface_1.Helper])
], MediaService);
exports.MediaService = MediaService;
//# sourceMappingURL=index.js.map