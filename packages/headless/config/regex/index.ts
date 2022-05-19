const { PHONE_REGEX } = process.env;
export const regexConfig = {
    phone: new RegExp(String(PHONE_REGEX!) || String(/^(?:\+88|88)?(01[3-9]\d{8})$/))
}
