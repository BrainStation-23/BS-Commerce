"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateNested = exports.ValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
let ValidationPipe = class ValidationPipe {
    async transform(value, { metatype }) {
        var _a;
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }
        const object = value && (0, class_transformer_1.plainToClass)(metatype, value);
        const errors = await (0, class_validator_1.validate)(object, {
            validationError: {
                target: false,
                value: false,
            },
        });
        const errorsResponse = { error: '', errors: {} };
        if (errors.length > 0) {
            errors.map((err) => {
                const errorArray = [];
                err &&
                    err.constraints &&
                    Object.values(err.constraints).forEach((constraint) => {
                        errorsResponse.error += constraint + ',';
                        err.property && errorArray.push(constraint);
                    });
                err.property &&
                    (errorsResponse.errors[err.property] = errorArray);
            });
            if ((errorsResponse === null || errorsResponse === void 0 ? void 0 : errorsResponse.error) || ((_a = errorsResponse === null || errorsResponse === void 0 ? void 0 : errorsResponse.errors) === null || _a === void 0 ? void 0 : _a.length)) {
                throw new common_1.HttpException(errorsResponse, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
            }
        }
        return value;
    }
    toValidate(metatype) {
        const types = [String, Boolean, Number, Array, Object];
        return !types.includes(metatype);
    }
};
ValidationPipe = __decorate([
    (0, common_1.Injectable)()
], ValidationPipe);
exports.ValidationPipe = ValidationPipe;
function ValidateNested(schema, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'ValidateNested',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value, args) {
                    var _a;
                    args.value;
                    if (Array.isArray(value)) {
                        for (let i = 0; i < value.length; i++) {
                            if (value &&
                                schema &&
                                value[i] &&
                                (0, class_validator_1.validateSync)((0, class_transformer_1.plainToClass)(schema, value[i])).length) {
                                return false;
                            }
                        }
                        return true;
                    }
                    else {
                        if (value &&
                            schema &&
                            ((_a = (0, class_validator_1.validateSync)((0, class_transformer_1.plainToClass)(schema, value))) === null || _a === void 0 ? void 0 : _a.length)) {
                            return false;
                        }
                        else
                            return true;
                    }
                },
                defaultMessage(args) {
                    if (Array.isArray(args.value)) {
                        for (let i = 0; i < args.value.length; i++) {
                            return (args.value &&
                                args.value[i] &&
                                (0, class_validator_1.validateSync)((0, class_transformer_1.plainToClass)(schema, args.value[i]))
                                    .map((e) => e.constraints)
                                    .reduce((acc, next) => acc.concat(Object.values(next)), [])).toString();
                        }
                    }
                    else {
                        return (args.value &&
                            (0, class_validator_1.validateSync)((0, class_transformer_1.plainToClass)(schema, args.value))
                                .map((e) => e.constraints)
                                .reduce((acc, next) => acc.concat(Object.values(next)), [])).toString();
                    }
                },
            },
        });
    };
}
exports.ValidateNested = ValidateNested;
//# sourceMappingURL=service.validator.js.map