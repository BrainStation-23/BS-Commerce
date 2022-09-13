import { twilioSmsConfig } from 'config/twilio';

export const sendTwilioSms = async (smsBody: string, smsTo: string, smsFrom: string) => {
  const client = require('twilio')(twilioSmsConfig.accountSid, twilioSmsConfig.authToken);
  try {
    const message = await client.messages
      .create({
        body: smsBody,
        to: smsTo,
        from: smsFrom,
      });
  } catch (err) {
    console.log(err.HttpStatus);
  }
}
