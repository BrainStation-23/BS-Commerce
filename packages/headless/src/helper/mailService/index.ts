import { Injectable } from "@nestjs/common";
import { IMailService } from "./mail.service.interface";
import * as nodemailer from 'nodemailer';
import { mailConfig } from 'config/mail';

@Injectable()
export class MailService implements IMailService {
    async senEmail(email: string, urlWithToken?: string): Promise<Boolean | null> {
        const mailOptions = {
            from: mailConfig.user,
            to: email,
            subject: 'Reset Password Link',
            html: urlWithToken
        }
        const transporter = nodemailer.createTransport(mailConfig.options);
        try {
            const res = await transporter.sendMail(mailOptions);
            console.log(res)
            if (!res) return false
            return true;
        } catch (error) {
            console.log(error)
        }
    }
}