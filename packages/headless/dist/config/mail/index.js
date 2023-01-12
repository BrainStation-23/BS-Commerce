"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodemailerConfig = void 0;
const { NODEMAILER_HOST, NODEMAILER_USER, NODEMAILER_PASS, NODEMAILER_PORT, NODEMAILER_SERVICE, NODEMAILER_SECURE } = process.env;
exports.nodemailerConfig = {
    user: NODEMAILER_USER,
    options: {
        host: NODEMAILER_HOST || 'smtp.example.com',
        port: Number(NODEMAILER_PORT) || 465,
        secure: Boolean(NODEMAILER_SECURE) || true,
        service: NODEMAILER_SERVICE || 'gmail',
        auth: {
            user: NODEMAILER_USER,
            pass: NODEMAILER_PASS
        }
    }
};
//# sourceMappingURL=index.js.map