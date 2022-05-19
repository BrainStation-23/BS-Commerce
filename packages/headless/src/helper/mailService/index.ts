import { Injectable } from "@nestjs/common";
import { IMailService } from "./mail.service.interface";
import * as nodemailer from 'nodemailer';
import { nodemailerConfig } from 'config/mail';

@Injectable()
export class MailService implements IMailService {
    async sendMail(email: string, subject: string, mailBody: string): Promise<Boolean | null> {
        const mailOptions = {
            from: nodemailerConfig.user,
            to: email,
            subject,
            html: mailBody
        }
        const transporter = nodemailer.createTransport(nodemailerConfig.options);
        try {
            const res = await transporter.sendMail(mailOptions);
            if (!res) return false;
            return true;
        } catch (error) {
            console.log(error);
        }
    }
}