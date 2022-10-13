import { HttpStatus, Injectable } from '@nestjs/common';
import * as FormData from 'form-data';
import fetch from 'node-fetch';


import { store_id, store_passwd, is_live, post_body } from '../test.data';
import { throwError } from 'rxjs';

@Injectable()
export class SSLPaymentGatewayService {
  constructor() {}

  async paymentInitiate():Promise<any>{
    // iniitate transaction unique id
    //take currency as input
    //take cus info, shipping info as inputs
    const fdata = new FormData();
    for (const a in post_body) {
        fdata.append(a, post_body[a] ? post_body[a] : '');
    }

    const result = await fetch('https://sandbox.sslcommerz.com/gwprocess/v4/api.php', {
      method: 'POST',
      body: fdata,
    }); 
    // if(!result) return {}; send error
    const resJson = await result.json();

    return resJson.GatewayPageURL;
  }

  async successHandler(body: any) {
  //do sth
    return body;
  }

  async cancelHandler(body: any) {
    //do sth
    return body;
  }

  async failureHandler(body: any) {
    //do sth
    return body;
  }

  async notificationHandler(body: any) {
    //call validation api

    // const response = await fetch(
    //   `https://sandbox.sslcommerz.com/validator/api/validationserverAPI.php?val_id=${body.val_id}&store_id=${store_id}&store_passwd=${store_passwd}&v=1&format=json`,
    //   {
    //     method: 'POST'
    //   });
    //   const resJson = await response.json();
    //   if(resJson.status === 'INVALID_TRANSACTION') 
    //   {
        //return error or save to db as unsuccesssful transaction
    //  }

    //implemnt security check and then save to db if status is VALID
    //Track your order by transaction ID and check it in your database for existance
    //Must validate amount and incoming amount from your Database
    //Also check the currency type to avoid frauds
    return body;
  }
}

