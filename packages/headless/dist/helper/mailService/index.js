"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const common_1 = require("@nestjs/common");
const nodemailer = require("nodemailer");
const mail_1 = require("../../config/mail");
let MailService = class MailService {
    async sendMail(email, subject, mailBody) {
        const mailOptions = {
            from: mail_1.nodemailerConfig.user,
            to: email,
            subject,
            html: mailBody,
        };
        const transporter = nodemailer.createTransport(mail_1.nodemailerConfig.options);
        try {
            const res = await transporter.sendMail(mailOptions);
            if (!res)
                return false;
            return true;
        }
        catch (error) {
            console.log(error);
        }
    }
};
MailService = __decorate([
    (0, common_1.Injectable)()
], MailService);
exports.MailService = MailService;
//# sourceMappingURL=index.js.map