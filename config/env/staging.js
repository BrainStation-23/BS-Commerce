'use strict';

export const db = 'mongodb+srv://bscommercedbuser:af2mGt3uPL5sXmdk@cluster0.vnrr0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
export const dbOptions = {
  /*
  server: {
      socketOptions: {
          keepAlive: 1
      },
      poolSize: 5
  },
  replset: {
    rs_name: 'myReplicaSet',
    poolSize: 5
  },
  db: {
    w: 1,
    numberOfRetries: 2
  }
  */
};
export const app = {
  name: 'BS Commerce'
};
export const logging = {
  format: 'combined'
};
export const aggregate = false;
export const facebook = {
  clientID: 'APP_ID',
  clientSecret: 'APP_SECRET',
  callbackURL: 'http://localhost:3000/auth/facebook/callback'
};
export const twitter = {
  clientID: 'CONSUMER_KEY',
  clientSecret: 'CONSUMER_SECRET',
  callbackURL: 'http://localhost:3000/auth/twitter/callback'
};
export const github = {
  clientID: 'APP_ID',
  clientSecret: 'APP_SECRET',
  callbackURL: 'http://localhost:3000/auth/github/callback'
};
export const google = {
  clientID: 'APP_ID',
  clientSecret: 'APP_SECRET',
  callbackURL: 'http://localhost:3000/auth/google/callback'
};
export const linkedin = {
  clientID: 'API_KEY',
  clientSecret: 'SECRET_KEY',
  callbackURL: 'http://localhost:3000/auth/linkedin/callback'
};
export const emailFrom = 'SENDER EMAIL ADDRESS';
export const mailer = {
  service: 'SERVICE_PROVIDER',
  auth: {
    user: 'EMAIL_ID',
    pass: 'PASSWORD'
  }
};
