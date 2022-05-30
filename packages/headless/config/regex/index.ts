const { PHONE_NUMBER_REGION } = process.env;
export const regexConfig = {
    phone: String(PHONE_NUMBER_REGION!) || 'BD'
}
