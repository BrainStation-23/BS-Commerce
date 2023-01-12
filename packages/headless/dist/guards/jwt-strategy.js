"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const auth_1 = require("../config/auth");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromExtractors([
                (request) => {
                    var _a, _b, _c, _d;
                    const data = ((_b = (_a = request === null || request === void 0 ? void 0 : request.headers) === null || _a === void 0 ? void 0 : _a.authorization) === null || _b === void 0 ? void 0 : _b.split(' ')[1]) ||
                        ((_d = (_c = request === null || request === void 0 ? void 0 : request.cookies) === null || _c === void 0 ? void 0 : _c.jwt) === null || _d === void 0 ? void 0 : _d.split(' ')[1]);
                    if (!data) {
                        return null;
                    }
                    return data;
                },
            ]),
            ignoreExpiration: false,
            secretOrKey: auth_1.authConfig.jwt_key,
        });
    }
    async validate(payload) {
        if (payload === null) {
            throw new common_1.UnauthorizedException('Sorry! You are not a valid user for this action.');
        }
        return Object.assign({}, payload);
    }
};
JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;
//# sourceMappingURL=jwt-strategy.js.map