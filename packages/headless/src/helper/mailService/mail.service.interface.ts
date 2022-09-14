type Address = {
  name: string;
  address: string;
};

export type Options = {
  from: string | Address | undefined;
  to: string | Address | Array<string | Address> | undefined;
  subject: string | undefined;
  html: string | Buffer | undefined;
};

type Credentials = {
  user: string;
  pass: string;
};

export type MailOptions = {
  host: string | undefined;
  port: number | undefined;
  auth: Credentials | undefined;
  secure: boolean | undefined;
  service: string | undefined;
};
export abstract class IMailService {
  abstract sendMail: (
    email: string,
    subject: string,
    mailBody: string,
  ) => Promise<boolean | null>;
}
