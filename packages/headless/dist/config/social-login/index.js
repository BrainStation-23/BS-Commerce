"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socialLoginConfig = void 0;
const { GOOGLE_CLIENT_ID, GOOGLE_SECRET, FACEBOOK_APP_ID, FACEBOOK_APP_SECRET, SOCIAL_PASSWORD, ORIGIN_URL, } = process.env;
exports.socialLoginConfig = {
    googleClientId: GOOGLE_CLIENT_ID ||
        '739836162072-e5guoa0vhgfdffqdo5nuq4nt0lb9qem0uf3t.apps.goocfdgffgleusercontent.com',
    googleSecret: GOOGLE_SECRET || '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mxB',
    facebookAppId: FACEBOOK_APP_ID || '760hg729456669137',
    facebookAppSecret: FACEBOOK_APP_SECRET || 'ed1c9f0j559b785427cc39b0de67gha6',
    socialPassword: SOCIAL_PASSWORD || 'password',
    originUrl: ORIGIN_URL || 'http://localhost:5000',
};
//# sourceMappingURL=index.js.map