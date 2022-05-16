const { MAIL_HOST, MAIL_USER, MAIL_PASSWORD, MAIL_PORT, MAIL_SERVICE, MAIL_SECURE } = process.env;

export const mailConfig = {
    user: MAIL_USER!,
    options: {
        host: MAIL_HOST || 'smtp.example.com',
        port: parseInt(MAIL_PORT) || 465,
        secure: Boolean(MAIL_SECURE) || true,
        service: MAIL_SERVICE || 'gmail',
        auth: {
            user: MAIL_USER!,
            pass: MAIL_PASSWORD!
        }
    }
}
