export abstract class ISmsService {
    abstract sendTwilioSms: (from: string, to: string, smsBody: string) => Promise<Boolean | null>;
}