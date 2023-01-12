"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaModule = void 0;
const common_1 = require("@nestjs/common");
const scalar_datatype_1 = require("./decorators/scalar.datatype");
const media_resolver_1 = require("./graphql/media.resolver");
const services_1 = require("./services");
let MediaModule = class MediaModule {
};
MediaModule = __decorate([
    (0, common_1.Module)({
        imports: [scalar_datatype_1.Upload],
        controllers: [],
        providers: [media_resolver_1.MediaResolver, services_1.MediaService],
    })
], MediaModule);
exports.MediaModule = MediaModule;
//# sourceMappingURL=media.graphql.module.js.map