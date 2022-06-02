import { Injectable } from '@nestjs/common';
import { IMailService, MailOptions, Options } from './mail.service.interface';
import nodemailer, { Transporter } from 'nodemailer';
import { nodemailerConfig } from 'src/config/mail';

@Injectable()
export class MailService implements IMailService {
  async sendMail(
    email: string,
    subject: string,
    mailBody: string,
  ): Promise<boolean | null> {
    const mailOptions: Options = {
      from: nodemailerConfig.user!,
      to: email,
      subject,
      html: mailBody,
    };
    const transporter: Transporter = nodemailer.createTransport(
      nodemailerConfig.options as MailOptions,
    );
    try {
      const res = await transporter.sendMail(mailOptions);
      if (!res) return false;
      return true;
    } catch (error) {
      console.log(error);
    }
  }
}
