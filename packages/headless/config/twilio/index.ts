const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN } = process.env;

export const twilioSmsConfig = {
 accountSid : process.env.TWILIO_ACCOUNT_SID||'AC4f176e24301cd3082889f8607d8731cb',
 authToken : process.env.TWILIO_AUTH_TOKEN||'16568c1133dd31af3d2a47a59c2f5280',
}