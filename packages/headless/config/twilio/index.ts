const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN } = process.env;

export const twilioSmsConfig = {
 accountSid : process.env.TWILIO_ACCOUNT_SID||'AC4f176e24301cd3082889f8607d8731bb',
 authToken : process.env.TWILIO_AUTH_TOKEN||'629ee913dcc9dc038eeae32eef636011',
}