export abstract class ISmsService {
    abstract sendTwilioSms: (smsBody: string, smsTo: string, smsFrom: string) => Promise<Boolean | null>;
}