'use strict';

module.exports = {
	db: 'mongodb://localhost/bs-commerce-dev',
	app: {
		title: 'BS-Commerce - Development Environment'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || 'APP_ID',
		clientSecret: process.env.FACEBOOK_SECRET || 'APP_SECRET',
		callbackURL: '/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'CONSUMER_KEY',
		clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
		callbackURL: '/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || 'APP_ID',
		clientSecret: process.env.GOOGLE_SECRET || 'APP_SECRET',
		callbackURL: '/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || 'APP_ID',
		clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
		callbackURL: '/auth/linkedin/callback'
	},
	github: {
		clientID: process.env.GITHUB_ID || 'APP_ID',
		clientSecret: process.env.GITHUB_SECRET || 'APP_SECRET',
		callbackURL: '/auth/github/callback'
	},
	mailer: {
		from: process.env.MAILER_FROM || 'MAILER_FROM',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
			auth: {
				user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
				pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
			}
		}
	},
	stripe: {
		publishableKey: 'pk_test_bvLQL8RHq2KUbEXCwKoYim0Q',
		secretKey: 'sk_test_MZWnReGdw0E6Iw4Zybd0RPqI'
	},
	paypal: {
		clientInfo: {
			host : 'api.sandbox.paypal.com',
			mode:'sandbox',
			port : '',
			client_id: 'AbQzi5PqXs38yaCZ4M_bCP7KVGx6xa_jdF9czFTWMROL2GENwwrK7ChsdFD-OTwDJ24wDcBO7hwM4SRj',
			client_secret: 'EFiMq09cVKB2Dq95B2b9eykTm-p0aRQr-vocCGRzKY5Rj1JT0JsW-wbcaRapmGw633gl4cTn3iXSNXQw'
		},
		successUrl: 'http://localhost:3000/#!/payment/success',
		cancelUrl: 'http://localhost:3000/#!/payment/cancel'
	}
};
