const {
  GOOGLE_CLIENT_ID,
  GOOGLE_SECRET,
  FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET,
  SOCIAL_PASSWORD,
} = process.env;

export const socialLoginConfig = {
  googleClientId:
    GOOGLE_CLIENT_ID ||
    '739836162072-e5guoa0v3qqdo5nuq4nt0lb9qem0uf3t.apps.googleusercontent.com',
  googleSecret: GOOGLE_SECRET || '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',
  facebookAppId: FACEBOOK_APP_ID || '760772941879137',
  facebookAppSecret: FACEBOOK_APP_SECRET || 'ed1c9f0a559b785427cc39b0de67cea6',
  socialPassword: SOCIAL_PASSWORD || 'password',
};
