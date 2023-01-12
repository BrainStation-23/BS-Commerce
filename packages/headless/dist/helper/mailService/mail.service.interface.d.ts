/// <reference types="node" />
declare type Address = {
    name: string;
    address: string;
};
export declare type Options = {
    from: string | Address | undefined;
    to: string | Address | Array<string | Address> | undefined;
    subject: string | undefined;
    html: string | Buffer | undefined;
};
declare type Credentials = {
    user: string;
    pass: string;
};
export declare type MailOptions = {
    host: string | undefined;
    port: number | undefined;
    auth: Credentials | undefined;
    secure: boolean | undefined;
    service: string | undefined;
};
export declare abstract class IMailService {
    abstract sendMail: (email: string, subject: string, mailBody: string) => Promise<boolean | null>;
}
export {};
