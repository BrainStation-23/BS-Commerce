import { IMailService } from './mail.service.interface';
export declare class MailService implements IMailService {
    sendMail(email: string, subject: string, mailBody: string): Promise<boolean | null>;
}
