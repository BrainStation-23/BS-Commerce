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
exports.TagsResponse = exports.TagResponse = exports.UpdateTagInput = exports.CreateTagInput = exports.TagType = void 0;
const graphql_1 = require("@nestjs/graphql");
let TagType = class TagType {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], TagType.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], TagType.prototype, "name", void 0);
TagType = __decorate([
    (0, graphql_1.ObjectType)()
], TagType);
exports.TagType = TagType;
let CreateTagInput = class CreateTagInput {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateTagInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], CreateTagInput.prototype, "isHomePageProductsTag", void 0);
CreateTagInput = __decorate([
    (0, graphql_1.InputType)()
], CreateTagInput);
exports.CreateTagInput = CreateTagInput;
let UpdateTagInput = class UpdateTagInput {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateTagInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], UpdateTagInput.prototype, "isHomePageProductsTag", void 0);
UpdateTagInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateTagInput);
exports.UpdateTagInput = UpdateTagInput;
let TagResponse = class TagResponse {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], TagResponse.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => TagType, { nullable: true }),
    __metadata("design:type", TagType)
], TagResponse.prototype, "data", void 0);
TagResponse = __decorate([
    (0, graphql_1.ObjectType)()
], TagResponse);
exports.TagResponse = TagResponse;
let TagsResponse = class TagsResponse {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], TagsResponse.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => [TagType], { nullable: true }),
    __metadata("design:type", Array)
], TagsResponse.prototype, "data", void 0);
TagsResponse = __decorate([
    (0, graphql_1.ObjectType)()
], TagsResponse);
exports.TagsResponse = TagsResponse;
//# sourceMappingURL=tags.model.js.map