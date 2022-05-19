
export abstract class IMailService {
    abstract sendMail: (email: string, subject: string, mailBody: string) => Promise<Boolean | null>;
}