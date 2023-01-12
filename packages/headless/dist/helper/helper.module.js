"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelperModule = void 0;
const common_1 = require("@nestjs/common");
const helper_interface_1 = require("./helper.interface");
const helper_service_1 = require("./helper.service");
const mailService_1 = require("./mailService");
const mail_service_interface_1 = require("./mailService/mail.service.interface");
const serviceResponse_1 = require("./serviceResponse");
const service_response_interface_1 = require("./serviceResponse/service.response.interface");
let HelperModule = class HelperModule {
};
HelperModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [
            {
                provide: service_response_interface_1.IServiceResponse,
                useClass: serviceResponse_1.ServiceResponse,
            },
            {
                provide: helper_interface_1.Helper,
                useClass: helper_service_1.HelperService,
            },
            {
                provide: mail_service_interface_1.IMailService,
                useClass: mailService_1.MailService,
            },
        ],
        exports: [helper_interface_1.Helper],
    })
], HelperModule);
exports.HelperModule = HelperModule;
//# sourceMappingURL=helper.module.js.map