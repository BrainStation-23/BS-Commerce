
export abstract class IMailService {
    abstract senEmail: (email: string, urlWithToken?: string) => Promise<Boolean | null>;
}