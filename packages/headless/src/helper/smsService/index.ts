import { Injectable } from '@nestjs/common';
import { twilioSmsConfig } from 'config/twilio';
import { ISmsService } from './sms.service.interface';
@Injectable()
export class SmsService implements ISmsService {
  async sendTwilioSms(smsBody: string, smsTo: string, smsFrom: string): Promise<Boolean | null> {
    const client = require('twilio')(twilioSmsConfig.accountSid, twilioSmsConfig.authToken);
    try {
      const message = await client.messages
        .create({
          body: smsBody,
          to: smsTo,
          from: smsFrom,
        });
      if (!message) return false;
      return true;
    } catch (err) {
      console.log(err);
    }
  }
}
